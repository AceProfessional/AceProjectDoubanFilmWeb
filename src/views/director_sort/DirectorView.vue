<template>
  <div>
    <h2>排名前三导演</h2>
    <div v-for="(num, name) in directors" :key="name">
      <el-button @click="getDirectorMovies(name, num)">{{ name }}: {{ num }}</el-button>
    </div>
    <el-table :data="movies" v-if="movies.length > 0">
      <el-table-column prop="title" label="电影名称"></el-table-column>
      <el-table-column prop="directors" label="导演"></el-table-column>
      <el-table-column prop="detail_link" label="Detail Link">
        <template #default="{ row }">
          <a :href="row.detail_link" target="_blank">点击跳转</a>
        </template>
      </el-table-column>
<!--      <el-table-column prop="playbill_link" label="Playbill Link">-->
<!--        <template #default="{ row }">-->
<!--          <a :href="row.playbill_link" target="_blank">Link</a>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { ElButton, ElTable, ElTableColumn } from 'element-plus'
import axios from "axios";

export default {
  components: {
    ElButton,
    ElTable,
    ElTableColumn,
  },
  setup() {
    const directors = reactive({})
    const movies = reactive([])

    const getTopDirectors = async () => {
      try {
        const response = await axios.get('/api/private/v1/directors')
        const { code, data } = await response.data
        console.log(response.data)
        if (code === 200) {
          Object.assign(directors, data)
        }
      } catch (error) {
        console.log(error)
      }

    }

    const getDirectorMovies = async (name, num) => {
      const response = await axios.get(`/api/private/v1/directors_movies?name=${name}&num=${num}`)
      const { code, data } = await response.data
      if (code === 200) {
        movies.splice(0, movies.length, ...data.details)
      }
    }

    getTopDirectors()

    return {
      directors,
      movies,
      getDirectorMovies,
    }
  },
}
</script>
