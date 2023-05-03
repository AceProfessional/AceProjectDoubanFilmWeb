<template>
  <el-card class="chart-card">
    <div id="chart2" style="width: 100%;height: 700px;"></div>
  </el-card>
</template>

<script>
import * as echarts from 'echarts/core';
import {reactive, onMounted} from "vue";
import axios from '../../utils/request'

export default {
  name: "AnnualLineChart",
  setup(){
    const AnnualLine = async ()=>{
      try{
        const {data:response} = await axios.get('/api/private/v1/movies_year_ratio')
        option.xAxis.data = response.data.year
        option.series[0].data = response.data.year_number
        const myChart = echarts.init(document.getElementById('chart2'));
        myChart.setOption(option);
      } catch (error){
        console.log(error)
      }
    }

    const option = reactive({
      title: {
        text: '历年电影产量分析',
        left: 'center',
        textStyle:{
          color:'#3d3636',
          fontSize:18
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: '',
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: '',
          type: 'line',
          areaStyle: {},
          smooth: true,
          label:{
            show:true,
            position:'top'
          }
        }
      ]
    })

    onMounted(()=>{
      AnnualLine()
    })
    return{

    }
  }
}

</script>

<style lang="less" scoped>
:deep(.el-card__body) {
  width: 95%;
  height: 700px;
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
}
</style>
