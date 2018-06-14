<template>
  <div id="home">
    <el-container>
        <el-main>
            <head-top></head-top>
            <div class="center-title"></div>
        </el-main>
        <div class="category">
          <div class="life"></div>
          <div class="skill"></div>
          <div class="dance"></div>
        </div>
        <el-footer>
          <div class="footer-contact"></div>
          <div class="footer-social"></div>
        </el-footer>
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
    height: 10%;
    margin: 0px;
    padding: 0px;
  }
  
  .el-main {
    background-size: 100% 100%;
    background-image: url('./home.jpg');
    background-position:center;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 60%;
    padding: 0%;
  }

  .center-title {
    float: left;
    height: 10%;
    width: 30%;
    border: 1px solid white;
    margin: 10% 35%;
  }

  .category {
    background-color: #FFFFFF;
    text-align: center;
    height: 30%;
  }
  .category > div {
    height: 100%;
    width: 20%;
    /* margin: 5% auto; */
    float: left;
    margin: 0 6%;
    border: 1px solid red;

  }
  .el-container {
    width:100%;
    height: 100%;
  }

  .footer-contact {
    width: 60%;
    height: 100%;
    float: left;
    background-color: #303437;
    /* border: 1px solid red; */
  }

  .footer-social {
    width:40%;
    height: 100%;
    float:right;
    background-color: #18191B;
    /* border: 1px solid green; */
  }

</style>