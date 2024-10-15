import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import page from './login.html?raw'
// Router
import router from '../../lib/router'
// Layout
import layout from '../layouts/base.js'

export default {
  renderHTML() {
    logger.debug("Render login page")
    document.querySelector("#content").innerHTML = renderString(page)
  },
  loadScript() {
    logger.debug("Login page")
    let form = document.querySelector('#loginForm')
    form.addEventListener('submit', function(event){
      logger.debug("Login form submit...")
      // No submit
      event.preventDefault()
      // Form data
      const formData = new FormData(event.target);
      const email = formData.get('email');
      const password = formData.get('password');
      // TODO Backend login
      // ...
      // TODO Create user session on success
      // ...
      // Refresh layout header
      layout.refreshUser()
      // Redirect with message
      alert("Session created ✅")
      router.navigateTo('/')
    })
  }
}