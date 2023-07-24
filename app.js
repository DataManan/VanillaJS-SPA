// Importing modules
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Store from "./services/Store.js";

window.app = {}
app.store = Store;
// app.api = API;

// adding event to check if DOM is ready
window.addEventListener("DOMContentLoaded", async () => {
  // 
  loadData();
});