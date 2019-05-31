<template>
    <div class="con">
        <HeadTitle :showArrow='true'>详情页</HeadTitle>
        <img  :src="single.img" alt="">
        <p>{{single.name}}</p>
        <p>{{single.info}}</p>
        <p>{{single.price}}</p>
    </div>
</template>
<script>
import HeadTitle from '../components/HeadTitle.vue'
import {getDetail} from '../api'
export default {
data(){
    return{
        single:{
            img:null,
            name:null
        }
    }
},
components:{
    HeadTitle
} ,
created(){
    this.Detail()
},
computed:{
    deId(){
        return this.$route.query.id
    }
},
methods:{
    //返回事件
    async Detail(){
        let {data}=await getDetail(this.deId)
        this.single=data
        if(JSON.stringify(this.single)=='{}'){
            this.$router.push('/About')
        }

    }
}   
}
</script>
<style lang='less' scoped>
.con{
    position:fixed;
    width:100%;
    height:100%;
    z-index:30;
    background:#fff;
    overflow:auto;
    .header{
        height:50px;
        background:honeydew;
        align-items:center;
        justify-content:center;
        line-height:50px;
           }
    }
</style>
