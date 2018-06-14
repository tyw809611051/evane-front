<template>
  <div id="home">
    <el-container>
        <el-main>
            <head-top></head-top>
        </el-main>
        <div class="wenzi"></div>
        <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>


<script>
import head from '../../components/header/head'
export default {
  name: 'home',
  data () {
    return {
      msg: 'tangyiwen'
    }
  },
  components: {
      'head-top' : head
  }
}
</script>

<style>
    #home {
        width:100%;
        height: 100%;
    }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 10%;
  }
  
  .el-main {
    background-size: 100% 100%;
    background-image: url('./home.jpg');
    background-position:center;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 60%;
  }
  .wenzi {
    background-color: #E9e;
    color: #333;
    text-align: center;
      height: 30%;
  }
  .el-container {
    width:100%;
    height: 100%;
  }

</style>