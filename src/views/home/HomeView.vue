<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>电影数据个数</span>
      </div>
    </template>
    <div class="text item">{{ pageData.countData }}</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>豆瓣最高评分</span>
      </div>
    </template>
    <div class="text item">{{ pageData.baseInfoScoreMax }}</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>作品最多演员</span>
      </div>
    </template>
    <div class="text item">{{ pageData.baseInfoActorMax }}</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>制片最多国家</span>
      </div>
    </template>
    <div class="text item">{{ pageData.baseInfoCountryMax }}</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>电影类型总数</span>
      </div>
    </template>
    <div class="text item">{{ pageData.baseInfoTypeAmount }}</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>电影最多语言</span>
      </div>
    </template>
    <div class="text item">{{ pageData.baseInfoLanguagesMax }}</div>
  </el-card>
  <div class="EchartsCard">
    <MoviesTypePie></MoviesTypePie>
    <MoviesScoreLine></MoviesScoreLine>
  </div>
</template>

<script>
import {onMounted, reactive, ref} from "vue";
import MoviesTypePie from "@/echarts/HomePart/MoviesTypePie";
import MoviesScoreLine from "@/echarts/HomePart/MoviesScoreLine";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    MoviesTypePie,
    MoviesScoreLine
  },
  setup() {
    // const countData = ref()
    // const baseInfoScoreMax = ref();
    // const baseInfoActorMax = ref();
    // const baseInfoCountryMax = ref();
    // const baseInfoTypeAmount = ref();
    // const baseInfoLanguagesMax = ref();

    const pageData = reactive({
      countData: ref(),
      baseInfoScoreMax: ref(),
      baseInfoActorMax: ref(),
      baseInfoCountryMax: ref(),
      baseInfoTypeAmount: ref(),
      baseInfoLanguagesMax: ref()
    })

    // 获取数据
    const getBaseInfoAmount = async () => {
      // await axios.get('/api/private/v1/base_info_amount')
      //     .then((response) => {
      //       // if (response.code !== 200) {
      //       if (response.data.code !== 200) {
      //         return response.msg;
      //       } else {
      //         pageData.countData = response.data.data.movies_amount + '个';
      //         console.log(pageData.countData)
      //       }
      //     })
      try {
        const response = await axios.get('/api/private/v1/base_info_amount')
        pageData.countData = response.data.data.movies_amount + '个'
      } catch (error) {
        console.log(error)
      }
    }
    const getBaseInfoScoreMax = async () => {
      // await axios.get('/api/private/v1/base_info_score_max')
      //     .then((response) => {
      //       if (response.code !== 200) {
      //         return response.msg;
      //       } else {
      //         this.baseInfoScoreMax = response.data.movies_score_max + '分';
      //       }
      //     })
      try {
        const response = await axios.get('/api/private/v1/base_info_score_max')
        pageData.baseInfoScoreMax = response.data.data.movies_score_max + '分';
      } catch (error) {
        console.log(error)
      }
    }
    const getBaseInfoActorMax = async () => {
      // await axios.get('/api/private/v1/base_info_actor_max')
      //     .then((response) => {
      //       if (response.code !== 200) {
      //         return response.msg;
      //       } else {
      //         this.baseInfoActorMax = response.data.movies_actors_max;
      //       }
      //     })
      try {
        const response = await axios.get('/api/private/v1/base_info_actor_max')
        pageData.baseInfoActorMax = response.data.data.movies_actors_max;
      } catch (error) {
        console.log(error)
      }
    }
    const getBaseInfoCountryMax = async () => {
      // await axios.get('/api/private/v1/base_info_countrys_max')
      //     .then((response) => {
      //       if (response.code !== 200) {
      //         return response.msg;
      //       } else {
      //         this.baseInfoCountryMax = response.data.movies_countrys_max;
      //       }
      //     })
      try {
        const response = await axios.get('/api/private/v1/base_info_countrys_max')
        pageData.baseInfoCountryMax = response.data.data.movies_countrys_max;
      } catch (error) {
        console.log(error)
      }
    }
    const getBaseInfoTypeAmount = async () => {
      // await axios.get('/api/private/v1/base_info_types_amount')
      //     .then((response) => {
      //       if (response.code !== 200) {
      //         return response.msg;
      //       } else {
      //         this.baseInfoTypeAmount = response.data.movies_types_amount + '个';
      //       }
      //     })
      try {
        const response = await axios.get('/api/private/v1/base_info_types_amount')
        pageData.baseInfoTypeAmount = response.data.data.movies_types_amount + '个';
      } catch (error) {
        console.log(error)
      }
    }
    const getBaseInfoLanguagesMax = async () => {
      // await axios.get('/api/private/v1/base_info_languages_max')
      //     .then((response) => {
      //       if (response.code !== 200) {
      //         return response.msg;
      //       } else {
      //         this.baseInfoLanguagesMax = response.data.movies_languages_max;
      //       }
      //     })
      try {
        const response = await axios.get('/api/private/v1/base_info_languages_max')
        pageData.baseInfoLanguagesMax = response.data.data.movies_languages_max;
      } catch (error) {
        console.log(error)
      }
    }
    // 调用一下方法
    onMounted(() => {
      getBaseInfoAmount();
      getBaseInfoScoreMax();
      getBaseInfoActorMax();
      getBaseInfoCountryMax();
      getBaseInfoTypeAmount();
      getBaseInfoLanguagesMax()
    })

    return {
      pageData
      // baseInfoScoreMax,
      // baseInfoActorMax,
      // baseInfoCountryMax,
      // baseInfoTypeAmount,
      // baseInfoLanguagesMax
    }
  }
}
</script>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 16px;
}

.item {
  margin-bottom: 15px;
}

.box-card {
  width: 240px;
  display: inline-block;
  margin: 0 15px 15px;
}

//.EchartsCard {
//  display: flex;
//}
</style>
