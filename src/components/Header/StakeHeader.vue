<template>
	<header
		class="header w-full bg-grey-600 h-6 flex items-center max-sm:min-h-6 max-sm:py-1.5 max-sm:h-auto relative"
	>
		<stake-container>
			<div
				class="flex items-center justify-between max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-2"
			>
				<Logo />
				<Wallet />
				<Login />
			</div>
		</stake-container>
	</header>
</template>

<script setup>
import Logo from "~/components/Header/HeaderLogo.vue";
import Wallet from "~/components/Header/HeaderWallet.vue";
import Login from "~/components/Header/HeaderLogin.vue";

import StakeContainer from "~/components/UI/StakeContainer.vue";
</script>

<style scoped>
.header {
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
