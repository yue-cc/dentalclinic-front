<template lang="pug">
#userreserve
  v-card
    v-card-title
      h5 新增預約
    v-card-text
      v-form.px-3
        v-select(v-model="form.teethitems" :items="teethitems" label='預約項目' prepend-icon='mdi-hospital-box-outline')
        v-select(v-model="form.doctoritems" :items="doctoritems" label='預約醫生' prepend-icon='mdi-doctor')
        v-text-field(v-model='form.time' label='預約時間(請填入您方便的時間)' prepend-icon='mdi-clock-time-four-outline')
        v-text-field(v-model='form.phone' label='手機號碼' prepend-icon='mdi-message-processing-outline')
    v-card-actions
      v-btn.mx-0.mt-3(flat='' @click="resetForm") 重置
      v-btn.mx-0.mt-3(flat='' @click="addReserve") 確認預約
</template>

<script>

export default {
  name: 'UserHome',
  data () {
    return {
      form: {
        teethitems: ['兒童牙科', '人工植牙', '齒顎矯正', '根管治療', '牙周治療'],
        doctoritems: ['黃偉豪醫生', '蔡雅婷醫生', '陳冠廷醫生'],
        time: '',
        phone: ''
      },
      menu: false,
      teethitems: ['兒童牙科', '人工植牙', '齒顎矯正', '根管治療', '牙周治療'],
      doctoritems: ['黃偉豪醫生', '蔡雅婷醫生', '陳冠廷醫生']
    }
  },
  methods: {
    resetForm (event) {
      this.form = {
        teethitems: '',
        doctoritems: '',
        time: '',
        phone: ''
      }
    },
    async addReserve () {
      try {
        await this.axios.post('/users/reserve', { teethitems: this.form.teethitems, doctoritems: this.form.doctoritems, time: this.form.time, phone: this.form.phone }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '預約傳送成功'
        })
        this.$router.push('/user')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '預約失敗'
        })
      }
    }
  }
}
</script>
