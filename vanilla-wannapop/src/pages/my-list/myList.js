import logger from '../../lib/logger'
// Nunjucks template engine
import { render, renderString } from 'nunjucks'
import template from '../../templates/table.html?raw'

export default {
  renderHTML() {
    return render('src/pages/my-list/myList.html')
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