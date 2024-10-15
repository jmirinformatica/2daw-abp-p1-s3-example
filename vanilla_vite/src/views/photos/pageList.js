import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import page from './pageList.html?raw'
import template from './_photos.html?raw'

export default {
  renderHTML() {
    document.querySelector("#content").innerHTML = renderString(page)
  },
  loadScript() {
    // API call
    logger.debug("Photos list API request...")
    const url = process.env.API_URL + `/photos`
		fetch(url, {
			headers: {
				"Accept": "application/json"
			},
			method: "GET",
		})
    .then(response => response.json())
    .then((data) => {
      logger.debug("Photos list API response OK")
      let list = document.querySelector('#photos')
      list.innerHTML = renderString(template, { 
        photos: data
      })
    })
    .catch((error) => {
      logger.debug(error)
      alert("❌ Loading ERROR")
    })
  }
}