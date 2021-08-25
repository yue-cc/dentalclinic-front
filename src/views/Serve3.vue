<template lang="pug">
v-container
  v-row
    v-co.col-12
      v-img(src='../assets/images/serve3-1.jpg' height='300px')

    v-col.col-12.servepadding
      h2.bigtitle.mt-10 齒顎矯正
      p.mt-10  &emsp; &emsp;齒顎矯正治療一般俗稱為「牙齒矯正」、「牙齒整形」、「齒列矯正」。臨床上，齒顎矯正專科醫師會利用矯正裝置（活動式或固定式），將牙齒或齒列的異常咬合，改善至最適當的狀況。世界衛生組織資料顯示，全球每十個人中有七個人有不同程度的齒顎不整。在歐美，平均每 3~5 人中有一個接受齒顎矯正治療，有很多案例是基於健康的考慮而處理。經由齒顎矯正治療，齒列不整的病人可獲得口腔健康、功能與美觀上的改善。
      h3.mt-10 適合齒顎矯正的案例
      p.mt-5
        | 1.不良口腔習慣導致開咬、上顎牙弓狹窄或前後牙錯咬。
        br
        | 2.早期齲齒或外傷，引起乳牙或恆牙過早拔除，導致空間喪失而引起的牙齒擁擠。
        br
        | 3.牙齒形態不正常、牙齒大小與牙弓有較大差異，引起的咬合不正。
        br
        | 4.牙齒阻生或先天缺牙或多生牙導致牙齒排列不整或擁擠。
        br
        | 5.上下顎骨發育不全或過度，導致嚴重咬合不正，則需與正顎手術配合治療。
        br
        | 6.成人因牙周病或早期拔牙，導致牙齒移位或缺牙，在做假牙或植體膺復前，需以矯正治療調整歪倒移位的牙齒。
      v-img(src='../assets/images/serve3-2.jpg')
      v-row.mt-10
        v-col
          h3 FAQ
          v-expansion-panels.mt-5(accordion='')
            v-expansion-panel(v-for='(item,i) in items', :key='i')
              v-expansion-panel-header.footercolor
                h4(style='line-height: 30px') Q： {{ item.name }}
              v-expansion-panel-content(style='line-height: 30px') A：{{ item.content }}

</template>

<script>
export default {
  name: 'Serve3',
  data () {
    return {
      model: [],
      items: [
        { name: '齒顎矯正治療前的檢查?', content: '包含初診評估診斷、收集矯正必要資料（例如：生長記錄、牙齒石膏模型、口內及口外X光檢查、臉部及口內的齒列相片等）' },
        { name: '有那些型態的矯正裝置?', content: '可分固定與活動的矯正裝置，活動的矯正裝置主要運用在矯正局部一雨顆有足夠空間僅需推移扶正之牙齒，固定矯正裝置則是像小豆豆般需黏附在牙齒上藉由矯正線或矯正彈性橡皮筋來調整移動牙齒，另外一種則是功能性矯正裝置多用於仍在生長發育之兒童或青少年來改正上下顎骨相對咬之關係並引導重建咬合。' },
        { name: '一般矯正治療整個療程需花多久時間?', content: '每次治療需花多久時間？多久時間要回診一次？ 端視不同情況而定，一般而言大約在6至24個月左右。 剛開始上固定矯正裝置時需較長的時間，之後則平均3至4星期回診一次，若不需更換僅做調整則只需短短數分鐘即可完成。' }
      ]
    }
  }
}
</script>

<style lang="stylus">
.servepadding
  padding 0 100px
</style>
