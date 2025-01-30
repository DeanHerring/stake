<template>
	<Header />

	<main class="content w-full min-h-screen bg-grey-600">
		<section class="game-wrapper">
			<Container>
				<div
					class="dice w-120 max-w-full min-h-70 bg-grey-500 mx-auto mt-5 rounded-md flex flex-col"
				>
					<div class="dice-main flex h-full flex-1">
						<aside class="dice-sidebar w-1/4 p-1.5 rounded-l-md">
							<div
								class="grid grid-cols-2 bg-grey-700 rounded-full p-0.5 gap-x-0.5"
							>
								<button
									class="font-nunito text-white font-semibold bg-grey-700 py-1 rounded-full duration-300 hover:bg-grey-400 cursor-pointer"
								>
									Manual
								</button>
								<button
									class="font-nunito text-white font-semibold bg-grey-700 py-1 rounded-full duration-300 hover:bg-grey-400 cursor-pointer"
								>
									Auto
								</button>
							</div>

							<form>
								<div class="mt-1">
									<header
										class="flex items-center justify-between"
									>
										<h3
											class="font-nunito font-bold text-sm text-grey-200"
										>
											Bet Amount
										</h3>
										<span
											class="font-nunito font-bold text-xs text-grey-200"
											>$0.00</span
										>
									</header>
									<div
										class="grid grid-cols-10 w-full mt-[2.5px]"
									>
										<div
											class="col-span-7 flex bg-grey-700 px-1 py-1 rounded-l-sm border-2 border-grey-400"
										>
											<input
												type="number"
												class="w-full font-nunito font-bold text-sm text-white outline-none"
												:value="0.0"
											/>
											<img
												:src="BTC"
												alt="BTC"
												class="w-2"
											/>
										</div>
										<div
											class="col-span-3 flex items-center justify-between"
										>
											<button
												class="w-full h-full bg-grey-400 font-nunito font-semibold text-white text-sm border-2 border-grey-400 duration-300 hover:bg-grey-300 hover:border-grey-300 cursor-pointer"
											>
												½
											</button>

											<button
												class="w-full h-full bg-grey-400 font-nunito font-semibold text-white text-sm border-2 border-grey-400 duration-300 hover:bg-grey-300 hover:border-grey-300 rounded-r-sm cursor-pointer"
											>
												2x
											</button>
										</div>
									</div>
								</div>

								<div class="mt-1">
									<header
										class="flex items-center justify-between"
									>
										<h3
											class="font-nunito font-bold text-sm text-grey-200"
										>
											Profit on Win
										</h3>
										<span
											class="font-nunito font-bold text-xs text-grey-200"
											>$0.00</span
										>
									</header>
									<div class="w-full mt-[2.5px]">
										<div
											class="flex items-center justify-between bg-grey-400 px-1 py-1 rounded-sm border-2 border-grey-400"
										>
											<h3
												class="font-nunito font-bold text-sm text-white"
											>
												0.00000000
											</h3>
											<img
												:src="BTC"
												alt="BTC"
												class="w-2"
											/>
										</div>
									</div>
								</div>

								<button
									class="font-nunito font-bold text-grey-700 w-full py-1.5 rounded-sm bg-green-400 mt-1 cursor-pointer duration-300 hover:bg-green-300"
								>
									Bet
								</button>
							</form>
						</aside>
						<div
							class="grow flex flex-col justify-center bg-grey-700 rounded-tr-md p-1"
						>
							<div class="w-8/10 mx-auto">
								<div class="mx-2">
									<ul
										class="flex items-center justify-between"
									>
										<li
											v-for="step in [0, 25, 50, 75, 100]"
											:key="step"
											class="flex flex-col items-center"
										>
											<h3
												class="font-nunito font-bold text-white"
											>
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
						</div>
					</div>
					<footer class="dice-footer"></footer>
				</div>
			</Container>
		</section>
	</main>
</template>

<script setup>
import { onMounted, ref, useTemplateRef } from "vue";
import BTC from "~/assets/BTC.svg";

import Header from "~/components/Header/SHeader.vue";
import Container from "~/components/UI/SContainer.vue";

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
