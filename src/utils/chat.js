export default {
  // Returns an object for the current status of the websocket
  getStatus(websocket) {
    switch (websocket.readyState) {
      case 0:
        return {
          face: '(ᵔᴥᵔ)',
          color: 'is-warning',
          text: 'Connecting...'
        }
      case 1:
        return {
          face: '•ᴗ•',
          color: 'is-success',
          text: 'Connected!'
        }
        break
      case 2:
        return {
          face: '⇀_↼',
          color: 'is-warning',
          text: 'Closing :/'
        }
      case 3:
        return {
          face: '눈_눈',
          color: 'is-danger',
          text: 'Closed :('
        }
    }
  },

  // Generate a random token
  generateToken(length) {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_)°^¨$*£ù%=+:/;.,?-(}{[]&é@#'
    let token = ''
    for (let i = 0; i < length; i++) {
      token += chars[Math.floor(Math.random() * chars.length)]
    }

    return token
  },

  // Send the error message when the voice cannot load
  sendVoiceErrorMessage(toast) {
    toast.open({
      duration: 5000,
      message: `Olivia's voice cannot load, her voice is now the default english one.`,
      position: 'is-top',
      type: 'is-danger'
    })
  },

  createUserInformations() {
    // Generate the token
    if (localStorage.getItem('token') == null) {
      localStorage.setItem('token', chat.generateToken(200))
    }

    if (localStorage.getItem('information') == null) {
      localStorage.setItem('information', JSON.stringify({
        name: ''
      }))
    }
  },

  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
}