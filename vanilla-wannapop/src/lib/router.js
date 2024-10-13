export class Router {
    
    constructor(root, nav, routes={}) {
      this.app = document.querySelector(root)
      this.nav = nav
      this.routes = routes
    }

    setRoutes(routes) {
        this.routes = routes
    }
    
    renderContent(route) {
        // Route callbacks
        if (this.routes[route].renderHTML) {
            // Render page
            this.app.innerHTML = this.routes[route].renderHTML()
            // Refresh navigate events
            this.registerNavLinks()
        }
        if (this.routes[route].loadScript) {
            // Execute JavaScript
            this.routes[route].loadScript()
        }
    }

    navigateTo(route) {
        window.history.pushState({}, "", route)
        this.renderContent(route)
    }

    registerNavLinks() {
        const self = this
        const links = document.querySelectorAll(this.nav)
        for(let i=0; i<links.length; i++) {
            links[i].addEventListener("click", (e) => {
                e.preventDefault()
                const { href } = e.target
                window.history.pushState({}, "", href)
                self.navigateTo(e.target.pathname)
            })
        }
    }

    registerBrowserBackAndForth = () => {
        const self = this
        window.onpopstate = function (e) {
            const route = window.location.pathname
            self.renderContent(route)
        }
    }

    renderInitialPage() {
        const route = window.location.pathname
        this.renderContent(route)
    }

    bootup() {
        this.registerBrowserBackAndForth()
        this.renderInitialPage()        
    }
}

const router = new Router('#app', 'a[route]')

export default router