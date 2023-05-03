<template>
  <el-card class="box-card">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
          v-for="(item, index) in tabs"
          :key="index"
          :label="item"
          :name="item"
          :data-item="JSON.stringify(item)"
      ></el-tab-pane>
    </el-tabs>

    <div id="chart" style="width: 100%;height: 700px;"></div>

    <!--  <ScoreLineChart :type="type"></ScoreLineChart>-->
  </el-card>
</template>

<script setup>
// import ScoreLineChart from "@/echarts/ScorePart/ScoreLineChart";
import {ref, onMounted, reactive} from "vue";
import axios from "../../utils/request";
// import {useRouter} from "vue-router";
import * as echarts from "echarts";
// const {proxy} = getCurrentInstance()
const tabs = ref()
const scoreData = async () => {
  try {
    const {data: response} = await axios.get('/api/private/v1/movies_types_scores_ratio')
    tabs.value = response.data.movies_type
    initEchart(tabs.value[0])
  } catch (error) {
    console.log(error)
  }
}

const initEchart = async (keyword) => {
  try {
    axios({
      method: "POST",
      data: {
        m_type: keyword
      },
      url: '/api/private/v1/movies_types_scores_ratio'
    }).then(response => {
      const res = response.data
      option.xAxis.data = res.data.score
      option.series[0].data = res.data.score_num
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('chart'));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    })
  } catch (error) {
    console.log(error)
  }
}

const option = reactive(  // 配置图标的配置项和数据
    {
      title: {   // 标题
        text: `电影评分展示图`,
        left: 'center',
        textStyle: {
          color: '#3d3636',
          fontSize: 18
        }
      },
      tooltip: {}, //提示
      xAxis: {
        type: 'category',
        data: '',
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: '',
          type: 'line',
          smooth: true,
          label: {
            show: true,
            position: 'top'
          }
        }
      ]
    }
)

// const router = useRouter()
const activeName = (item)=>{
  ref(item.props.name[0])
  console.log(item)
}
// const activeName = ref('')
const handleClick = (item) => {
  const chartData = item.props.name
  initEchart(chartData)
}

onMounted(() => {
  scoreData();

})

</script>

<style lang="less" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.box-card {
  width: 95%;
  height: 800px;
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
}
</style>
