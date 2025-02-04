<template>
	<div
		class="grow flex flex-col justify-between bg-grey-700 rounded-tr-md p-1 max-lg:rounded-t-md max-lg:gap-12.5"
	>
		<div class="past-bets"></div>

		<dice-range></dice-range>
		<dice-deal></dice-deal>
	</div>
</template>

<script setup>
import DiceRange from "~/components/Games/Dice/DiceRange.vue";
import DiceDeal from "~/components/Games/Dice/DiceDeal.vue";
</script>
