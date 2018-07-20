<template>
   <li role="presentation"><a href="#">{{content}}</a></li>
</template>

<script>
export default {
  props:['content'],
	methods:{
		handleDelete(){
      this.$emit('delete',this.index);
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.item{
	COLOR:#00F;
	}
</style>
