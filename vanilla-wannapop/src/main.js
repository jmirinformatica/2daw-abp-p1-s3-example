// Import our custom CSS
import './assets/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Configuration
console.log("App environment: " + process.env.APP_ENV)
console.log("Debug mode: " + (process.env.APP_DEBUG ? "on" : "off"))

// Router
import router from './lib/router.js'

import Home from './pages/home/home.js'
import Counter from './pages/counter/counter.js'
import MyList from './pages/my-list/myList.js'

const routes = {
    '/': Home,
    '/counter': Counter,
    '/my-list': MyList,
}

router.setRoutes(routes)
router.bootup()