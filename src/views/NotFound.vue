<script>
export default{
    name: 'NotFound'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-8 img-box">
                <img src="../assets/mascotte/boo-404.png" alt="not found boo image" draggable="false">
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
