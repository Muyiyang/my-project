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
  </div>

</template>

<script>
import todoItem from './components/todoItem'

export default {
	components:{
		'todo-item':todoItem
	},
	data(){
		return{
			inputValue:"",
			list:[]
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
