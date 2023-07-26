export class MenuPage extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({ mode: "open" });
        // const template = document.getElementById("menu-page-template");
        // const content = template.content.cloneNode(true);
        // this.root.appendChild(content); 

        const styles = document.createElement("style");
        
        // ccreating a function to load css
        async function loadCSS() {
            const request = await fetch("./components/MenuPage.css");
            const css = await request.text();
            styles.textContent = css;
        }

        // calling loadCSS function
        loadCSS();
        this.root.appendChild(styles);
    }

    // when component is connected to DOM
    connectedCallback() {
        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        window.addEventListener("appmenuchange", () => {
            this.render();
        })
    }
    render() {
        if (app.store.menu) {
            for (let category of app.store.menu) {
                const liCategory = document.createElement("li")
                liCategory.innerHTML = `
                <h3>${category.name}</h3>
                <ul className="category">
                </ul>
                `;
                this.root.querySelector("#menu").appendChild(liCategory);

                category.products.forEach(product => {
                    const item = document.createElement("product-item");
                    item.dataset.product = JSON.stringify(product);
                    liCategory.querySelector("ul").appendChild(item);

                });
            }
        } else {
            this.root.querySelector("#menu").innerHTML = "Loading...";
        }
    }
}

customElements.define("menu-page", MenuPage);
// now we've created our custom component, we need to link it to our DOM, so we can view it
// To do that, we've to export MenuPage class
