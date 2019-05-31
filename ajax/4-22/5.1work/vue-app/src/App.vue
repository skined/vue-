<template>
    <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader :addtodo="addtodo"/>
      <todoList :todos="todos" :deletetodo="deletetodo"/>
      <todoFooter :todos="todos"  :deleteCompletetodos="deleteCompletetodos" :selectAlltodos="selectAlltodos"/>
    </div>
  </div>
</template>

<script>
import todoHeader from './components/todoHeader.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'
export default {
  data(){
    return{
      //读取值
      todos:[]
    }
  },
  methods:{
   addtodo(todo){
     this.todos.unshift(todo)
   },
   deletetodo(index){
     this.todos.splice(index,1)
   },
   //删除选中的
   deleteCompletetodos(){
     this.todos = this.todos.filter(todo=>!todo.complete)
   },
   //全选或全不选
   selectAlltodos(check){
     this.todos.forEach(todo=>todo.complete=check)
   }
  },
  watch:{//监视
    todos:{
      deep:true,
      handler:function(value){
        window.localStorage[value]=JSON.stringify(value)
      }
    }

  },
    components:{
      todoHeader,
      todoList, 
      todoFooter
    }
}
</script>

<style>
  .todo-container {
  width: 600px;
  margin: 0 auto;
}
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>


