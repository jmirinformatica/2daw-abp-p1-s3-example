import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import page from './logout.html?raw'
// Router
import router from '../../lib/router'
// Layout
import layout from '../layouts/base.js'

export default {
  renderHTML() {
    logger.debug("Render logout page")
    document.querySelector("#content").innerHTML = renderString(page)
  },
  loadScript() {
    // Cancel
    let cancelBtn = document.querySelector('#cancelLogout')
    cancelBtn.addEventListener('click', function(event){
      logger.debug("Cancel logout...")
      router.navigateTo('/')
    })
    // Confirm
    let confirmBtn = document.querySelector('#confirmLogout')
    confirmBtn.addEventListener('click', function(event){
      logger.debug("Confirm logout...")
      // TODO Backend logout
      // ...
      // TODO Destroy user session on success
      // ...
      // Refresh layout header
      layout.refreshUser()
      // Redirect with message
      alert("Session closed ✅")
      router.navigateTo('/')
    })
  }
}