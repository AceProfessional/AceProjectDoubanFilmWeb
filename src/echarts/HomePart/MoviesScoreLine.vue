<template>
  <el-card class="box">
    <div id="chartone"></div>
  </el-card>

</template>

<script>
import * as echarts from 'echarts/core';
import {reactive, onMounted} from "vue";
import axios from '../../utils/request'

export default {
  name: "DrawMoviesScoreLine",
  setup() {
    const moviesScore = async ()=> {
      try {
        const {data: response} = await axios.get('/api/private/v1/echarts_info_movies_score')
        option.xAxis.data = response.data.score
        option.series[0].data = response.data.score_num
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('chartone'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize', () => {
          myChart.resize()
        })
      } catch (error) {
        console.log(error)
      }
    }

    const option = reactive({
      title: {
        text: '电影评分统计',
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
        data: ''
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
      moviesScore()
    })
  },

}
</script>

<style scoped lang="less">
#chartone {
  width: 100%;
  height: 700px;
  //margin-: 15px;
  //margin-right: 15px;
}

.box {
  width: 95.5%;
  display: inline-block;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 15px;
}

</style>
