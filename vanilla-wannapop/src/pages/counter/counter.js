import logger from '../../lib/logger'
// Nunjucks template engine
import { render } from 'nunjucks'

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
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
  }
}