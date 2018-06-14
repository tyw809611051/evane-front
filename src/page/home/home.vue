<template>

    <el-container id="home">
      <head-top></head-top>
        <el-main>
            <!-- <div class="center-title"></div> -->
        </el-main>

        <div class="category">
          <div class="life"></div>
          <div class="skill"></div>
          <div class="dance"></div>
        </div>

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


</style>