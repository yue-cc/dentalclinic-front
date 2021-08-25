<template lang="pug">
v-card.article-card.mb-2.mx-auto(
  max-width='400'
)
  v-img.white--text.align-end(height='200px' :src='article.image')
  v-card-title.pb-0.title(class="text-h6") {{ article.name }}
  v-card-text.text--primary.text
    | {{ article.subtitle }}

</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus">
.title
  display inline-block
  text-decoration none !important
.text
  display inline-block
  text-decoration none !important
</style>
