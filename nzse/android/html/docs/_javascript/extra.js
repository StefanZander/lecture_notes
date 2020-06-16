var active_elements;
var h2s = document.getElementsByTagName("h2");
var h2_array = new Array();
var display;

let observer ;

for (i = 0; i < h2s.length; i++) {
    console.log(h2s[i].firstChild);
}


// function isElementInViewport (el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
//     );
// }

// function isElementOutViewport (el) {
//     var rect = el.getBoundingClientRect();
//     return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
// }




function onEntry(entry) {
    entry.forEach(e => {
        var node = e.target;
        console.log(node.firstChild.wholeText + "; " + node.getBoundingClientRect().top);
        // console.log(node instanceof HTMLElement);
        index = h2_array.indexOf(node);
        // console.log(index);
        if (node.getBoundingClientRect().top > 0 && index > 0) {
            display = h2_array[index - 1];
        }  
        if (node.getBoundingClientRect.top < 0 ) {
            display = h2_array[index];
        } 
        if (display != null) {
            console.log("Display: " + display.firstChild.wholeText);
        }
    });

}


window.onload = function() {
    h2s = document.getElementsByTagName("h2");
    
    console.log("In window.onload...");
    
    // list of options
    let options = {
        threshold: [1.0]
    };

    observer = new IntersectionObserver(onEntry, options);

    for (i = 0; i < h2s.length; i++) {
        observer.observe(h2s[i]);
        // h2_array[h2s[i].firstChild.wholeText] = h2s[i];
        h2_array.push(h2s[i]);
    }

}

