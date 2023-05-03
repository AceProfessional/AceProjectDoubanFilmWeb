<template>
    <div class="container">
        <!--    <h2>排名前三导演</h2>-->
        <div class="director-btn-container">
            <div v-for="(num, name) in directors" :key="name" class="director-btn">
                <el-button @click="getDirectorMovies(name, num)">{{ name }}</el-button>
            </div>
        </div>
        <el-table :data="movies" v-if="movies.length > 0" class="movies-table">
            <el-table-column prop="title" label="电影名称"></el-table-column>
            <el-table-column prop="directors" label="导演"></el-table-column>
            <el-table-column prop="detail_link" label="Detail Link">
                <template #default="{ row }">
                    <a :href="row.detail_link" target="_blank">点击跳转</a>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {reactive} from 'vue'
import {ElButton, ElTable, ElTableColumn} from 'element-plus'
import axios from "axios";
import echarts from "echarts";

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
                const {code, data} = await response.data
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
            const {code, data} = await response.data
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

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.director-btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.director-btn {
    margin-right: 10px;
}

.movies-table {
    max-width: 800px;
    margin: 0 auto;
}
</style>
