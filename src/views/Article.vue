<template lang="pug">
v-container#article
  img(:src="image" style="width: 500px")
  h1 {{ name }}
  p {{ description}}

</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      name: '',
      description: '',
      image: ''
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/articles/' + this.$route.params.id)
      this.name = data.result.name
      this.description = data.result.description
      this.image = `${process.env.VUE_APP_API}/files/${data.result.image}`
      document.title = `${this.name} | 佳友牙醫診所`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
