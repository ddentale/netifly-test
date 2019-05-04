const Metalsmith  = require('metalsmith')
const htmlMinifier = require("metalsmith-html-minifier")
const cleanCSS = require('metalsmith-clean-css')
const imagemin = require('metalsmith-imagemin')


function build(done = ()=>{}) {
    Metalsmith(__dirname)
    .metadata({
        title: "ASCESA Solutions s.r.l.",
        description: "Tecnologie, competenze e persone al servizo del tuo business.",
        generator: "Metalsmith",
        url: "https://www.ascesa.it/"
    })
    .source('./src')
    .ignore('**/*.docx')
    .destination('./build')
    .clean(true)
    .use(htmlMinifier())
    .use(cleanCSS()) 
    .use(imagemin({
        optimizationLevel: 3,
        svgoPlugins: [{ removeViewBox: false }]
    }))
    .build(function(err, files) {
        if (err) { throw err; }
        done()
    })
}

exports.default = build