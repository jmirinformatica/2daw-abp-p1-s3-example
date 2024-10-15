import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import page from './pageRead.html?raw'
import template from './_photo.html?raw'
// API
import photoService from '../../services/photoService'

export default {
  renderHTML() {
    document.querySelector("#content").innerHTML = renderString(page)
  },
  loadScript() {
    // TODO Get ID from URL
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const id = urlParams.get('id')
    // Obtenir un recurs
    logger.debug("Photo API request...")
    photoService.getOne(id)
      .then((data) => {
        logger.debug("Photo API response OK")
        let div = document.querySelector('#photos')
        div.innerHTML = renderString(template, { 
          photo: data
        })
      })
      .catch((error) => {
        logger.debug(error)
        // Mostrar missatge d'error a l'usuari/a
        alert("❌ Error carregant foto")
      })
  }
}