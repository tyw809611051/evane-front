<template>
    <header id='head-top'>
        <!-- left title -->
        <div class="web-title">
          <span>竖心乙</span>  
          <p>evane.com.cn</p>  
        </div>
        <!-- right title -->
        <div class="category-title">
          <span>首页</span> 
          <span>分类</span> 
          <span>登录</span> 
          <span>|</span> 
          <span class="el-icon-search"></span>
        </div>
    </header>
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
  width: 100%;
  height: 10%;
  position:fixed;
  top:5%;
  color: #ffffff;
}

#head-top > div {
  height: 100%;
}

.web-title {
  float: left;
  margin: 0 4%;
  text-align: center;
}

.web-title span {
  font-size:  2em;
  font-family: PingFang SC;
}

.web-title p {
  margin: 0;
  padding: 0;
}

.category-title {
  float: right;
  margin-right: 5%;
  text-align: center;
}

.category-title span {
  margin: 20px 10px;
}

</style>