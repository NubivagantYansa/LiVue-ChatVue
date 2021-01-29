import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import { projectAuth } from "./firebase/config";

let app;

// this is to avoid the app redirect us when we refresh or manaully add paths in the URL. The ridirection happens because Firebase takes a fraction of second to connect and in that fraction of second the app is mounted on the DOM.

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
