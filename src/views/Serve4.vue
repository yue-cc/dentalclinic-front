<template lang="pug">
v-container
  v-row
    v-co.col-12
      v-img(src='../assets/images/serve4-1.jpg' height='300px')

    v-col.col-12.servepadding
      h2.bigtitle.mt-10 根管治療
      p.mt-10  &emsp; &emsp;根管治療是牙齒因為蛀牙、外傷或牙周病導致內部牙髓感染，因此需要進行牙髓組織的清創(俗稱抽神經)，擴大根管系統及完成根管充填等步驟。若牙髓組織生病而未接受根管治療，或原處置不完整則可能發生疼痛腫脹、慢性根尖區病變、蜂窩性組織炎等病灶。若牙齒無法接受根管治療或合併有其他問題(牙周狀況差，齒質不足….)經判定預後不良時，拔牙為解除問題的另一替代方法。
      v-img(src='../assets/images/serve4-2.jpg')
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
  name: 'Serve4',
  data () {
    return {
      model: [],
      items: [
        { name: '治療後會有疼痛的情況嗎?', content: '每次根管治療過程後，牙齒有可能產生疼痛。疼痛時可先服用醫師開給您的止痛藥，若無效再與醫師聯絡。若在門診緊急治療到第一次約診前，請於上午門診期間掛號看診(一~五)。若在根管治療期間發生疼痛，請先以電話告知根管治療科醫師，我們會為您安排處理。' },
        { name: '根管治療後的牙齒需注意什麼?', content: '因為根管治療後的牙齒多已喪失較多牙齒結構，治療完成後多須做牙套將其保護起來，少數牙齒可以直接填補即可。在根管治療完成後到牙套製作完成前請避免用該牙齒咀嚼，否則可能造成牙齒斷裂。(牙套費用請詢問醫師) ' },
        { name: '根管治療後仍持續有腫痛狀症怎麼辦?', content: '根管治療完成後大部分臨床症狀均可改善，若病灶擴及根尖區骨質壞損則需較長追蹤期(六個月至數年)，若仍有症狀，須與醫師討論進一步評估，必要時須合併手術處理。。' }
      ]
    }
  }
}
</script>

<style lang="stylus">
.servepadding
  padding 0 100px
</style>
