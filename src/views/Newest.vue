<template lang="pug">
v-container#newest
  v-row.mt-10
    v-col.col-12.col-md-6
      img(:src="image" style="width: 500px")
    v-col.col-12.col-md-6
      h2.bigtitle.mb-5 {{ name }}
      p {{ description}}

</template>

<script>
export default {
  name: 'Newest',
  data () {
    return {
      name: '',
      description: '',
      image: ''
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/newests/' + this.$route.params.id)
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
