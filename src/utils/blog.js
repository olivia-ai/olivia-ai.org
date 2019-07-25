import posts from '../../public/blog/posts.json'
import axios from 'axios'

export default {
  getPosts() {
    let output = []
    for (let i = 0; i < posts.posts.length; i++) {
      let post = posts.posts[i]
      const file = require('../../public/blog/' + post.id + '.md')

      axios.get(file).then(res => {
        post['content'] = res.data
      })

      output.push(post)
    }

    return output
  },

  findPostByID(id) {
    let posts = this.getPosts()

    for (let i = 0; i < posts.length; i++) {
      let post = posts[i]

      if (post.id === id) {
        return post
      }
    }
  }
}