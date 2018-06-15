<template>
        <footer id='foot'>
          <div class="footer-contact">
            <span class="el-icon-message">devyiwen@gmail.com</span>
            <span class="el-icon-mobile-phone">tyw809611051</span>
            <span class="el-icon-location-outline">中国.北京</span>
          </div>
          <div class="footer-social">
            <p>&copy;竖心乙</p>
          </div>
        </footer>
</template>

<script>

export default {
  name: 'footBottom',
  data () {
    return {
      msg: 'tangyiwen'
    }
  }
}
</script>

<style>
#foot {
    width: 100%;
    height: 10%;
    position:fixed;
    bottom:0;
}

.footer-contact {
    width: 60%;
    height: 100%;
    float: left;
    background-color: #303437;
}

.footer-contact > span {
  margin: 3% 5%;
  color: #ffffff;
}

.footer-social {
    width: 40%;
    height: 100%;
    float:right;
    background-color: #18191B;
    color: #AFAFB1;
    text-align: center;
}

</style>
