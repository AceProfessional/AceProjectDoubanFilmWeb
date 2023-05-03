<template>
<div class="header">
  <el-form :inline="true" :model="formInline">
    <el-form-item label="请输入">
      <el-input v-model="formInline.keyword" placeholder="请输入影片名称"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSearch">搜索</el-button>
    </el-form-item>
  </el-form>
</div>
  <div class="table">
    <el-table
        :data="config.tableData"
        style="width: 100%;"
        height="720px"
    >
      <el-table-column
          v-for="item in tableLabel"
          :key="item.prop"
          :label="item.label"
          :prop="item.prop"
          :width="item.prop === 'id' ? 50 : 120"
      />
    </el-table>
    <el-pagination
        v-model:current-page="currentPage2"
        v-model:page-size="pageSize2"
        :page-sizes="[5, 10, 20, 40, 50]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="config.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        class="pager"
    />
  </div>
</template>

<script>
import {onMounted, reactive, ref} from "vue";
import axios from "axios";

export default {
  name: "DetailsView",
  setup(){
    // 表头设置
    const tableLabel = reactive([
      {
        prop:"id",
        label:"ID"
      },
      {
        prop:"directors",
        label:"导演"
      },
      {
        prop:"actor",
        label:"演员"
      },
      {
        prop:"language",
        label:"语言"
      },
      {
        prop:"long",
        label:"时长"
      },
      {
        prop:"movie_country",
        label:"影片国家"
      },
      {
        prop:"movie_detail_url",
        label:"宣传链接"
      },
      {
        prop:"movie_type",
        label:"影片类型"
      },
      {
        prop:"playbill_url",
        label:"海报"
      },
      {
        prop:"release_time",
        label:"上映时间"
      },
      {
        prop:"release_year",
        label:"上映年份"
      },
      {
        prop:"score",
        label:"评分"
      },
      {
        prop:"short_review_num",
        label:"短评数量"
      },
      {
        prop:"summary",
        label:"简介"
      },
      {
        prop:"title",
        label:"影片名称"
      },
      {
        prop:"video",
        label:"影片链接"
      },
      {
        prop:"image",
        label:"影片图片"
      },
    ])

    // const ss = ref()
    const config = reactive({
      tableData:null,
      total:null,
      page:1,
      limit:5,
      name:''
    })
    const getDetailsData = async (params)=>{
      await axios.get('/api/private/v1/movies_details_msg',{params})
          .then((response)=>{
            if (response.data.code !== 200) {
              return response.data.msg;
            } else {
              config.tableData = response.data.data.details_list
              config.total = response.data.data.movies_amount
            }
          })
    }
    // input搜索
    const formInline = reactive({
      keyword:'',
    })
    const handleSearch = ()=>{
      getDetailsData({
        'kw': formInline.keyword,
        'page': config.page,
        'num': config.limit
      })
    }

    // 分页设置
    const currentPage2 = ref(1)
    const pageSize2 = ref(5)
    const handleSizeChange = (val) => {
      config.limit = val
      config.page = 1
      getDetailsData({page: config.page, num: config.limit})
    }
    const handleCurrentChange = (val) => {
      config.page = val
      if (formInline.keyword === '') {
        getDetailsData({page: val, num: config.limit})
      } else {
        console.log(formInline.keyword)
        getDetailsData({page: val, num: config.limit, 'kw': formInline.keyword})
      }
    }

    // 图片
    /*const picture = ()=>{

    }*/

    // 数据更新
    onMounted(()=>{
      getDetailsData({page: config.page, num: config.limit})
    })

    return{
      config,
      tableLabel,
      formInline,
      handleSearch,
      currentPage2,
      pageSize2,
      handleSizeChange,
      handleCurrentChange,
    }
  }
}
</script>

<style lang="less" scoped>
.table {
  position: relative;
  height: 750px;

  .pager {
    position: absolute;
    right: 0;
    bottom: -20px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
}

:deep(.el-table__body){
  tr{
    .cell{
      height: 140px; //设置高度 主要是这个
      line-height: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
