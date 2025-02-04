<template>
	<stake-header></stake-header>

	<main class="content w-full min-h-screen py-5">
		<section class="game-wrapper">
			<stake-container class="flex flex-col">
				<Dice />

				<div
					class="w-120 max-w-full mx-auto bg-grey-700 rounded-md mt-2 py-2.5 px-2"
				>
					<h3 class="font-nunito font-semibold text-white">
						Dice
						<a href="/" class="text-grey-100 ml-1">Stake Origins</a>
					</h3>
				</div>
			</stake-container>
		</section>
	</main>
</template>

<script setup>
import StakeHeader from "~/components/Header/StakeHeader.vue";
import StakeContainer from "~/components/UI/StakeContainer.vue";

import Dice from "~/components/Games/Dice/Dice.vue";
</script>
