<template>
  <el-card class="box-card">
    <div id="chart" style="width: 100%;height: 700px;"></div>
  </el-card>
</template>

<script setup>
import * as echarts from 'echarts'
import {onMounted, reactive} from "vue";
import axios from "axios";
const option = reactive({
  tooltip:{
    trigger:'axis',
    axisPointer:{
      type:'shadow'
    }
  },
  title:{
    text: '拍摄地点展示图',
    left: 'center',
    textStyle: {
      color: '#3d3636',
      fontSize: 18
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: '',
  },
  series: [
    {
      name:'num',
      data: '',
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
})
const addressBar = async ()=>{
  try {
    const {data:response} = await axios.get('/api/private/v1/get_country_data')
    option.yAxis.data = response.data.country_list
    option.series[0].data = response.data.country_number_list
    const myChart = echarts.init(document.getElementById('chart'))
    option && myChart.setOption(option)
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  } catch (error){
    console.log(error)
  }
}

onMounted(()=>{
  addressBar()
})
</script>

<style lang="less" scoped>
.box-card {
  width: 95%;
  height: 700px;
  display: inline-block;
  margin-right: 15px;
  margin-left: 15px;
}
</style>
