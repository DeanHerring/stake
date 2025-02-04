<template>
	<footer
		class="dice-footer bg-grey-700 mt-1 py-2 px-2 rounded-b-md max-lg:mt-0"
	>
		<div class="flex items-center justify-between">
			<div>
				<img :src="stake" alt="stake" />
			</div>
			<div>
				<span
					class="font-nunito font-semibold text-grey-100 cursor-pointer"
					>Fairness</span
				>
			</div>
		</div>
	</footer>
</template>

<script setup>
import stake from "~/assets/stake.svg";
</script>
