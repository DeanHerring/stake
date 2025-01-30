<script setup>
import Header from "~/components/Header/SHeader.vue";
import OriginalGames from "~/components/Games/OriginalGames.vue";

import Container from "~/components/UI/SContainer.vue";
</script>

<template>
	<Header />

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
.online {
	box-shadow: 0 0 0 5px #00b801;
}
</style>
