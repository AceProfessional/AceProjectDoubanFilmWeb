<template>
  <el-card class="card">
    <div id="chart"></div>
  </el-card>
</template>

<script>
import * as echarts from 'echarts/core';
import {onMounted, reactive} from "vue";
import axios from '../../utils/request'

export default {
  name: "DrawMoviesTypesPie",
  setup() {
    const typePie = async () => {
      try {
        const {data: response} = await axios.get('/api/private/v1/echarts_info_movies_type')
        option.series[0].data = response.data.m_type_echarts

        const myChart = echarts.init(document.getElementById('chart'))
        option && myChart.setOption(option)
        window.addEventListener('resize', () => {
          myChart.resize()
        })
      } catch (error) {
        console.log(error)
      }
    }

    const option = reactive({
      title: {
        text: '电影类型统计',
        left: 'center',
        textStyle: {
          color: '#3d3636',
          fontSize: 18
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
          name: '电影类型',
          type: 'pie',
          radius: '50%',
          data: null,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          smooth: true,
          label: {
            show: true,
            position: 'top'
          }
        }
      ]
    })

    onMounted(() => {
      typePie();
    })
  }
}
</script>

<style lang="less" scoped>
#chart {
  width: 100%;
  height: 700px;
  margin-left: 15px;
}

.card {
  width: 50%;
  margin-left: 15px;
  display: inline-block;
}

</style>
