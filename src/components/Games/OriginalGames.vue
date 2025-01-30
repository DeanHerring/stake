<template>
	<div class="my-5 w-full">
		<ul
			class="w-full grid grid-cols-8 gap-1.5 max-xl:grid-cols-5 max-xl:gap-1 max-md:grid-cols-4 max-sm:grid-cols-2"
		>
			<li class="cursor-pointer duration-300 hover:-mt-1" v-for="n in 10">
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
</template>

<script setup>
import DragonTower from "~/assets/dragon_tower.svg";
</script>
