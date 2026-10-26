(function () {
  const E = window.ERRORS, P = window.PHASES;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const phaseName = (id) => (P.find((p) => p.id === id) || {}).short || id;

  // Speicher (mit Fallback, falls Storage gesperrt ist)
  const mem = {};
  const store = {
    get(k) { try { return window["local" + "Storage"].getItem(k); } catch (e) { return mem[k] ?? null; } },
    set(k, v) { try { window["local" + "Storage"].setItem(k, v); } catch (e) { mem[k] = v; } }
  };

  // Theme
  const root = document.documentElement;
  const savedTheme = store.get("klf-theme");
  root.dataset.theme = savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  $("#themeBtn").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    store.set("klf-theme", root.dataset.theme);
  });
  $("#printBtn").addEventListener("click", () => window.print());

  const cur = document.querySelector('.subnav a[aria-current="page"]');
  if (cur) cur.parentElement.scrollLeft = cur.offsetLeft - 16;

  const toast = (msg) => {
    const t = $("#toast"); t.textContent = msg; t.classList.add("is-on");
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("is-on"), 2000);
  };

  const weightHTML = (w) => w >= 4
    ? '<span class="wt wt--crit" data-w="4">kritisch</span>'
    : `<span class="wt" data-w="${w}" aria-label="Gewicht ${["", "gering", "mittel", "hoch"][w]}"><i></i><i></i><i></i> ${["", "gering", "mittel", "hoch"][w]}</span>`;

  const params = new URLSearchParams(location.search);
  const idxOf = (code) => E.findIndex((e) => e.code === String(code || "").toUpperCase());

  // ---------- Katalog ----------
  const list = $("#errList");
  if (list) {
  let current = 0, filter = "alle", tab = "ursachen";
  list.innerHTML = E.map((e, i) => `
    <li><button type="button" class="erritem" data-i="${i}" data-cat="${e.cat}">
      <span class="erritem__code">${e.code}</span>
      <span class="erritem__title">${esc(e.title)}</span>
      ${weightHTML(e.weight).replace(/ (gering|mittel|hoch)</, "<")}
    </button></li>`).join("");

  list.addEventListener("click", (ev) => {
    const b = ev.target.closest(".erritem"); if (!b) return;
    select(+b.dataset.i, true);
  });

  document.querySelectorAll(".chip[data-filter]").forEach((c) => c.addEventListener("click", () => {
    filter = c.dataset.filter;
    document.querySelectorAll(".chip[data-filter]").forEach((x) => x.classList.toggle("is-active", x === c));
    list.querySelectorAll(".erritem").forEach((b) => {
      const hide = filter !== "alle" && b.dataset.cat !== filter;
      b.parentElement.style.display = hide ? "none" : "";
    });
    if (filter !== "alle" && E[current].cat !== filter) select(E.findIndex((e) => e.cat === filter));
  }));

  const visibleIdx = () => E.map((e, i) => i).filter((i) => filter === "alle" || E[i].cat === filter);

  const panels = {
    ursachen: (e) => `<h4>Warum der Fehler entsteht</h4><div class="causes">${e.causes.map(([t, d]) => `<div class="cause"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join("")}</div>`,
    folgen: (e) => `<h4>Konsequenzen für die Bewertung</h4><div class="conseq"><p class="conseq__sum ${e.weight >= 4 ? "is-crit" : ""}">${esc(e.consequences.summary)}</p><ul>${e.consequences.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`,
    vermeidung: (e) => `<h4>Vermeidungstipps nach Schreibphase</h4><ol class="tips">${e.tips.map(([ph, t]) => `<li class="tip"><span class="phase-pill">${esc(phaseName(ph))}</span><span>${esc(t)}</span></li>`).join("")}</ol>`,
    beispiel: (e) => `<h4>Vorher und nachher</h4><div class="example">
      <div class="ex ex--bad"><div class="ex__label">✕ Problematisch</div><p class="ex__text">${esc(e.example.bad)}</p><p class="ex__note">${esc(e.example.badNote)}</p></div>
      <div class="ex ex--good"><div class="ex__label">✓ Besser</div><p class="ex__text">${esc(e.example.good)}</p><p class="ex__note">${esc(e.example.goodNote)}</p></div></div>`
  };
  const tabNames = { ursachen: "Ursachen", folgen: "Bewertungsfolgen", vermeidung: "Vermeidung", beispiel: "Beispiel" };

  function renderDetail() {
    const e = E[current];
    const vis = visibleIdx(), pos = vis.indexOf(current);
    $("#detail").innerHTML = `
      <div class="detail__meta">
        <span class="tag ${e.cat === "methodisch" ? "tag--m" : "tag--f"}">${e.cat === "methodisch" ? "Methodischer Fehler" : "Formaler Fehler"}</span>
        <span>Fehler ${current + 1} von 10</span>
      </div>
      <h3><span class="detail__code">${e.code}</span>${esc(e.title)}</h3>
      <p class="detail__short">${esc(e.short)}</p>
      <div class="detail__crit"><span>Bewertungskriterium: <b>${esc(e.criterion)}</b></span> ${weightHTML(e.weight)}</div>
      <div class="symptoms"><h4>Woran Sie den Fehler erkennen</h4><ul>${e.symptoms.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
      <div class="tabs" role="tablist" aria-label="Details zu ${esc(e.title)}">
        ${Object.keys(tabNames).map((k) => `<button type="button" class="tab" role="tab" id="tab-${k}" aria-controls="panel" aria-selected="${k === tab}" data-tab="${k}">${tabNames[k]}</button>`).join("")}
      </div>
      <div class="panel" id="panel" role="tabpanel" aria-labelledby="tab-${tab}">${panels[tab](e)}</div>
      <div class="detail__nav">
        <button type="button" class="btn" data-step="-1" ${pos <= 0 ? "disabled" : ""}>← ${pos > 0 ? E[vis[pos - 1]].code : "Zurück"}</button>
        <button type="button" class="btn" data-step="1" ${pos >= vis.length - 1 ? "disabled" : ""}>${pos < vis.length - 1 ? E[vis[pos + 1]].code : "Weiter"} →</button>
      </div>`;
    list.querySelectorAll(".erritem").forEach((b) => b.classList.toggle("is-active", +b.dataset.i === current));
  }

  $("#detail").addEventListener("click", (ev) => {
    const t = ev.target.closest(".tab");
    if (t) { tab = t.dataset.tab; select(current); $("#tab-" + tab).focus(); return; }
    const s = ev.target.closest("[data-step]");
    if (s) { const v = visibleIdx(); select(v[v.indexOf(current) + +s.dataset.step], true); }
  });
  $("#detail").addEventListener("keydown", (ev) => {
    if (!ev.target.classList.contains("tab")) return;
    const keys = Object.keys(tabNames); let i = keys.indexOf(tab);
    if (ev.key === "ArrowRight") i = (i + 1) % keys.length; else if (ev.key === "ArrowLeft") i = (i - 1 + keys.length) % keys.length; else return;
    tab = keys[i]; renderDetail(); $("#tab-" + tab).focus();
  });

  function select(i, scroll) {
    if (i == null || i < 0) return;
    current = i; renderDetail();
    try { history.replaceState(null, "", "?f=" + E[i].code + (tab !== "ursachen" ? "&tab=" + tab : "")); } catch (e) {}
    if (scroll && innerWidth <= 960) $("#detail").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Startzustand aus URL (z. B. katalog.html?f=F2&tab=vermeidung)
  const startTab = params.get("tab");
  if (startTab && panels[startTab]) tab = startTab;
  const startIdx = idxOf(params.get("f") || location.hash.slice(1));
  select(startIdx >= 0 ? startIdx : 0);
  }

  // ---------- Schreibprozess ----------
  if ($("#phases")) {
  const allTips = E.flatMap((e, i) => e.tips.map(([ph, t]) => ({ ph, t, e, i })));
  let phase = P.some((p) => p.id === params.get("phase")) ? params.get("phase") : P[0].id;
  $("#phases").innerHTML = P.map((p, n) => `<li><button type="button" class="phasebtn" role="tab" data-ph="${p.id}" aria-selected="${p.id === phase}">
    <span class="phasebtn__num">${String(n + 1).padStart(2, "0")}</span>
    <span class="phasebtn__name">${esc(p.name)}</span>
    <span class="phasebtn__count">${allTips.filter((x) => x.ph === p.id).length} Tipps</span></button></li>`).join("");
  const renderPhase = () => {
    document.querySelectorAll(".phasebtn").forEach((b) => b.setAttribute("aria-selected", b.dataset.ph === phase));
    const tips = allTips.filter((x) => x.ph === phase);
    const n = P.findIndex((p) => p.id === phase);
    $("#phaseHead").innerHTML = `<h2>Phase ${n + 1}: ${esc(P[n].name)}</h2><p>${tips.length} Tipps gegen ${new Set(tips.map((x) => x.e.code)).size} Fehlerbilder</p>`;
    $("#phaseTips").innerHTML = tips.map((x) => `
      <div class="ptip"><span class="ptip__code">${x.e.code}</span><span>${esc(x.t)}</span>
      <span class="ptip__err">Gegen: <a href="katalog.html?f=${x.e.code}&tab=vermeidung">${esc(x.e.title)}</a></span></div>`).join("");
  };
  $("#phases").addEventListener("click", (ev) => {
    const b = ev.target.closest(".phasebtn"); if (!b) return;
    phase = b.dataset.ph; renderPhase();
    history.replaceState(null, "", "?phase=" + phase);
  });
  renderPhase();
  }

  // ---------- Selbstcheck ----------
  if ($("#checkGrid")) {
  let state = {};
  try { state = JSON.parse(store.get("klf-check") || "{}"); } catch (e) { state = {}; }
  const total = E.reduce((n, e) => n + e.check.length, 0);
  $("#checkGrid").innerHTML = E.map((e, i) => `
    <div class="cgroup" data-g="${i}">
      <div class="cgroup__head"><h3><a href="katalog.html?f=${e.code}"><span>${e.code}</span>${esc(e.title)}</a></h3><span class="cgroup__count"></span></div>
      ${e.check.map((c, j) => `<label class="citem"><input type="checkbox" data-k="${e.code}-${j}" ${state[e.code + "-" + j] ? "checked" : ""}><span>${esc(c)}</span></label>`).join("")}
    </div>`).join("");
  function updateProgress() {
    const done = Object.values(state).filter(Boolean).length;
    const pct = Math.round((done / total) * 100);
    $("#progNum").textContent = pct + " %";
    $("#progTxt").textContent = `${done} von ${total} Punkten`;
    $("#ringFg").style.strokeDashoffset = 119.4 * (1 - done / total);
    document.querySelectorAll(".cgroup").forEach((g) => {
      const e = E[+g.dataset.g]; const d = e.check.filter((_, j) => state[e.code + "-" + j]).length;
      g.querySelector(".cgroup__count").textContent = d === e.check.length ? "Erledigt" : `${d}/${e.check.length}`;
      g.classList.toggle("is-done", d === e.check.length);
    });
  }
  $("#checkGrid").addEventListener("change", (ev) => {
    const k = ev.target.dataset.k; if (!k) return;
    state[k] = ev.target.checked; store.set("klf-check", JSON.stringify(state)); updateProgress();
  });
  $("#openOnly").addEventListener("change", (ev) => $("#checkGrid").classList.toggle("openonly", ev.target.checked));
  $("#resetCheck").addEventListener("click", () => {
    state = {}; store.set("klf-check", "{}");
    document.querySelectorAll("#checkGrid input").forEach((i) => (i.checked = false));
    updateProgress(); toast("Selbstcheck zurückgesetzt");
  });
  updateProgress();
  }

  // ---------- Feedback ----------
  if ($("#fbGrid")) {
  $("#codeLegend").innerHTML = ["methodisch", "formal"].map((c) => `<div class="codes__group"><h2>${c === "methodisch" ? "Methodische Fehler" : "Formale Fehler"}</h2><ul>${E.filter((e) => e.cat === c).map((e) => `<li><a href="#fb-${e.code}"><b>${e.code}</b> ${esc(e.title)}</a></li>`).join("")}</ul></div>`).join("");
  $("#fbGrid").innerHTML = E.map((e, i) => `
    <div class="fb" id="fb-${e.code}">
      <div class="fb__head"><span class="fb__code" title="Randkürzel">${e.code}</span><h3>${esc(e.title)}<small>Randkürzel ${e.code} · ${esc(e.criterion)}</small></h3></div>
      <p class="fb__text">${esc(e.feedback)}</p>
      <div class="fb__actions"><button type="button" class="btn" data-copy="${i}">Baustein kopieren</button><a class="btn btn--ghost" href="katalog.html?f=${e.code}">Details ansehen</a></div>
    </div>`).join("");
  $("#fbGrid").addEventListener("click", async (ev) => {
    const c = ev.target.closest("[data-copy]");
    if (!c) return;
    const txt = E[+c.dataset.copy].feedback;
    try { await navigator.clipboard.writeText(txt); toast("Baustein in die Zwischenablage kopiert"); }
    catch (e) {
      const ta = document.createElement("textarea"); ta.value = txt; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); toast("Baustein in die Zwischenablage kopiert"); } catch (_) { toast("Kopieren nicht möglich"); }
      ta.remove();
    }
  });
  }

  // ---------- Druckfassung (alle Fehler vollständig) ----------
  const pr = document.createElement("div"); pr.className = "printall";
  pr.innerHTML = E.map((e) => `<article><h3>${e.code} · ${esc(e.title)}</h3><p>${esc(e.short)} Kriterium: ${esc(e.criterion)}.</p>
    <h4>Erkennungsmerkmale</h4><ul>${e.symptoms.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    <h4>Ursachen</h4><ul>${e.causes.map(([t, d]) => `<li><b>${esc(t)}:</b> ${esc(d)}</li>`).join("")}</ul>
    <h4>Bewertungsfolgen</h4><p>${esc(e.consequences.summary)}</p><ul>${e.consequences.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    <h4>Vermeidung</h4><ul>${e.tips.map(([p, t]) => `<li><b>${esc(phaseName(p))}:</b> ${esc(t)}</li>`).join("")}</ul></article>`).join("");
  if (list) $("#inhalt").appendChild(pr);
})();
