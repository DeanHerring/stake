<template>
	<div>
		<header class="flex items-center justify-between">
			<h3 class="font-nunito font-bold text-sm text-grey-200">
				Bet Amount
			</h3>
			<span class="font-nunito font-bold text-xs text-grey-200"
				>$0.00</span
			>
		</header>
		<div class="grid grid-cols-10 w-full mt-[2.5px]">
			<div
				class="col-span-7 flex bg-grey-700 px-1 py-1 rounded-l-sm border-2 border-grey-400"
			>
				<input
					type="number"
					class="w-full font-nunito font-bold text-sm text-white outline-none"
					:value="0.0"
				/>
				<img :src="BTC" alt="BTC" class="w-2" />
			</div>
			<div class="col-span-3 flex items-center justify-between">
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
</template>

<script setup>
import BTC from "~/assets/BTC.svg";
</script>
