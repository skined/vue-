<template>
  <div>
    <span>{{msg}}</span>
    <span>我来自传值{{abc}}</span>
  </div>
</template>

<script>
  export default{
    props:{
      abc:{
        default:()=>([1,2,3])
      }
    },
    data:function(){
       return{
         msg:'我是msg组件'
       }
    }
  }

</script>
<style>
</style>
