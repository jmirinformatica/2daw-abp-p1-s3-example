import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import layout from './base.html?raw'
import template from './_user.html?raw'

export default {
  renderHTML() {
    logger.debug("Render layout...")
    const data = { "developer": "Profes DAW" }
    document.querySelector("#app").innerHTML = renderString(layout, data)
  },
  refreshUser() {
    logger.debug("Refresh layout...")    
    const userDiv = document.querySelector('#user')
    const data = {"username": "Maria"}
    userDiv.innerHTML = renderString(template, data)    
  }
}