<template>
	<aside
		class="dice-sidebar w-1/4 p-1.5 rounded-l-md flex flex-col gap-y-1 max-lg:order-1 max-lg:w-full max-lg:p-1"
	>
		<dice-mode></dice-mode>

		<form class="flex flex-col gap-y-1">
			<dice-bet></dice-bet>
			<dice-profit></dice-profit>
			<dice-button></dice-button>
		</form>
	</aside>
</template>

<script setup>
import DiceMode from "~/components/Games/Dice/DiceMode.vue";
import DiceBet from "~/components/Games/Dice/DiceBet.vue";
import DiceProfit from "~/components/Games/Dice/DiceProfit.vue";
import DiceButton from "~/components/Games/Dice/DiceButton.vue";
</script>
