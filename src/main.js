import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vue Router
import { createRouter, createWebHistory } from "vue-router";

import Home from "~/routes/Home.vue";
import Dice from "~/routes/Dice.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Home,
		},
		{
			path: "/dice",
			component: Dice,
		},
	],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
