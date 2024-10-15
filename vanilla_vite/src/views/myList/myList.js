import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import page from './myList.html?raw'
import template from '../table.html?raw'

export default {
  renderHTML() {
    document.querySelector("#content").innerHTML = renderString(page)
  },
  loadScript() {
    logger.debug("MyList script")
    const myList = [{
      'name': 'Alfons',
      'role': 'Backend'
    },{
      'name': 'Armand',
      'role': 'Frontend'
    },{
      'name': 'Pep',
      'role': 'Full-stack'
    }]
    const list = document.querySelector('#list')
    list.innerHTML = renderString(template, {items:myList})
  }
}