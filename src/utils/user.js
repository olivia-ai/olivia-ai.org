// Generates a random token
function generateToken(length) {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_)°^¨$*£ù%=+:/;.,?-(}{[]&é@#'
  let token = ''
  for (let i = 0; i < length; i++) {
    token += chars[Math.floor(Math.random() * chars.length)]
  }
  return token
}

// Creates information about the user
function createUserInformation(context) {
  // Generate the token
  if (localStorage.getItem('token') == null) {
    context.$buefy.snackbar.open({
      message: context.$t('chat.welcome'),
      duration: 5000,
      position: 'is-top'
    })
    localStorage.setItem('token', generateToken(200))
  }

  if (localStorage.getItem('information') == null) {
    localStorage.setItem('information', JSON.stringify({
      name: ''
    }))
  }
}

export { createUserInformation }
