<template>
    <el-aside width="auto">
        <el-menu class="el-menu-vertical-demo"
                 active-text-color="#807555"
                 background-color="#545c64"
                 text-color="#fff"
        >
            <el-menu-item
                    :index="item.path"
                    v-for="item in noChildren()"
                    :key="item.path"
                    @click="clickMenu(item)"
            >
                <component class="icons" :is="item.icon"></component>
                <span>{{ item.label }}</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
    name: "CommonAside",
    components: {},
    setup() {
        const list = [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'House',
            },
            {
                path: '/details',
                name: 'details',
                label: '电影详情',
                icon: 'DocumentRemove',
            },
            {
                name: 'analytics',
                label: '数据分析',
            },
            {
                path: '/director',
                name: 'director',
                label: '导演分析',
                icon: 'PieChart'
            },
            {
                path: '/time',
                name: 'time',
                label: '时间分析',
                icon: 'Clock',
            },
            {
                path: '/score',
                name: 'score',
                label: '评分分析',
                icon: 'ChatSquare',
            },
            {
                path: '/address',
                name: 'address',
                label: '拍摄地点',
                icon: 'LocationInformation',
            },
            {
                name: 'wordcloud',
                label: '词云图',
            },
            {
                path: '/moviesWordCloud',
                name: 'moviesWordCloud',
                label: '电影词云图',
                icon: 'Film'
            },
            {
                path: '/actorsWordCloud',
                name: 'actorsWordCloud',
                label: '演员词云图',
                icon: 'Film'
            },
            {
                path: '/directorsWordCloud',
                name: 'directorsWordCloud',
                label: '导演词云图',
                icon: 'Film'
            },
            {
                path: '/typeWordCloud',
                name: 'typeWordCloud',
                label: '类型词云图',
                icon: 'Film'
            },
            {
                path: '/summaryWordCloud',
                name: 'summaryWordCloud',
                label: '简介词云图',
                icon: 'Film'
            },
        ];

        const router = useRouter();

        const noChildren = () => {
            return list.filter((item) => !item.children)
        };

        const hasChildren = () => {
            return list.filter((item) => item.children)
        };

        const clickMenu = (item) => {
            router.push({
                name: item.name
            })
        }

        return {
            noChildren,
            hasChildren,
            clickMenu
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo {
  width: 200px;
  height: 100vh;
  background-color: #333744;
}

.icons {
  width: 18px;
  height: 18px;
}

span {
  margin-left: 10px;
}

.el-menu {
  border: none;
}
</style>
