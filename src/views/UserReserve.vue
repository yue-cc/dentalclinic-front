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
        v-text-field(v-model='form.phone' label='手機號碼' prepend-icon='mdi-phone')
    v-card-text
      h4.mt-5.text-center 資料送出後請您靜待診所回覆，當您接到診所通知電話後，預約方能成立
    v-card-actions
      v-spacer
      v-btn.mx-0.mt-3(color='blue darken-1' text @click="resetForm") 取消
      v-btn.mx-0.mt-3(color='primary' dark @click="addReserve") 確認
      v-spacer
</template>

<script>

export default {
  name: 'UserReserve',
  data () {
    return {
      form: {
        teethitems: ['兒童牙科', '人工植牙', '齒顎矯正', '根管治療', '一般牙科'],
        doctoritems: ['黃偉豪醫生', '蔡雅婷醫生', '陳冠廷醫生'],
        time: '',
        phone: ''
      },
      menu: false,
      teethitems: ['兒童牙科', '人工植牙', '齒顎矯正', '根管治療', '一般牙科'],
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
          text: '預約傳送成功，請等待診所回復'
        })
        this.$router.push('/user/record')
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
