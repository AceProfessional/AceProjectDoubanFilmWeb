<template>
  <div class="common-layout">
    <el-container>
      <CommonHeader/>
      <el-container>
          <CommonAside></CommonAside>
        <el-main class="m-container">
          <router-view :key="route.fullPath"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import {useRouter} from "vue-router";

export default {
  name: "MainView",
  components: {
    CommonHeader,
    CommonAside
  },
  setup(){
    const route = useRouter()
    return{
      route
    }
  }

}
</script>

<style lang="less" scoped>
.el-container {
  //flex-wrap弹性盒子在必要时拆行
  flex-wrap: wrap;
  //让home组件贴合
  align-items: flex-start;
  .m-container{
    flex-basis: 0;
  }
}

.common-layout {
  height: 100%;
  & > .el-container {
    height: 100%;
    & > .el-aside {
      height: 100%;
      width: 200px;
      background-color: #545c64;
    }
  }
}
</style>
