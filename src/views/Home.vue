<template lang="pug">
v-container(fluid).pa-0
  v-col.col-12.homebg
    v-container
      v-row(align='center' justify='center')
        v-col.col-12.col-md-4
          h1 每個人的牙醫小夥伴
          h4 佳友診所陪伴您
          div.mt-5
            v-icon(color="#012998") mdi-phone
            span.pl-2.footercolor 0800-0800
        v-col.col-12.col-md-8
          v-img(src="../assets/images/hometeeth.jpg")
  v-container.mt-16
    v-row(align='center' justify='center')
      v-col.col-12.col-md-6
        v-card.mb-2.mx-auto.pa-5.rounded-lg(height="320px")
          v-card-title
            h4.bigtitle 最新消息
          v-card-text
            v-col.col-12(v-for="newest in newests" :key="newest._id")
              router-link(:to="'/newest/'+newest._id")
                NewestCard(:newest="newest")
      v-col.col-12.col-md-6
        v-card.mb-2.mx-auto.pa-5.rounded-lg(height="320px")
          v-card-title
            h4.bigtitle 門診班表
          v-card-text.pl-8.pt-5
            div.doctor-circle1
            span.pl-1.pr-5 黃偉豪醫生
            div.doctor-circle2
            span.pl-1.pr-5 蔡雅婷醫生
            div.doctor-circle3
            span.pl-1 陳冠庭醫生
          v-simple-table.px-5(dense)
            template(v-slot:default)
              thead
                tr
                  th 時刻
                  th 一
                  th 二
                  th 三
                  th 四
                  th 五
                  th 六
                  th.text-center 日
              tbody
                tr
                  td 09:00-12:00
                  td
                    div.doctor-circle1
                  td
                    div.doctor-circle2
                  td
                    div.doctor-circle1
                  td
                    div.doctor-circle2
                  td
                    div.doctor-circle1
                  td
                    div.doctor-circle2
                  td.text-center 公休
                tr
                  td 14:00-18:00
                  td
                    div.doctor-circle1
                  td
                    div.doctor-circle3
                  td
                    div.doctor-circle3
                  td
                    div.doctor-circle1
                  td
                    div.doctor-circle1
                  td
                    div.doctor-circle2
                  td.text-center 公休
                tr
                  td 19:00-21:00
                  td
                    div.doctor-circle3
                  td
                    div.doctor-circle1
                  td
                    div.doctor-circle3
                  td
                    div.doctor-circle1
                  td
                    div.doctor-circle2
                  td
                    div.doctor-circle1
                  td.text-center 公休
      v-col.col-12
        v-card.mb-2.mx-auto.pa-5.rounded-lg
          v-row
            v-col.col-12.col-md-6
              v-card-title
                h4.bigtitle 貼心會員
              v-card-text.pt-5
                h4 1.線上預約功能
                p 加入會員，即可使用線上預約功能，每次預約請留下資訊，資料送出後請您靜待診所回覆，當您接到診所通知電話後，預約方能成立。
                h4 2.預約紀錄功能
                p 完整記錄您曾經預約的項目，
            v-col.col-12.col-md-6
              iframe(width="100%" height="280" src="https://www.youtube.com/embed/pmGWYdtb9fE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
import NewestCard from '@/components/NewestCard.vue'
export default {
  name: 'Home',
  data () {
    return {
      newests: []
    }
  },
  components: {
    NewestCard
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/newests')
      this.newests = data.result.map(newest => {
        if (newest.image) {
          newest.image = `${process.env.VUE_APP_API}/files/${newest.image}`
        }
        return newest
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得最新消息失敗'
      })
    }
  }
}
</script>

<style lang="stylus">
.homebg
  background #e7f0f5
.bigtitle
  color #012998 !important
  border-left solid #012998 5px
  padding-left 8px
.doctor-circle1
  width 14px
  height 14px
  border-radius 50%
  background #33CCFF
  display inline-block
.doctor-circle2
  width 14px
  height 14px
  border-radius 50%
  background #FFCC33
  display inline-block
.doctor-circle3
  width 14px
  height 14px
  border-radius 50%
  background #CC33FF
  display inline-block
p
 line-height 30px
</style>
