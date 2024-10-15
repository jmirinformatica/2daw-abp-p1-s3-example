// Import our custom CSS
import './assets/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Configuration
console.log("App environment: " + process.env.APP_ENV)
console.log("Debug mode: " + (process.env.APP_DEBUG ? "on" : "off"))

// Layout
import layout from './views/layouts/base.js'
layout.renderHTML()

// Router
import router from './lib/router.js'

import home from './views/home/home.js'
import counter from './views/counter/counter.js'
import myList from './views/myList/myList.js'
import photosList from './views/photos/photosList.js'
import photosRead from './views/photos/photosRead.js'

const routes = {
    '/': home,
    '/counter': counter,
    '/my-list': myList,
    '/photos': photosList,
    // TODO Router dynamic URL
    '/photos/<id>': photosRead,
}

router.setRoutes(routes)
router.bootup()