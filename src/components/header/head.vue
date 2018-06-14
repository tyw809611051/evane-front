<template>
    <div id='head-top'>
        <!-- left title -->
        <div class="web-title">
          <span>evane</span>  
        </div>
        <!-- right title -->
        <div class="category-title">
        <span>登陆</span> 
        </div>
    </div>
</template>

<script>

export default {
  name: 'headTop',
  data () {
    return {
      msg: 'tangyiwen'
    }
  }
}
</script>

<style>
#head-top {
  height: 20%;
  width: 100%;
}

.web-title {
  height: 100%;
  width: 10%;
  float: left;
  margin-left: 5%;
  background-color: aqua;
}
.web-title > span {
  font-size: 50px;
}
.category-title {
  height: 100%;
  width:20%;
  float: right;
  margin-right: 5%;
  background-color: chartreuse;
}

span {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: whitesmoke;
}


</style>