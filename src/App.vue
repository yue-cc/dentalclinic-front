<template lang="pug">
v-app
  v-navigation-drawer(v-model="drawer" fixed right temporary)
    v-list(nav dense)
      v-list-item-group(v-model="group" active-class="deep-purple--text text--accent-4")
        v-list-item(v-if="!user.islogin" to="/login")
          v-list-item-title 線上預約
        v-list-item(v-if="user.islogin" to="/login" @click="logout")
          v-list-item-title 登出
        v-list-item(v-if="user.islogin && !user.isAdmin" to="/user")
          v-list-item-title 線上預約
        v-list-item(v-if="user.islogin && user.isAdmin" to="/admin")
          v-list-item-title 後台管理
        v-list-item(to="/aboutus")
          v-list-item-title 診所介紹
        h5.footercolor.px-2.mb-2.mt-2 服務項目
        v-list-item.ml-5(v-for="(item, i) in items" :key="i" :to="item.link" link)
          v-list-item-title {{ item.title }}
        v-list-item(to="/articleall")
          v-list-item-title 牙齒百科
        v-list-item(to="/info")
          v-list-item-title 看診須知
        v-list-item(to="/contact")
          v-list-item-title 聯絡我們

  v-app-bar(app flat fixed color="white")
    v-container.fill-height.pt-0.pb-0
      v-toolbar-title
        router-link(to="/")
          v-img(:src="require('@/assets/images/logo.png')" max-height="30" max-width="120" contain)
      v-spacer
      v-btn(text v-if="$vuetify.breakpoint.mdAndUp" to="/aboutus")
        v-text 診所介紹
      v-menu(bottom offset-y v-if="$vuetify.breakpoint.mdAndUp")
        template(v-slot:activator="{ on, attrs }")
          v-btn(text v-bind="attrs" v-on="on")
            | 服務項目
        v-list
          v-list-item(v-for="(item, i) in items" :key="i" @click="() => {}" :to="item.link" link)
            v-list-item-title {{ item.title }}
      v-btn(text v-if="$vuetify.breakpoint.mdAndUp" to="/articleall")
        v-text 牙齒百科
      v-btn(text v-if="$vuetify.breakpoint.mdAndUp" to="/info")
        v-text 看診須知
      v-btn(text v-if="$vuetify.breakpoint.mdAndUp" to="/contact")
        v-text 聯絡我們
      v-btn.ml-3(color="primary" depressed v-if="!user.islogin && $vuetify.breakpoint.mdAndUp" to="/login")
        v-text 線上預約
      v-btn(text v-if="user.islogin && !user.isAdmin && $vuetify.breakpoint.mdAndUp" to="/user")
        v-text 線上預約
      v-btn(text v-if="user.islogin && user.isAdmin && $vuetify.breakpoint.mdAndUp" to="/admin")
        v-text 後台管理
      v-btn.ml-3(color="primary" depressed v-if="user.islogin && $vuetify.breakpoint.mdAndUp" @click="logout")
        v-text 登出
      v-app-bar-nav-icon(@click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown")

  v-main.background
    router-view.pb-16

  v-footer(padless)
    v-card.text-center(flat style="width: 100%; background: #DEE9FC")
      v-card-text
        v-container
          v-row.text-left
            v-col.col-12.col-sm-4
              v-img(:src="require('@/assets/images/logo.png')" max-height="30" max-width="120" contain)
            v-col.col-12.col-sm-4
              h4.footercolor 聯絡方式
              p.mt-2.footercolor
                | 0800-0800
                br
                | abcd@mail.com
                br
                | 桃園市OO區OO里OO路OOO巷OOO號
            v-col.col-12.col-sm-3
              h4.footercolor 門診時間
              p.mt-2.footercolor
                | (診所週日公休)
                br
                | 09:00-12:00
                br
                | 14:00-18:00
                br
                | 19:00-21:00
            v-col.col-12.col-sm-1
              h4.footercolor 追蹤我們
              v-btn.mt-2(v-for='icon in icons', :key='icon' icon)
                v-icon(size='24px' color="#012998") {{ icon }}
      v-divider
      v-card-text.footercolor
        | {{ new Date().getFullYear() }} &mdash;
        strong.footercolor 佳友牙醫診所
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
    icons: [
      'mdi-facebook',
      'mdi-instagram'
    ],
    items: [
      {
        title: '兒童牙科', link: '/serve1'
      },
      {
        title: '人工植牙', link: '/serve2'
      },
      {
        title: '齒顎矯正', link: '/serve3'
      },
      {
        title: '根管治療', link: '/serve4'
      },
      {
        title: '一般牙科', link: '/serve5'
      }
    ]
  }),
  watch: {
    group () {
      this.drawer = false
    }
  },
  methods: {
    async logout () {
      try {
        await this.axios.delete('/users/logout', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('logout')
        if (this.$route.path !== '/') this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '發生錯誤'
        })
      }
    }
  },
  async mounted () {
    if (this.$store.state.jwt.token.length === 0) return
    const diff = Date.now() - this.$store.state.jwt.received
    try {
      // 如果進入網頁時，距離收到 jwt 過了六天，重新取得一次新的 jwt
      // 1000 * 60 * 60 * 24 * 6 = 6 天的毫秒數
      if (diff > 1000 * 60 * 60 * 24 * 6) {
        const { data } = await this.axios.post('/users/extend', {}, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('extend', data.result)
      }
      // 進入網頁時重新取一次使用者資料
      const { data } = await this.axios.get('/users/', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.$store.commit('getinfo', data.result)
    } catch (error) {
      this.$store.commit('logout')
    }
  }
}
</script>

<style lang="stylus">
*
  font-family 'Roboto'
.background
  background #f9f9f9
.footercolor
  color #012998 !important
</style>
