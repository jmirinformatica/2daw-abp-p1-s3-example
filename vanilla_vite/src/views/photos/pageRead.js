import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import page from './pageRead.html?raw'
import template from './_photo.html?raw'

export default {
  renderHTML(params) {
    const data = {"id": params.id}
    document.querySelector("#content").innerHTML = renderString(page, data)
  },
  loadScript(params) {
    // Get ID from dynamic route
    const id = params.id
    // API call
    logger.debug("Photo API request...")
    const url = process.env.API_URL + `/photos/${id}`
		fetch(url, {
			headers: {
				"Accept": "application/json"
			},
			method: "GET",
		})
    .then(response => response.json())
    .then((data) => {
      logger.debug("Photo API response OK")
      let div = document.querySelector('#photo')
      div.innerHTML = renderString(template, { 
        photo: data
      })
    })
    .catch((error) => {
      logger.debug(error)
      alert("❌ Loading ERROR")
    })
  }
}