<template>
  <div class="about">
    <div class="container" @scroll="sLoadM" ref="eleScr" >
      <ul class="con-items">
       <router-link v-for = "item in pagelist" :key="item.id" tag='li' :to="{path:'/detail',query:{id:item.id}}"> 
        <img v-lazy="item.img" alt="">
        <p>{{item.name}}</p>
        <p>{{item.info}}</p>
        <p>{{item.price}}</p>
        <button class="btn" @click.stop="addCar(item)">添加到购物车</button>
       </router-link> 
      </ul>
      <div class="btnbox">
      <button class="btn" @click="loadMore">{{hasMore?'点击加载更多':'没有更多了'}}</button>
      </div>
    </div>
     
  </div>
</template>

<script>
  import {getPage,addGood} from '../api';
  export default{
    data(){
      return{
        page:0,
        pagelist:[],
        hasMore:true
      }
    },
    created(){
       this.getList()
    },
    methods:{
      async getList(page){
        let {data:{hasMore,pagedata}} = await getPage(this.page)
        this.pagelist = this.pagelist.concat(pagedata)
        this.hasMore = hasMore
      },
    sLoadM(){
    clearTimeout(this.timer);
      this.timer=setTimeout(()=>{
         let{clientHeight,scrollTop,scrollHeight}=  this.$refs.eleScr
      if(scrollTop+clientHeight+20>scrollHeight
    ){ 
       this.loadMore()
       }
      },600)
      },
      loadMore(){
       this.page++
       if(!this.hasMore) return
       this.getList()
      },
      //添加到购物车
      async addCar(good){
        //请求到后端
        //  good = JSON.stringify(good);
        let {code} = await addGood(good)
        if(code==200){
          alert('添加成功');
        }else{
          alert('网络错误，请稍后再试');
        }
       }
    }
  }
</script>

<style lang="less" scoped>
  .con-items{
  box-sizing:border-box;
     padding:0 20px;
     li{
       display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:center;

     }
  }
  .btnbox{
     text-align:center;
  }
  .btn{
     width:200px;
     height:60px;
     line-height:60px;
     outline:none;
     display:inline-block;
     appearance:none;
     background:antiquewhite;
     border-radius:20px;

  }
</style>
