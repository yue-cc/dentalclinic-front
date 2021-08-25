<template lang="pug">
v-container(fluid).pa-0
  v-carousel(cycle hide-delimiters height="400px")
    v-carousel-item(v-for='(carousel,i) in carousels' :key='i' :src='carousel.src' gradient="to bottom, rgba(0,128,128,.2), rgba(50,128,128,.4)")
      v-row.fill-height.mt-0(align='center' justify='center')
        p.carousel-title.text-center
          | 佳友牙醫診所
          br
          | {{ carousel.title }}

  v-container.mt-16
    v-row(align='center' justify='center')
      v-col.col-12.col-md-6
        h2.bigtitle 診所理念
        br
        p
          | 「佳友」來自於「加油」、「最佳好友」和「家有牙醫」的形象。我們秉持著 「專業、溫暖」的診所理念，提供兒童牙科、人工植牙、齒顎矯正、根管治療、牙周治療的專業診療服務。
          br
          br
          | 我們期望，讓不管是第一次看牙醫的兒童、或是有牙科恐懼的患者，都能更加了解牙科資訊，並放心的預約看診。
      v-col.col-12.col-md-6
        v-img(src='../assets/images/aboutus01.jpg')

  v-container.mt-16
    h2.bigtitle 醫療團隊
    v-row.mt-5
      v-col.d-flex.child-flex(v-for='item in items', :key='item.id', cols='12', sm='4')
        v-card.mx-auto(flat='', tile='')
          v-img(:src='item.src', aspect-ratio='1')
          v-card-text.text--primary.text-center
            .title {{ item.name }}
            p {{ item.title }}
</template>

<script>
export default {
  data () {
    return {
      carousels: [
        {
          src: require('../assets/images/carousel-1.jpg'),
          title: '| 為您提供舒適的診所環境 |'
        },
        {
          src: require('../assets/images/carousel-2.jpg'),
          title: '| 為您提供最詳細的說明 |'
        },
        {
          src: require('../assets/images/carousel-3.jpg'),
          title: '| 為您提供完整的預約流程 |'
        }
      ],
      items: [
        {
          id: 1,
          src: require('../assets/images/doctor-1.jpg'),
          name: '黃偉豪醫生',
          title: '佳友牙醫院長'
        },
        {
          id: 2,
          src: require('../assets/images/doctor-2.jpg'),
          name: '蔡雅婷醫生',
          title: '牙醫師'
        },
        {
          id: 3,
          src: require('../assets/images/doctor-3.jpg'),
          name: '陳冠廷醫生',
          title: '牙醫師'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.carousel-title
  color white
  font-size 20px
</style>
