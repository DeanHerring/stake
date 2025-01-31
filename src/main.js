import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Pinia
import { createPinia } from "pinia";

// Routes
import Home from "~/routes/Home.vue";
import Dice from "~/routes/Dice.vue";

// VueRouter
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

// Pinia
const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
