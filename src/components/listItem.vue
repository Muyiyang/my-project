<template>
  <div class="">
    <li @click="handleClick()">{{content}}</li>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props:['content','index'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleClick(){
      debugger;
      this.$emit('del',this.index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
