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
import myList from './views/my-list/myList.js'

const routes = {
    '/': home,
    '/counter': counter,
    '/my-list': myList,
}

router.setRoutes(routes)
router.bootup()