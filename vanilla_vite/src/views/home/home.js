import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import page from './home.html?raw'

export default {
  renderHTML() {
    const data = {"username": "Developer"}
    document.querySelector("#content").innerHTML = renderString(page, data)
  }
}