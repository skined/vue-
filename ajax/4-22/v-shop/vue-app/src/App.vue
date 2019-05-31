<template>
  <div id="app">
    <Nav/>
    <keep-alive>
      <router-view v-if="$route.meta.keepalive">
      </router-view>
    </keep-alive>
    <router-view/>
  </div>
</template>
<script>
  
  import Nav from './components/Nav';
  export default{
      components:{
         Nav
      }
  }

</script>

<style lang="less">
*{
   margin:0;
   padding:0;

}
html,body{
  height:100%;
}
.container{
  position:fixed;
  width:100%;
  height:100%;
  bottom:56px;
  overflow-y:auto;
}
</style>
