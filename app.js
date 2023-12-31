// Importing modules
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

// linking components
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";
import ProductItem from "./components/ProductItem.js";

window.app = {}
app.store = Store;
app.router = Router;


// adding event to check if DOM is ready
window.addEventListener("DOMContentLoaded", async () => {
  // 
  loadData();
  app.router.init();
});