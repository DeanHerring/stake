<script setup>
import stake from "~/assets/stake.svg";
import BTC from "~/assets/BTC.svg";
import DragonTower from "~/assets/dragon_tower.svg";
import Bars from "~/assets/bars.svg";

import Container from "~/components/UI/SContainer.vue";
</script>

<template>
	<header class="header w-full bg-grey-600 py-1.5 z-10">
		<Container>
			<div class="logo">
				<a href="/"><img :src="stake" alt="logo" /></a>
			</div>

			<div class="wallet flex">
				<div
					class="duration-300 hover:bg-grey-800 cursor-pointer bg-grey-700 rounded-l-sm py-1 px-1.25 flex items-center"
				>
					<span class="font-nunito font-semibold text-white"
						>0.00000000</span
					>
					<img :src="BTC" alt="BTC" class="w-2 ml-0.5" />
				</div>
				<div>
					<button
						class="duration-300 hover:bg-blue-600 cursor-pointer rounded-r-sm px-1 h-full bg-blue-500 font-nunito text-white font-semibold"
					>
						Wallet
					</button>
				</div>
			</div>

			<div class="login">
				<a href="#">
					<button
						class="font-nunito text-white font-semibold cursor-pointer"
					>
						Sign In
					</button>
				</a>

				<a href="#">
					<button
						class="duration-300 hover:bg-blue-600 font-nunito text-white font-semibold bg-blue-500 py-0.75 px-1.5 rounded-sm ml-1 cursor-pointer"
					>
						Register
					</button>
				</a>
			</div>
		</Container>
	</header>

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
				<div class="my-5 w-full">
					<ul
						class="w-full grid grid-cols-8 gap-1.5 max-xl:grid-cols-5 max-xl:gap-1 max-md:grid-cols-4 max-sm:grid-cols-2"
					>
						<li class="cursor-pointer" v-for="n in 10">
							<div class="">
								<img
									:src="DragonTower"
									alt="Dragon Tower"
									class="rounded-lg w-full"
								/>
							</div>
							<div class="mt-1 flex items-center">
								<div
									class="online w-0.75 h-0.75 rounded-full bg-green-500 ml-0.5"
								></div>
								<h3
									class="font-nunito text-white text-xs font-semibold ml-1"
								>
									6,931
									<span class="text-grey-200">playing</span>
								</h3>
							</div>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	</main>
</template>

<style scoped>
.header {
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
.online {
	box-shadow: 0 0 0 5px #00b801;
}
</style>
