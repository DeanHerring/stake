<template>
	<div class="max-lg:order-2">
		<header class="flex items-center justify-between">
			<h3 class="font-nunito font-bold text-sm text-grey-200">
				Profit on Win
			</h3>
			<span class="font-nunito font-bold text-xs text-grey-200"
				>$0.00</span
			>
		</header>
		<div class="w-full mt-[2.5px]">
			<div
				class="flex items-center justify-between bg-grey-400 px-1 py-1 rounded-sm border-2 border-grey-400"
			>
				<h3 class="font-nunito font-bold text-sm text-white">
					0.00000000
				</h3>
				<img :src="BTC" alt="BTC" class="w-2" />
			</div>
		</div>
	</div>
</template>

<script setup>
import BTC from "~/assets/BTC.svg";
</script>
