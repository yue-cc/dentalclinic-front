<template lang="pug">
#adminnewests
  h2.bigtitle.mb-5 最新消息管理
  v-dialog(v-model='dialog' persistent max-width='600px')
    template(v-slot:activator='{ on, attrs }')
      v-btn(color='primary' dark v-bind='attrs' v-on="on" block)
        | 新增最新消息
    v-card
      v-card-title
        h5 新增最新消息至【首頁】
      v-card-text
        v-form.px-3
          v-text-field(
            v-model='form.name'
            :state='state.name'
            label='最新消息標題'
            :counter="20"
            prepend-icon='mdi-format-title'
          )
          v-text-field(
            v-model='form.description'
            label='副標'
            :counter="20"
            prepend-icon='mdi-format-list-text'
          )
          img-inputer.ml-8.mt-10(v-model="form.image" theme="dark" size="large" placeholder="點擊或拖曳選擇圖片" bottom-text="點擊或拖曳以修改")
      v-card-actions
        v-spacer
        v-btn(color='blue darken-1' text @click='dialog = false')
          | Close
        v-btn(color='blue darken-1' text @click='resetForm')
          | reset
        v-btn(color='blue darken-1' text @click='submitModal')
          | Save

  v-simple-table.mt-10
    template(v-slot:default)
      thead(style="background: #DEE9FC")
        tr
          th.text-left
            | 封面圖
          th.text-left
            | 最新消息標題
          th.text-left
            | 副標
          th.text-left
            | 修改
      tbody
        tr(v-for="(newest, i) in newests" :key="newest._id")
          td
            v-img(height='50px' width='50px' :src='newest.image')
          td {{ newest.name }}
          td {{ newest.description }}
          td
            v-btn(@click="editNewest(i)") 編輯
</template>

<script>
export default {
  data () {
    return {
      newests: [],
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
    editNewest (index) {
      this.form = {
        name: this.newests[index].name,
        description: this.newests[index].description,
        image: this.newests[index].image
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
          await this.axios.post('/newests', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
        } else {
          const { data } = await this.axios.patch('/newests/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.newests[this.form.index] = {
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
      const { data } = await this.axios.get('/newests/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.newests = data.result.map(newest => {
        if (newest.image) {
          newest.image = `${process.env.VUE_APP_API}/files/${newest.image}`
        }
        return newest
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
