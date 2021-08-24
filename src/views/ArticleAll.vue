<template lang="pug">
v-container
  v-row
    v-col.col-12.col-md-4(v-for="article in articles" :key="article._id")
      router-link(:to="'/article/'+article._id")
        ArticleCard(:article="article")
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'
export default {
  name: 'ArticleAll',
  data () {
    return {
      articles: []
    }
  },
  components: {
    ArticleCard
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/articles')
      this.articles = data.result.map(article => {
        if (article.image) {
          article.image = `${process.env.VUE_APP_API}/files/${article.image}`
        }
        return article
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得文章失敗'
      })
    }
  }
}
</script>
