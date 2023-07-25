const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
        a.addEventListener("click", (event) => {
        event.preventDefault();

        // const url = a.href;
        const url = a.getAttribute("href");
        Router.go(url);
        });
        // adding event handler for URL changes
        window.addEventListener("popstate", event => {
            Router.go(event.state.route, false);
        })
    
        // Check the initial url
        Router.go(location.pathname);
    });
        
        
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);
    if (addToHistory) {
      history.pushState({ route }, "", route);
      /*Here We create routes for the components of web app
       * That way we could create a SPA with our own custom writing
       */
    }
    let pageElement = null;
    switch (route) {
        case "/":
            pageElement = document.createElement("menu-page");
            pageElement.textContent = "Home page!!!";
            break;
        case "/order":
            pageElement = document.createElement("order-page");
            pageElement.textContent = "Orders page!!!";
            break;
        default:
            if (route.startsWith("/product-")) {
                pageElement = document.createElement("details-page");
                pageElement.textContent = "Details page!!!";
                const paramId = route.substring(route.lastIndexOf("-") + 1);
                pageElement.dataset.id = paramId;
                
            }
        
    }
    //  updating the DOM, by injecting new elements
    // in this technique, we would inject new element to the DOM and we could
    // also remove unrequired elements from it
    // document.querySelector("main").children[0].remove();
    if (pageElement) {
        const cache = document.querySelector("main");
        cache.innerHTML = "";
        cache.appendChild(pageElement);
        window.scrollX = 0;
        window.scrollY = 0;
        
    }
  },
};

export default Router;

// Router.init.bind()
