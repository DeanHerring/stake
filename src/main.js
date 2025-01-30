import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vue Router
import { createRouter, createWebHistory } from "vue-router";

import Home from "~/routes/Home.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Home,
		},
	],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
