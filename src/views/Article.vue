<template lang="pug">
v-container#article
  v-row.mt-10
    v-col.col-12.col-md-6
      img(:src="image" style="width: 500px")
    v-col.col-12.col-md-6
      h2.bigtitle.mb-5 {{ name }}
      p {{ subtitle }}
      p {{ description }}

</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      name: '',
      subtitle: '',
      description: '',
      image: ''
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/articles/' + this.$route.params.id)
      this.name = data.result.name
      this.subtitle = data.result.subtitle
      this.description = data.result.description
      this.image = `${process.env.VUE_APP_API}/files/${data.result.image}`
      document.title = `${this.name} | 佳友牙醫診所`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
