import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { subNavList } from "./store/sub";
import { registerApp } from "./util";

registerApp(subNavList);

createApp(App).use(router()).mount("#micro_web_main_app");

// history.go、  history.back、  history.forward 触发 popstate
window.addEventListener("popstate", function () {
  console.log("popstate");
});

const oldPushState = window.history.pushState;
window.history.pushState = function (...args) {
  oldPushState.apply(window.history, args);
  console.log("pushState");
};

const oldReplaceState = window.history.replaceState;
window.history.replaceState = function (...args) {
    oldReplaceState.apply(window.history, args);
  console.log("replaceState");
};
