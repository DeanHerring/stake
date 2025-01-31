<template>
	<stake-header></stake-header>

	<main class="content w-full min-h-screen">
		<section class="game-wrapper">
			<stake-container class="flex flex-col">
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
							class="grow flex flex-col justify-between bg-grey-700 rounded-tr-md p-1"
						>
							<div></div>

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

							<div class="w-full bg-grey-500 rounded-md p-1.5">
								<ul class="w-full grid grid-cols-3 gap-1">
									<li v-for="n in 3">
										<h3
											class="font-nunito font-semibold text-grey-200"
										>
											Multiplier
										</h3>
										<div
											class="flex items-center justify-between w-full relative"
										>
											<input
												type="number"
												:min="1.012"
												:max="9900"
												:value="1.012"
												class="dice-part w-full font-nunito font-semibold text-white outline-none duration-300 focus:border-grey-200 bg-grey-700 p-[7px] rounded border-2 border-grey-400 pr-4"
											/>
											<img
												:src="Xmark"
												alt="xmark"
												class="absolute top-1/2 right-[7px] -translate-y-1/2"
											/>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<footer
						class="dice-footer bg-grey-700 mt-1 py-1 px-2 rounded-b-md"
					>
						<div class="flex items-center justify-between">
							<div></div>
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
				</div>

				<div
					class="w-120 max-w-full bg-grey-700 rounded-md mt-2 py-2.5 px-2"
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
import { onMounted, ref, useTemplateRef } from "vue";

import BTC from "~/assets/BTC.svg";
import Xmark from "~/assets/Close.svg";
// import Percentage from "~/assets/percentage.svg";
// import RollOver from "~/assets/Reload.svg";
import stake from "~/assets/stake.svg";

import StakeHeader from "~/components/Header/StakeHeader.vue";
import StakeContainer from "~/components/UI/StakeContainer.vue";

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
