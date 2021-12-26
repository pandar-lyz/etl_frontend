<template>
    <div>
        <b-navbar toggleable type="dark" variant="dark">
            <b-navbar-brand href="#">电影信息检索</b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                        <router-link :to="{ name: 'SearchPage' }">
                            返回搜索界面
                        </router-link></b-nav-item
                    >
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <div style="margin:20px 15px 0px 15px">
            <b-list-group-item variant="success"
            >查询条件：{{this.$store.state.global.input}}</b-list-group-item
            >
        </div>

        <div class="gap">
            <b-list-group-item variant="primary" v-if="number!=0"
                >共搜索到{{ number }}条结果，结果如下：</b-list-group-item
            >
        </div>
        <b-col md="12">
            <div>
                <b-table striped hover :items="MovieItems"></b-table>
            </div>
        </b-col>
        <div class="gap">
            <b-list-group-item variant="primary"
                >数据库对比结果如下：</b-list-group-item
            >
        </div>
        <b-col md="12">
            <div>
                <b-table striped hover :items="DatabaseItems"></b-table>
            </div>
        </b-col>
        <div class="gap">
            <b-list-group-item variant="primary"
                >数据库运行时间柱状图：</b-list-group-item
            >
        </div>
        <b-col center>
            <div class="content">
                <b-card title="数据库运行时间柱状图" class="main-card mb-3">
                    <bar></bar>
                </b-card>
            </div>
        </b-col>
    </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import doughnut from "@/DemoPages/Charts/Chartjs/Doughnut";
import radar from "@/DemoPages/Charts/Chartjs/Radar";
import polar from "@/DemoPages/Charts/Chartjs/Polar";
import pie from "@/DemoPages/Charts/Chartjs/Pie";
import lineeg from "@/DemoPages/Charts/Chartjs/Line";
import areaeg from "@/DemoPages/Charts/Chartjs/Area";
import bar from "@/DemoPages/Charts/Chartjs/Bar";
import barhoriz from "@/DemoPages/Charts/Chartjs/BarHoriz";

export default {
    data() {
        return {
            DatabaseItems: [
                {
                    数据库名称: "NoSql",
                    数据库种类: "非关系型数据库",
                    查询结果: this.$store.state.global.noSqlCount + "条",
                    查询用时: this.$store.state.global.noSqlTime + "ms",
                },
                {
                    数据库名称: "MySql",
                    数据库种类: "关系型数据库",
                    查询结果: this.$store.state.global.sqlCount + "条",
                    查询用时: this.$store.state.global.sqlTime + "ms",
                },
                {
                    数据库名称: "Hive",
                    数据库种类: "分布式存储系统",
                    查询结果: this.$store.state.global.distributedCount + "条",
                    查询用时: this.$store.state.global.distributedTime + "ms",
                },
            ],
        };
    },
    computed: {
        number() {
            return this.$store.state.global.movieList.length;
        },
        MovieItems() {
            return this.$store.state.global.movieList.slice(0,50);
        },
    },
    components: {
        doughnut,
        radar,
        polar,
        pie,
        lineeg,
        areaeg,
        bar,
        barhoriz,
        Bar,
    },
};
</script>
<style>
.gap {
    padding-top: 20px;
    /* width: 300px; */
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    overflow: auto;
    margin: 0;
}
</style>
