<script>
export default{
    name: 'WorkInProgress'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-8 img-box">
                <img src="../assets/jumbo/workInProgress_jumbo.png" alt="work in progress deliveroo image" draggable="false">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .img-box{
        width: 100%;
        height: calc(100vh - 95px);
        display: flex;        
        img{
            display: block;
            width: 100%;
            margin: auto;
        }
    }
</style>
