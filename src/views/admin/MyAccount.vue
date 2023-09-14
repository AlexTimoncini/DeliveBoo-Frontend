<template>
    Account
    <DashboardSidebar />
</template>

<script>
import DashboardSidebar from '../../components/DashboardSidebar.vue';
export default {
    name: 'MyAccount',
    data() {
    },
    components: { DashboardSidebar }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;
</style>