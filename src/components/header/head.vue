<template>
    <div id='head-top'>
        <el-row :gutter="20">
            <el-col :span="3"><div class="grid-content bg-purple">evane</div></el-col>
            <el-col :span="5" :offset="15"><div class="grid-content bg-purple">登录</div></el-col>
        </el-row>
    </div>
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
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    /* border-radius: 4px;
    min-height: 36px; */
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>