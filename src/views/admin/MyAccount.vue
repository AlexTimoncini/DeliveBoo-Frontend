<template>
    <div class="container">
        <div class="row">
            <DashboardSidebar />
            <DashboardNavbar />
        </div>
    </div>
</template>

<script>
import DashboardSidebar from '../../components/admin/DashboardSidebar.vue';
import DashboardNavbar from '../../components/admin/DashboardNavbar.vue';
export default {
    name: 'MyAccount',
    data() {
    },
    components: { DashboardSidebar, DashboardNavbar }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;
</style>