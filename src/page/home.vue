<template lang="html">
<div class="home-container">
    <el-container>
        <el-header >Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
    
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            sysName: '管理后台',
            sysUserName: '',
            collapsed: false
        }
    },
    methods: {
        //折叠导航栏
        collapseFun: function() {
            this.collapsed = !this.collapsed;
        },
        showMenu(i, status){
          this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
        },
        //退出登录
        logoutFun: function() {
            var _this = this;
            this.$confirm('确认退出吗?', '提示', {
                //type: 'warning'
            }).then(() => {
                sessionStorage.removeItem('user');
                _this.$router.push('/login');
            }).catch(() => {

            });


        },
    },
    mounted() {
        var user = sessionStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            this.sysUserName = user.username || '';
        }
    }
}
</script>

<style scoped lang="scss">
  .home-container {
      height: 100%;
      margin: 0 auto;
      width: 100%;
  }
  .el-container {
      height: 100%;
  }
  .el-header, .el-footer {
    color: #000000;
    background-color: rgb(161, 255, 255);
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    background-color: rgb(234, 238, 238);
    text-align: center;
    line-height: 200px;
    width: 50%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: gray;
    background-color: #ffffff;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>