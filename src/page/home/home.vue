<template>
    <div class="container">
        <head-top></head-top>
        <el-main>
          <div class="center-content">
            <span>你是我丰收时的盗贼---我的你翅膀上的枷锁</span>
            <p>追随街舞的脚步从未停止</p>
          </div>
        </el-main>

        <section>
          <div class="life">
            <span>生活</span>
            <p>记录百味人生</p>
          </div>
          <div class="skill">
            <span>技术</span>
            <p>崇尚技术为王</p>
          </div>
          <div class="dance">
            <span>街舞</span>
            <p>peace&nbsp;&nbsp;love&nbsp;&nbsp;respect</p>
          </div>
        </section>

        <foot-bottom></foot-bottom>
    </div>
</template>


<script>
import head from '../../components/header/head'
import foot from '../../components/footer/foot'
export default {
  name: 'home',
  data () {
    return {
      msg: 'tangyiwen'
    }
  },
  components: {
      'head-top' : head,
      'foot-bottom' : foot
  }
}
</script>

<style>
.container {
    margin: 0;
    padding: 0;
    height: 100%;
    width:100%;
  }

.el-main {
  height: 60%;
  width: 100%;
  background-image: url('./home.jpg');
  background-size:100% 100%;
}

.center-content {
  height: 15%;
  width: 25%;
  position:absolute;
  left: 35%;
  top: 25%;
  text-align: center;
  font-family: Hiragino Sans GB;
  color: #FFFFFF;
}

.center-content > p {
  font-size: 1.5em;
}

section {
  height: 19%;
  background-color: #FFFFFF;
}

section > div > span {
  font-size: 1.5em;
  color: #2CB4DA;
}
section > div > p {
  color: #3E3C49;
  font-family: Hiragino Sans GB;
}
section > div {
  width: 20%;
  height: 100%;
  float: left;
  margin-left: 10%;
  text-align: center;
  padding:5% 0;
}
</style>