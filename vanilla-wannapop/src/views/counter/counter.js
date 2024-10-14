import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import page from './counter.html?raw'
// Router
import router from '../../lib/router'

export default {
  renderHTML() {
    document.querySelector("#content").innerHTML = renderString(page)
  },
  loadScript() {
    logger.debug("Counter script")
    const element = document.querySelector('#counter')
    let counter = 0
    const setCounter = (count) => {
      counter = count
      element.innerHTML = `count is ${counter}`
      if (count >= 3) {
        router.navigateTo('/')
      }
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
  }
}