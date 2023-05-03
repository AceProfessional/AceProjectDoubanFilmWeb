<template>
  <el-header>
    <div>
      <a href="https://movie.douban.com/" target="_blank"><img src="@/assets/images/logo64.svg" alt="logo"></a>
      <span>豆瓣电影数据分析</span>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "CommonHeader"
}
</script>

<style lang="less" scoped>
.el-header {
  background: #373D41;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 0;
  color: #FFFFFF;
  font-size: 20px;

  > div {
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
    }
  }
}
</style>
