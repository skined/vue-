<template>
  <div class="container">
    <HeadTitle>购物车页面</HeadTitle>
    <div>
      <label for="checkAll">
        <span>全选</span>
        <input type="checkbox" class="inp" id="checkAll" v-model="checkAll">
      </label>
    </div>
    <div>总价：{{totalPrice}}</div>
    <ul class="carList-con">
      <li v-for="good in carlist" :key="good.id">
        <input type="checkbox" class="inp" id="inp" v-model="good.sele" @change="modiGood(good)">
        <div>
          <img :src="good.img" alt>
          <p>{{good.name}}</p>
          <p>{{good.price}}</p>
          <p>
            <span @click="modiGood(good,1)">+</span>
            {{good.count}}
            <span @click="modiGood(good,-1)">-</span>
          </p>
          <button @click.stop="deleGood(good)" class="btn">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCarList, deleCarGood, changeCount } from "../api";
import HeadTitle from "../components/HeadTitle.vue";
export default {
  name: "my",
  components: {
    HeadTitle
  },
  computed: {
    checkAll: {
      get() {
        // return this.carList.every(item=>item.sele==true)
        return !this.carlist.some(item => item.sele == false);
        //首先判断选中的有多少个 把选中的放到一个新数组里面，判断选中的数组长度是否是所有商品的长度
        //   let newary=this.carList.filter(item=>item.sele==true)
        //   return newary.length==this.carList.length;
      },
      set(val) {
        this.carlist.forEach(item => (item.sele = val));
      }
    },
    totalPrice() {
      return this.carlist.filter(item => item.sele == true).reduce((prev, next) => {
          return prev + next.count * next.price;
        }, 0);
    }
  },
  data() {
    return {
      carlist: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 获取购物车列表
    async getList() {
      console.log(await getCarList());
      let { data } = await getCarList();
      console.log(data);
      this.carlist = data;
      this.carlist.forEach(item => {
        this.$set(item, "sele", true);
      });
    },
    // 购物车删除功能
    async deleGood(good){
      //点击发送删除请求
      await deleCarGood(good.id);
      //请求成功之后前端作删除(需要后端删除之后前端再去作删除)
      // 条件成立的新数组
      this.carlist = this.carlist.filter(item => item.id != good.id);
      //  this.carlist.splice(index,1)
    },
    //商品数量加一事件
    //参数改变事件
    async modiGood(good, num) {
      if (num) {
        //num存在的时候才修改num存在证明剪辑的是加号或者减号，否则点击的是单选
        good.count += num;
        if (good.count < 1) {
          good.count = 1;
        }
      }
      //   good=JSON.stringify(good)
      await changeCount(good);
    }
  }
};
</script>
<style lang="less" scoped>
.inp {
  appearance: none;
  width: 40px;
  height: 40px;
  border: 1px solid green;
  border-radius: 50%;
  position: relative;
}
.inp:checked.inp:before {
  position: absolute;
  content: "√";
  width: 20px;
  height: 20px;
  top: 15px;
  left: 15px;
  color: green;
}
.carlist-con {
  li {
    padding: 0px 10px;
    display: flex;
    .inp {
      align-self: center;
    }
    div {
      padding-left: 10px;
    }
  }
}
</style>