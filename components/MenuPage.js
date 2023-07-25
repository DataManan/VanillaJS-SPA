export class MenuPage extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({ mode: "open" });
        // const template = document.getElementById("menu-page-template");
        // const content = template.content.cloneNode(true);
        // this.root.appendChild(content); 

        const styles = document.createElement("style");
        this.root.appendChild(styles);
        // ccreating a function to load css
        async function loadCSS() {
            const request = await fetch("/compoments/MenuPage.css");
            const css = await request.text();
            styles.textContent = css;
        }

        // calling loadCSS function
        loadCSS();
    }

    // when component is connected to DOM
    connectedCallback() {
        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
}

customElements.define("menu-page", MenuPage);
// now we've created our custom component, we need to link it to our DOM, so we can view it
// To do that, we've to export MenuPage class
