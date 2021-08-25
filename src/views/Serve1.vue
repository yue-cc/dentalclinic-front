<template lang="pug">
v-container
  v-row
    v-co.col-12
      v-img(src='../assets/images/aboutus.jpeg' height='300px')

    v-col.col-12.servepadding
      h2.bigtitle.mt-10 兒童牙科
      p.mt-10  &emsp; &emsp;三歲以下的小孩子所發生的嚴重蛀牙，我們常稱之為奶瓶型齲齒。最典型的型態是蛀牙發生於上顎前牙，而父母常會因為這些牙齒變黃、變黑、或是牙齒蛀斷掉了，才會發現而前來就診。
      p.mt-5  &emsp; &emsp;兒童牙科的對象，是針對零歲至十八歲的嬰兒、幼兒、兒童及青少年。 兒童牙科的範疇則包括有：小兒口腔診斷、小兒口腔門診手術、定期保健塗氟處置、口腔衛生保健諮詢輔導、兒童蛀牙填補、兒童牙髓根管治療、乳牙及青少年恆牙外傷處置、全身麻醉全口重建、早期齒顎生長發育矯正治療。
      v-img(src='../assets/images/serve1-2.jpg')
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
  name: 'Serve2',
  data () {
    return {
      model: [],
      items: [
        { name: '如何治療兒童齲齒?', content: '牙醫會使用氟化物凝膠清潔，這有助於加強牙釉質。自然會在不影響牙齒結構的情況下抵抗腐爛。如果腐爛進一步發展，您的孩子可能需要補綴。這包括去除牙齒的腐爛部分並用白色或金屬材料填充。 ' },
        { name: '造成奶瓶型齲齒的原因為何呢 ?', content: '嬰兒出生後，引發齲齒的細菌會經由父母或保母的唾液，傳染到嬰幼兒的口腔中，如果，再加上一些不良的飲食習慣，例如：每次餵食的時間過長，抱著奶瓶睡覺等等，會導致嬰幼兒發生猛暴性齲齒，又稱奶瓶性齲齒。事實上並非"奶瓶"本身對牙齒有何害處，而是奶瓶內的東西會對牙齒產生傷害，牛奶、果汁或任何含糖的飲料，會使牙齒長期處於酸性的環境中，進而破壞牙齒產生蛀牙。' },
        { name: '如何預防奶瓶型齲齒呢 ?', content: '每次餵食後，用乾淨的紗布清潔嬰兒牙齦上的奶渣，在他長出第一顆牙後，開始幫他刷牙，而在所有乳牙都萌出後，可以開始幫他用牙線清潔牙縫。' }
      ]
    }
  }
}
</script>

<style lang="stylus">
.servepadding
  padding 0 100px
</style>
