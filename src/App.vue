<script>
import NavbarApp from './components/NavbarApp.vue';
import FooterApp from './components/FooterApp.vue';
export default{
	name: 'App',
	components: {
		NavbarApp,
		FooterApp
	}
}
</script>

<template>
	<NavbarApp />
	<router-view>
		
	</router-view>
	<FooterApp />
</template>

<style lang="scss">
@import url('../node_modules/bootstrap/scss/bootstrap.scss');
@import url('./styles/general.scss');
</style>
