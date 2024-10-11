import logger from '../../lib/logger'
// Nunjucks template engine
import { render, renderString } from 'nunjucks'
import template from './hello.html?raw'

export default {
  renderHTML() {
    return render('src/pages/home/home.html')
  },
  loadScript() {
    logger.debug("Home script")
    const username = "Developer"
    document.querySelector('#hello').innerHTML = renderString(template, {username})
  }
}