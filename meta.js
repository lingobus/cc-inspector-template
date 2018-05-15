module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Component name, dash separated words, no space or punctuations"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Inspector description"
    },
    "author": {
      "type": "string",
      "label": "Author"
    }
  },
  "metalsmith": {
    after:function (metalsmith, opts, helpers) {
      metalsmith.use(function (files, metalsmith, done){
        const meta = metalsmith.metadata()
        const compName = meta.compName = meta.name.replace(/^([a-z])|(-[a-z])/g, function (a) {
          return a.replace('-','').toUpperCase()
        })
        const val = files['inspector.js']
        delete files['inspector.js']
        files[compName + '-inspector.js'] = val
        done(null, files)
      })
    }
  },
  "completeMessage": `
    Now add

    editor: {
      inspector: 'packages://{{name}}/{{compName}}-inspector.js'
    }

    to your component!`
};