<template>
	<div class="w-full bg-grey-500 rounded-md p-1.5 max-lg:p-1">
		<ul class="w-full grid grid-cols-3 gap-1 max-lg:gap-0.5">
			<li v-for="n in 3">
				<h3
					class="font-nunito font-semibold text-grey-200 max-lg:text-sm"
				>
					Multiplier
				</h3>
				<div class="flex items-center justify-between w-full relative">
					<input
						type="number"
						:min="1.012"
						:max="9900"
						:value="1.012"
						class="dice-part w-full font-nunito font-semibold text-white outline-none duration-300 focus:border-grey-200 bg-grey-700 p-[7px] rounded border-2 border-grey-400 pr-4 max-lg:text-sm"
					/>
					<img
						:src="Xmark"
						alt="xmark"
						class="absolute top-1/2 right-[7px] -translate-y-1/2 max-lg:w-2"
					/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
import Xmark from "~/assets/Close.svg";
</script>
