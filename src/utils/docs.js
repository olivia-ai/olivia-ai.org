import docs from '../../public/docs/documentation.json'
import axios from "axios"

export default {
  getDocumentation() {
    let output = []
    for (let i = 0; i < docs.documentation.length; i++) {
      let doc = docs.documentation[i]
      const file = require('../../public/docs/' + doc.id + '.md')

      axios.get(file).then(res => {
        doc['content'] = res.data
      })

      output.push(doc)
    }

    return output
  }
}