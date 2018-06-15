<template>
        <footer id='foot'>
          <div class="footer-contact"></div>
          <div class="footer-social"></div>
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
    border: 1px solid red;
}

.footer-contact {
    width: 60%;
    height: 100%;
    float: left;
    background-color: #303437;
}

.footer-social {
    width: 40%;
    height: 100%;
    float:right;
    background-color: #18191B;
}

</style>