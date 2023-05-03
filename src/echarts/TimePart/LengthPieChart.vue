<template>
  <el-card className="box-card">
    <div id="chart" style="width: 100%;height: 700px;"></div>
  </el-card>
</template>

<script>
import * as echarts from 'echarts/core';
import {reactive, onMounted} from "vue";
import axios from '../../utils/request'

export default {
  name: "LengthPieChart",
  setup(){
    const LengthPie = async()=>{
      try {
        const {data: response} = await axios.get('/api/private/v1/movies_long_ratio')
        option.series[0].data = response.data.long_ratio
        const myChart = echarts.init(document.getElementById('chart'));
        myChart.setOption(option);
        window.addEventListener('resize',()=> {
          myChart.resize();
        })
      }catch (error){
        console.log(error)
      }
      }

    const option = reactive({
      title: {
        text: '电影时长统计',
        left: 'center',
        textStyle:{
          color:'#3d3636',
          fontSize:18
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '电影时长',
          type: 'pie',
          radius: '50%',
          data: '',
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          smooth: true,
          label:{
            show:true,
            position:'top'
          }
        }
      ]
    })

    onMounted(()=>{
      LengthPie()
    })
    return{

    }
}
}
</script>

<style scoped lang="less">
.box-card {
  width: 95%;
  height: 700px;
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
}

</style>
