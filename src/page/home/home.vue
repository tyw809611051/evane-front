<template>
    <el-container>
        <head-top></head-top>
        <el-main>
            <!-- <div class="center-title"></div> -->
        </el-main>

        <!-- <div class="category">
          <div class="life"></div>
          <div class="skill"></div>
          <div class="dance"></div>
        </div> -->

        <foot-bottom></foot-bottom>
    </el-container>
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
.el-container {
    margin: 0;
    padding: 0;
    height: 100%;
    width:100%;
  }

.el-main {
  height: 60%;
  border: 1px solid blue;
  width: 100%;
}
</style>