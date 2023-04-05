<template>
  <el-card>
  <AnnualLineChart/>
  <LengthPieChart/>
  </el-card>
</template>

<script>
import AnnualLineChart from "@/echarts/TimePart/AnnualLineChart";
import LengthPieChart from "@/echarts/TimePart/LengthPieChart";

export default {
  name: "TimeView",
  components:{
    AnnualLineChart,
    LengthPieChart
  }
}
</script>

<style lang="less" scoped>

</style>
