<template>
	<div class="w-8/10 mx-auto max-lg:w-full">
		<div class="mx-2">
			<ul class="flex items-center justify-between">
				<li
					v-for="step in [0, 25, 50, 75, 100]"
					:key="step"
					class="flex flex-col items-center"
				>
					<h3 class="font-nunito font-bold text-white">
						{{ step }}
					</h3>
					<div
						class="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-grey-400"
					></div>
				</li>
			</ul>
		</div>
		<div
			class="w-full dice-range h-[48px] relative mx-auto bg-grey-400 border-x-20 border-grey-400 rounded-full"
		>
			<input
				type="range"
				min="2"
				max="98"
				class="thumb w-full relative z-10"
				ref="dice-range"
				v-model="diceValue"
				@input="(e) => avoid(e.target.value)"
			/>
			<div
				class="dice-track w-full h-[8px] rounded-full absolute top-1/2 -translate-y-1/2 outline-10 outline-grey-700"
				ref="dice-track"
			></div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, useTemplateRef } from "vue";

let diceValue = ref(90);
let diceTrackRef = useTemplateRef("dice-track");

onMounted(() => {
	avoid(diceValue.value);
});

const avoid = (value) => {
	diceTrackRef.value.style.background = `linear-gradient(90deg, #e9113c ${value}%, #00e701 ${value}%)`;
};
</script>

<style scoped>
.thumb {
	appearance: none;
	height: 44px;
}

.thumb::-webkit-slider-thumb {
	appearance: none;
	width: 44px;
	aspect-ratio: 1 / 1;
	background: url("~/assets/range_drag.svg") no-repeat;
	cursor: pointer;
	outline: 0;
}
</style>
