<template>
  <div id="">
    <input type="text" v-model='inputVal'/>
    <button @click="submit()">提交</button>
    <ul>
      <listItem 
      v-for="(item,index) in list" 
      :content="item" :index="index" 
      :key="index"   v-on:del="del(index)" 
      ></listItem>
      <!-- @del="del"或者v-on:del="del(index)" 不能用@click="del(index)" -->
    </ul>
  </div>
</template>

<script>
import listItem from './components/listItem'

export default {
  name: 'example',
  components: {
    listItem
  },
  data(){
   return{
     list:[],
     inputVal:''
   } 
  },
  methods:{
    submit(){
      this.list.push(this.inputVal);
      this.inputVal=""
    },
    del(index){
      debugger;
      this.list.splice(index,1);
    }
  }

}
</script>

<style>

</style>
