<template>
  <div>
    <div>
      <input v-model="inputValue"/>
      <button @click="handleClick">提交</button>{{inputValue}}
    </div>
    <ul>
      <todo-item
        v-for="(item,index) in list"
        :key="index"
        :content="item"
        :index="index"
        @delete="del"
      >{{item}}</todo-item>
    </ul>
    <header class="container">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-md-4">
            <img class="img-responsive"style="height:50px;" src="./assets/images/logo.png">
          </div>
          <div class="col-xs-6 col-md-4 col-md-offset-4">
            <ul class="nav nav-pills pull-right" id="header-nav">
              <header-nav v-for="(item,index) in headernav"
              :content="item" :key="index"
              :class="item=='首页'?'active':''"></header-nav>
            </ul>
          </div>
        </div>
      </div>
      <h1 class="text-center">{{headertext}}</h1>
      <h2 class="text-center">{{headerdetail}}</h2>
      <div class="container">
        <div class="row">
           <div class="col-md-3"></div>
           <div class="col-md-3"></div>
        </div>
      </div>
    </header>
    <div></div>
    <footer></footer>

  </div>

</template>

<script>
/*引入子组件*/
import headerNav from './components/headerNav'
import todoItem from './components/todoItem'

export default {
	components:{
		'header-nav':headerNav,
		'todo-item':todoItem
	},
	data(){
		return{
			inputValue:"",
			list:[],
      headernav:['首页','下载'],
      headertext:'Pathway to re:link',
      headerdetail:'无论你在哪里，YoMail 让你的沟通像聊天一样自如，让你的协作像面对面一样轻松。'
		}
	},
	methods:{
		handleClick(){
			this.list.push(this.inputValue);
			this.inputValue="";
		},
		del(index){
			this.list.splice(index,1);
		}
	}
}
</script>

<style>

</style>
