export class OrderPage extends HTMLElement {
    constructor() {
        super();

    }
}

customElements.define("order-page", OrderPage);
// now we've created our custom component, we need to link it to our DOM, so we can view it
// To do that, we've to export MenuPage class