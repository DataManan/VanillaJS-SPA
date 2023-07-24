const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                
                // const url = a.href;
                const url = a.getAttribute("href");
                Router.go(url);
            });

            // Check the initial url
            Router.go(location.pathname);
        });
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);
        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
    }
}

export default Router;