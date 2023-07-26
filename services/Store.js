const Store = {
    menu: null, 
    cart : []
}

const ProxiedStore = new Proxy(Store, {
    set(target, property, value) {
        target[property] = value;
        if (property == "menu") {
          window.dispatchEvent(new Event("appmenuchange"));

          /*
            * why window and not document
            * Because each component can has its own document aka shadow doms but,
            * we would only have one window for our whole app!
            * 
            */
        }
        if (property == "cart") {
            window.dispatchEvent(new Event("appcartchange"));
        }
        return true;
    }
})

export default ProxiedStore;