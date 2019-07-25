import readingTime from 'reading-time'
import posts from '../../public/blog/posts.json'

export default {
  getPosts() {
    let output = []
    for (let i = 0; i < posts.posts.length; i++) {
      let post = posts.posts[i]
      const content = require('../../public/blog/' + post.id + '.md');

      post['content'] = content
      post['readingTime'] = readingTime(content).text

      output.push(post)
    }

    return output
  }
}