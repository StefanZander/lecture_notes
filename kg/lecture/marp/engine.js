
// engine.js
const { Marp } = require('@marp-team/marp-core')

const markdownItMark = require('markdown-it-mark')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItContainer = require('markdown-it-container')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItDiv = require('markdown-it-div')
const markdownIt = require('markdown-it')
const markdownItFontAwesome = require('markdown-it-fontawesome')
const markdownItDef = require('markdown-it-deflist')
// const mermaidIt = require('markdown-it-mermaid') //not working
const markdownItInlineColor = require('@gerhobbelt/markdown-it-inline-text-color')
const markdownItBracketedSpans = require('markdown-it-bracketed-spans')
const mdi = require('markdown-it-mdi') // addes material design icons
const markdownItGraphviz = require('markdown-it-graphviz-exc') // adds graphviz-support


module.exports = (opts) => new Marp(opts)
// module.exports = (opts) => new Marp({
//     html: true,
//     emoji: {
//         shortcode: true,
//         unicode: true
//     }
// })
// .use(markdownIt)
.use(markdownItMark)
.use(markdownItAttrs)
.use(markdownItContainer, 'definition')
.use(markdownItContainer, 'task')
.use(markdownItContainer, 'note')
.use(markdownItContainer, 'columns')
.use(markdownItContainer, '1st-col')
.use(markdownItContainer, '2nd-col')
.use(markdownItContainer, '3nd-col')
// .use(markdownItFootnote)
// .use(require('markdown-it-footnote'))
.use(require('markdown-it-sup'))
.use(markdownItDiv)
.use(markdownItDef)
.use(markdownItInlineColor)
.use(markdownItBracketedSpans)
.use(markdownItFontAwesome)
// .use(mermaidIt)
.use(markdownItGraphviz) // added 2023-03-21 by SZA
.use(mdi);


// .use(require('markdown-it-mark'))
// .use(require('markdown-it-container'), 'definition')
// .use(require('markdown-it-footnote'))
// .use(mermaidIt) //not working