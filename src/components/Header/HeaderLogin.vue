<template>
	<div
		class="login max-sm:row-start-1 max-sm:row-end-1 max-sm:col-span-1 flex justify-end"
	>
		<div v-if="!store.isAuth">
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
		<div v-else>
			<img :src="AccountIcon" alt="Account" class="w-3 cursor-pointer" />
		</div>
	</div>
</template>

<script setup>
import { useHeaderStore } from "~/stores/useHeaderStore";
import AccountIcon from "~/assets/account.svg";

const store = useHeaderStore();
</script>
