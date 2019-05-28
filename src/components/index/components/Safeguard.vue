<template>
    <div class="safeguard">
       <Guarantee></Guarantee>
    </div>
</template>

<script>
    import Guarantee from '../../Public/Guarantee'
    export default {
        name: "safeguard",
        components:{
          Guarantee
        }
    }
</script>

<style scoped>
   .safeguard{
     width:92%;
     margin: 0 4% 0 4%;
   }
</style>
