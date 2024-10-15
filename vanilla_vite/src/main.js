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

import home from './views/home/page.js'
import login from './views/auth/login.js'
import logout from './views/auth/logout.js'
import counter from './views/counter/page.js'
import authors from './views/authors/page.js'
import photosList from './views/photos/pageList.js'
import photosRead from './views/photos/pageRead.js'

const routes = {
    '/': home,
    '/login': login,
    '/logout': logout,
    '/counter': counter,
    '/authors': authors,
    '/photos': photosList,
    // TODO Router dynamic URL
    '/photos/<id>': photosRead,
}

router.setRoutes(routes)
router.bootup()