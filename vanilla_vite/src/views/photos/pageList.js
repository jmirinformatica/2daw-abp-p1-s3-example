import logger from '../../lib/logger'
// Nunjucks template engine
import { renderString } from 'nunjucks'
import page from './pageList.html?raw'
import template from './_photos.html?raw'
// API
import photoService from '../../services/photoService'

export default {
  renderHTML() {
    document.querySelector("#content").innerHTML = renderString(page)
  },
  loadScript() {
    // Llistat
    logger.debug("Photos list API request...")
    photoService.getAll()
      .then((data) => {
        logger.debug("Photos list API response OK")
        let list = document.querySelector('#photos')
        list.innerHTML = renderString(template, { 
          photos: data
        })
      })
      .catch((error) => {
        logger.debug(error)
        // Mostrar missatge d'error a l'usuari/a
        alert("❌ Error carregant fotos")
      })
  }
}