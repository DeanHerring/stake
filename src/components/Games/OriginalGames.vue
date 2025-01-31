<template>
	<div class="my-5 w-full">
		<ul
			class="w-full grid grid-cols-8 gap-1.5 max-xl:grid-cols-5 max-xl:gap-1 max-md:grid-cols-4 max-sm:grid-cols-2"
		>
			<li
				class="cursor-pointer duration-300 hover:-mt-1"
				v-for="game in games"
				:key="game.id"
			>
				<div class="">
					<img
						:src="game.thumbnail"
						:alt="game.title"
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
						{{ game.online }}
						<span class="text-grey-200">playing</span>
					</h3>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from "vue";

const games = ref([
	{
		id: 0,
		title: "Crash",
		thumbnail:
			"https://sol-games-fe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrash.ce3274ff.png&w=1920&q=75",
		online: 6931,
	},
	{
		id: 1,
		title: "Roulette",
		thumbnail:
			"https://sol-games-fe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froulette.9000ba2d.png&w=1920&q=75",
		online: 716,
	},
	{
		id: 2,
		title: "Dice",
		thumbnail:
			"https://sol-games-fe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdice.0f31cc8e.png&w=1920&q=75",
		online: 6162,
	},
	{
		id: 3,
		title: "Mines",
		thumbnail:
			"https://sol-games-fe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmines.65067e1b.png&w=1920&q=75",
		online: 91,
	},
	{
		id: 4,
		title: "Plinko",
		thumbnail:
			"https://sol-games-fe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplinko.f4f85af0.png&w=1920&q=75",
		online: 22,
	},
	{
		id: 5,
		title: "Towers",
		thumbnail:
			"https://sol-games-fe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftowers.12a51292.png&w=1920&q=75",
		online: 1298,
	},
]);
</script>
