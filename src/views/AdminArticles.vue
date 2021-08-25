<template lang="pug">
#adminarticles
  h1.text-center.mb-5 文章管理
  v-dialog(v-model='dialog' persistent max-width='600px')
    template(v-slot:activator='{ on, attrs }')
      v-btn(color='primary' dark v-bind='attrs' v-on="on" block)
        | 新增文章
    v-card
      v-card-title
        h5 新增文章至【牙齒小百科】
      v-card-text
        v-form.px-3
          v-text-field(
            v-model='form.name'
            :state='state.name'
            label='文章標題'
            prepend-icon='mdi-clock-time-four-outline'
          )
          v-textarea(
            v-model='form.description'
            label='文章內容'
            prepend-icon='mdi-message-processing-outline'
          )
          img-inputer(v-model="form.image" theme="dark" size="large" placeholder="點擊或拖曳選擇圖片" bottom-text="點擊或拖曳以修改")
      v-card-actions
        v-spacer
        v-btn(color='blue darken-1' text @click='dialog = false')
          | Close
        v-btn(color='blue darken-1' text @click='resetForm')
          | reset
        v-btn(color='blue darken-1' text @click='submitModal')
          | Save

  v-simple-table.mt-5
    template(v-slot:default)
      thead
        tr
          th.text-left
            | 封面圖
          th.text-left
            | 文章標題
          th.text-left
            | 內文
          th.text-left
            | 修改
      tbody
        tr(v-for="(article, i) in articles" :key="article._id")
          td
            v-img(height='50px' width='50px' :src='article.image')
          td {{ article.name }}
          td {{ article.description }}
          td
            v-btn(@click="editArticle(i)") 編輯
</template>

<script>
export default {
  data () {
    return {
      articles: [],
      dialog: false,
      form: {
        name: '',
        description: '',
        image: null,
        _id: ''
      }
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true
      }
    }
  },
  methods: {
    editArticle (index) {
      this.form = {
        name: this.articles[index].name,
        description: this.articles[index].description,
        image: this.articles[index].image
      }
      this.dialog = true
    },
    resetForm (event) {
      this.form = {
        name: '',
        description: '',
        image: null,
        _id: ''
      }
    },
    async submitModal () {
      try {
        const fd = new FormData()
        for (const key in this.form) {
          fd.append(key, this.form[key])
        }
        if (this.form._id.length === 0) {
          await this.axios.post('/articles', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
        } else {
          const { data } = await this.axios.patch('/articles/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.articles[this.form.index] = {
            name: this.form.name,
            description: this.form.description,
            image: `${process.env.VUE_APP_API}/files/${data.result.image}`,
            _id: this.form._id
          }
        }
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '新增文章成功'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/articles/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
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
