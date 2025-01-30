<script setup>
import Logo from "~/components/Header/SHeaderLogo.vue";
import Wallet from "~/components/Header/SHeaderWallet.vue";
import Login from "~/components/Header/SHeaderLogin.vue";

import OriginalGames from "~/components/Games/OriginalGames.vue";

import Container from "~/components/UI/SContainer.vue";
</script>

<template>
	<header class="header w-full bg-grey-600 py-1.5 z-10">
		<Container>
			<Logo />
			<Wallet />
			<Login />
		</Container>
	</header>

	<main class="content w-full min-h-screen bg-grey-600">
		<header class="stake-originals w-full bg-grey-500 py-4">
			<Container>
				<h1 class="font-nunito font-bold text-3xl text-white">
					Stake Originals
				</h1>
			</Container>
		</header>

		<section class="games">
			<Container>
				<original-games></original-games>
			</Container>
		</section>
	</main>
</template>

<style scoped>
.header {
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
.online {
	box-shadow: 0 0 0 5px #00b801;
}
</style>
