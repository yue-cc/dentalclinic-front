<template lang="pug">
#userrecord
  h2.text-center.mb-5 預約紀錄
  v-simple-table
    template(v-slot:default)
      thead
        tr
          th.text-left
            | 姓名
          th.text-left
            | 預約日期
          th.text-left
            | 預約項目
          th.text-left
            | 預約醫生
          th.text-left
            | 手機號碼
          th.text-left
            | 輸入時間
      tbody
        tr(v-for="order in orders" :key="order._id")
          td {{ order.user.account }}
          td {{ order.time }}
          td {{ order.teethitems }}
          td {{ order.doctoritems }}
          td {{ order.phone }}
          td {{ order.date }}
</template>

<script>
export default {
  name: 'UseRrecord',
  data () {
    return {
      orders: []
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/users/orders', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.orders = data.result.map(order => {
        order.date = new Date(order.date).toLocaleString()
        return order
      })
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
