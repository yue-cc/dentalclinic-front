<template lang="pug">
v-container#register
  v-row.mt-16(align='center' justify='center')
    v-col.col-12.col-sm-6
      h2 會員功能介紹
      p 線上預約
    v-spacer
    v-col.col-12.col-sm-4.bb
      v-row
        v-col.col-12
          h1.text-center.mb-5 登入
          form
            v-text-field(
              label="帳號"
              v-model="form.account"
              :rules="rules.account"
              required
              hint="帳號長度限制為 4 到 10 個字"
              outlined
            )
            v-text-field(
              label="密碼"
              v-model="form.password"
              :rules="rules.password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              hint="密碼長度限制為 4 到 20 個字"
              @click:append="show = !show"
              outlined
            )
        v-col.col-12
          v-row
            v-col.col-12.col-sm-6
              v-btn(text block elevation="2" @click="reset") 重設
            v-col.col-12.col-sm-6
              v-btn(block color="primary" elevation="2" @click="submit") 登入
        v-col.col-12.mt-5
          hr.hr
        v-col.col-12
          v-btn(block text color="primary" to='/register')
            v-text 建立帳號
</template>

<script>
export default {
  data () {
    const defaultForm = Object.freeze({
      account: '',
      password: ''
    })

    return {
      form: Object.assign({}, defaultForm),
      show: false,
      password: 'Password',
      rules: {
        account: [
          account => !!account || '請輸入密碼',
          account => (!!account && account.length <= 10) || '帳號需小於10個字元',
          account => (!!account && account.length >= 4) || '帳號需大於4個字元'
        ],
        password: [
          password => !!password || '請輸入密碼',
          password => (!!password && password.length <= 20) || '密碼需小於20個字元',
          password => (!!password && password.length >= 4) || '密碼需大於4個字元'
        ]
      }
    }
  },
  methods: {
    reset () {
      this.form.account = ''
      this.form.password = ''
    },
    async submit () {
      try {
        const { data } = await this.axios.post('/users/login', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        this.$store.commit('login', data)
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.bb
  padding 50px
  background #fff
  border-radius 2%
  box-shadow 1px 1px 1px #ddd
.hr
  height 1px
  width 100%
  background #fff
</style>
