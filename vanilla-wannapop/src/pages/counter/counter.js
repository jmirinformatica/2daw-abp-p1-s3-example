import logger from '../../lib/logger'
// Nunjucks template engine
import { render } from 'nunjucks'
// Router
import router from '../../lib/router'

export default {
  renderHTML() {
    return render('src/pages/counter/counter.html')
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