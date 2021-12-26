import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  mounted() {
    this.renderChart({
      labels: ['Nosql', 'Mysql', 'Hive'],
      datasets: [
        {
          label: '3种数据库查询运行时间对比',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          borderCapStyle: 'round',
          data: [this.noSqlTime,this.mysqlTime,this.hiveTime,]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  },
  computed: {
    noSqlTime() {
      return this.$store.state.global.noSqlTime;
    },
    mysqlTime() {
      return this.$store.state.global.sqlTime;
    },
    hiveTime() {
      return this.$store.state.global.distributedTime;
    }
  }
}
