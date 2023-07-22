const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);

HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
HTMLElement.prototype.on = (a, b) => this.removeEventListener(a, b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready");
});
// const elem = document.querySelector('#tempID')
// const contents = elem.innerHTML;

// elem.innerHTML = `
// <h1 
// style="color:blue; background-color: rgba(0, 255, 0, 0.5)">
// Hello World ! </h1>
// <p>This is some html code inserted from app.js</p>`;
