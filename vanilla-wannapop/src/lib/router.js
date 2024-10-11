export default function createRouter(root, nav, routes) {

    const app = document.querySelector(root);

    const renderContent = (route) => {
        // Route callbacks
        app.innerHTML = routes[route].renderHTML()
        if (routes[route].loadScript) {
            routes[route].loadScript()
        }
        // Refresh navigate events
        registerNavLinks();
    };

    const navigate = (e) => {
        const route = e.target.pathname;
        window.history.pushState({}, "", route);
        renderContent(route);
    };

    const registerNavLinks = () => {
        const links = document.querySelectorAll(nav);
        for(let i=0; i<links.length; i++) {
            links[i].addEventListener("click", (e) => {
                e.preventDefault();
                const { href } = e.target;
                window.history.pushState({}, "", href);
                navigate(e);
            });
        }
    };

    const registerBrowserBackAndForth = () => {
        window.onpopstate = function (e) {
            const route = window.location.pathname;
            renderContent(route);
        };
    };

    const renderInitialPage = () => {
        const route = window.location.pathname;
        renderContent(route);
    };

    (function bootup() {
        registerBrowserBackAndForth();
        renderInitialPage();        
    })();
}