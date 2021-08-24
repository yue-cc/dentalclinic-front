<template lang="pug">
#adminorders
  h2.text-center.mb-5 預約管理
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
          th.text-left
            | 確認
      tbody
        tr(v-for="order in orders" :key="order._id")
          td {{ order.user.account }}
          td {{ order.time }}
          td {{ order.teethitems }}
          td {{ order.doctoritems }}
          td {{ order.phone }}
          td {{ order.date }}
          td
            v-checkbox

</template>

<script>
export default {
  name: 'AdminOrders',
  data () {
    return {
      orders: []
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/users/orders/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.orders = data.result.map(order => {
        order.date = new Date(order.date).toLocaleString()
        return order
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得預約失敗'
      })
    }
  }
}
</script>
