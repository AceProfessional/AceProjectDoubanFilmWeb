<template>
  <div style="display: inline-block">
    <!--            分页公式 arr.slice((当前页数-1) * 每页条数, 当前页数 * 当前条数)-->
    <!--            <el-table :data="tableDate.slice((page - 1) * limit, page * limit)" border style="width:100%">-->
    <el-table :data="tableDate" border style="width:100%">
      <el-table-column prop="id" label="ID"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="directors" label="导演"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="actor" label="演员"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="language" label="语言"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="long" label="时长"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="movie_country" label="影片国家"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="movie_detail_url" label="宣传链接"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="movie_type" label="影片类型"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="playbill_url" label="海报"  sortable>
        <template #default="scope">
          <div style="display: flex;align-items: center">
            <img :src="scope.row.playbill_url" alt="" width="60px">
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="release_time" label="上映时间"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="release_year" label="上映年份"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="score" label="评分"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="short_review_num" label="短评数量"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="summary" label="简介"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="title" label="影片名称"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="video" label="影片链接"  show-overflow-tooltip></el-table-column>
      <el-table-column prop="image" label="影片图片"  show-overflow-tooltip></el-table-column>
    </el-table>
    <el-pagination
        v-model:current-page="page"
        v-model:page-size="limit"
        :page-sizes="[5, 10, 20, 40, 50]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: "PageingView",
  data() {
    return {
      tableDate: [],
      page: 1,
      limit: 5,
      total: null
    }
  },
  methods: {
    async getBaseInfoDetails(params) {
      const {data: response} = await this.$axios.get(
          '/api/private/v1/movies_details_msg',
          // '?page=' + this.page + '&num=' + this.limit,
          // 'http://6v4nzp.natappfree.cc/api/private/v1',
          {params});
      if (response.code !== 200) {
        return response.msg;
      } else {
        this.tableDate = response.data[0].details_list
        this.total = response.data[1].movies_amount
        // console.log(this.tableDate)
        // console.log(this.total)
      }
    },
    handleSizeChange(val) {
      this.limit = val
      this.page = 1
      this.getBaseInfoDetails({page: this.page, num: this.limit})
    },
    handleCurrentChange(val) {
      this.page = val
      this.getBaseInfoDetails({page: val, num: this.limit})
    }
  },
  created() {
    this.getBaseInfoDetails({page: this.page, num: this.limit});
  },
}
</script>

<style lang="less" scoped>
.echarts_data {
  margin: 0 15px;
}
</style>
