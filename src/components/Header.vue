<!--  -->
<template>
  <div class="header">
    <img src="../assets/cnodejs_light.svg" alt="">
    <span><a href="">关于</a></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

 
}

</script>
<style lang='less' scoped>
  .header {
    height: 50px;
    background:#5a5555 ;

  }
  a {
		text-decoration: none;
		color: #cbc9c9;
	}
	img {
		max-width: 120px;
		margin-left: 50px;
		margin-top: 10px;
	}
	span {
		float: right;
		margin-right: 50px;
		margin-top: 10px;
	}
</style>