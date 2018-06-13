<template>
  <div class="home">
    <div>
        <p>这是图片部分</p>
    </div>
    <div>
        <p>这是文字部分</p>
    </div>
    <div>
        <p>这是底部</p>
    </div>
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