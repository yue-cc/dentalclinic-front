<template lang="pug">
v-container#admin
  v-row
    v-col.col-12.col-md-2
      v-card
        v-list(column align-center nav dense)
          v-subheader 歡迎
          v-list-item-group(v-model='selectedItem', color='primary')
            v-list-item(v-for='(item, i) in items', :key='i' :to='item.route')
              v-list-item-icon
                v-icon(v-text='item.icon')
              v-list-item-content
                v-list-item-title(v-text='item.text')
    v-col.col-12.col-md-10
      router-view
</template>

<script>

export default {
  name: 'Admin',
  data: () => ({
    selectedItem: 0,
    items: [
      { text: '預約管理', icon: 'mdi-calendar-star', route: '/admin/orders' },
      { text: '文章管理', icon: 'mdi-note', route: '/admin/articles' },
      { text: '最新消息管理', icon: 'mdi-note', route: '/admin/newests' }
    ]
  })
}
</script>
