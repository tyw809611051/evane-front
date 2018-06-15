<template>
    <div class="container">
        <head-top></head-top>
        <el-main>
          <div class="center-content">
            <span>这是内容</span>
          </div>
        </el-main>

        <section>
          <div class="life"></div>
          <div class="skill"></div>
          <div class="dance"></div>
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
  display: block;
  border: 1px solid blue;
}

.center-content {
  border: 1px solid grey;
  height: 10%;
  width: 10%;
  position:absolute;
  left: 40%;
  top: 20%;
}

section {
  height: 29%;
  border: 1px solid green;
}

section > div {
  width: 20%;
  height: 100%;
  float: left;
  margin-left: 10%;
  border: 1px solid gold;
}
</style>