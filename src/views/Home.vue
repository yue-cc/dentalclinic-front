<template lang="pug">
v-container(fluid).pa-0
  v-container
    v-row(align='center' justify='center')
      v-col.col-12.col-md-5
        h1 每個人的牙醫小夥伴
        h4 佳友診所陪伴您
      v-col.col-12.col-md-7
        v-img(src="../assets/images/home.png")
    v-row(align='center' justify='center')
      v-col.col-12.col-md-6
        v-card.mb-2.mx-auto(height="300px")
          v-card-title
            h4.bigtitle 最新消息
      v-col.col-12.col-md-6
        v-card.mb-2.mx-auto(height="300px")
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
                  td.text-center 診所公休
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
                  td.text-center 診所公休
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
                  td.text-center 診所公休
      v-col.col-12
        v-card.mb-2.mx-auto(height="300px")
          v-row
            v-col.col-12.col-md-6.pt-0
              v-card-title
                h4.bigtitle 貼心會員
              v-card-text
                p 加入會員，即可使用線上預約功能，並完整記錄您曾經預約的項目，每次預約請留下資訊，資料送出後請您靜待診所回覆，當您接到診所通知電話後，預約方能成立。
            v-col.col-12.col-md-6
              h1.text-center 影片預留位置

</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus">
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
