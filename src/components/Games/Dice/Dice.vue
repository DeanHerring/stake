<template>
	<div
		class="dice w-120 max-w-full min-h-70 bg-grey-500 mx-auto rounded-md flex flex-col max-lg:w-40"
	>
		<div class="dice-main flex h-full flex-1 max-lg:flex-col">
			<dice-sidebar></dice-sidebar>
			<dice-game></dice-game>
		</div>

		<dice-footer></dice-footer>
	</div>
</template>

<script setup>
import DiceSidebar from "~/components/Games/Dice/DiceSidebar.vue";
import DiceGame from "~/components/Games/Dice/DiceGame.vue";
import DiceFooter from "~/components/Games/Dice/DiceFooter.vue";
</script>
