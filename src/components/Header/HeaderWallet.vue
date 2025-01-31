<template>
	<div
		class="wallet flex max-sm:row-start-2 max-sm:row-end-2 max-sm:col-span-3 max-sm:mt-1"
		v-if="store.isAuth"
	>
		<div
			class="grow duration-300 hover:bg-grey-800 cursor-pointer bg-grey-700 rounded-l-sm py-1 px-1.25 flex items-center"
		>
			<span class="font-nunito font-semibold text-white text-sm"
				>0.00000000</span
			>
			<img :src="BTC" alt="BTC" class="w-2 ml-0.5" />
		</div>
		<div>
			<button
				class="duration-300 hover:bg-blue-600 cursor-pointer rounded-r-sm px-1 h-full bg-blue-500 font-nunito text-white font-semibold text-sm"
			>
				Wallet
			</button>
		</div>
	</div>
</template>

<script setup>
import BTC from "~/assets/BTC.svg";
import { useHeaderStore } from "~/stores/useHeaderStore";

const store = useHeaderStore();
</script>
