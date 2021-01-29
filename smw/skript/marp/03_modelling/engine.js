// engine.js
const { Marp } = require('@marp-team/marp-core')

const markdownItMark = require('markdown-it-mark')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItContainer = require('markdown-it-container')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItDiv = require('markdown-it-div')
// const markdownIt = require('markdown-it')
const markdownItDef = require('markdown-it-deflist')


module.exports = (opts) => new Marp(opts)
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
.use(require('markdown-it-fontawesome'));

// .use(require('markdown-it-mark'))
// .use(require('markdown-it-container'), 'definition')
// .use(require('markdown-it-footnote'))