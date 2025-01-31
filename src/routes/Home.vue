<script setup>
import StakeHeader from "~/components/Header/StakeHeader.vue";
import OriginalGames from "~/components/Games/OriginalGames.vue";

import StakeContainer from "~/components/UI/StakeContainer.vue";
</script>

<template>
	<stake-header></stake-header>

	<main class="content w-full min-h-screen">
		<header class="stake-originals w-full bg-grey-500 py-4">
			<stake-container>
				<h1 class="font-nunito font-bold text-3xl text-white">
					Stake Originals
				</h1>
			</stake-container>
		</header>

		<section class="games">
			<stake-container>
				<original-games></original-games>
			</stake-container>
		</section>
	</main>
</template>

<style scoped>
.online {
	box-shadow: 0 0 0 5px #00b801;
}
</style>
