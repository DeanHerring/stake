<template>
	<header class="header w-full bg-grey-600 py-1.5 z-10">
		<Container>
			<Logo />
			<Wallet />
			<Login />
		</Container>
	</header>
</template>

<script setup>
import Logo from "~/components/Header/SHeaderLogo.vue";
import Wallet from "~/components/Header/SHeaderWallet.vue";
import Login from "~/components/Header/SHeaderLogin.vue";

import Container from "~/components/UI/SContainer.vue";
</script>

<style scoped>
.header {
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
