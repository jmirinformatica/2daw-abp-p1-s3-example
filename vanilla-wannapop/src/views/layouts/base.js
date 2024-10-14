import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import layout from './base.html?raw'
import template from './_user.html?raw'

export default {
  renderHTML() {
    logger.debug("Layout render...")
    const data = { "author": "Profes DAW" }
    document.querySelector("#app").innerHTML = renderString(layout, data)
  },
  refresh() {
    logger.debug("Refresh layout...")
    const data = {"username": "Maria"}
    document.querySelector('#user').innerHTML = renderString(template, data)
  }
}