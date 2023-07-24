// Importing modules
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

window.app = {}
app.store = Store;
app.router = Router;


// adding event to check if DOM is ready
window.addEventListener("DOMContentLoaded", async () => {
  // 
  loadData();
  app.router.init();
});