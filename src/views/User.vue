<template lang="pug">
v-container#user
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
  name: 'User',
  data: () => ({
    selectedItem: 0,
    items: [
      { text: '預約系統', icon: 'mdi-calendar-star', route: '/user/reserve' },
      { text: '預約紀錄', icon: 'mdi-account-details', route: '/user/record' }
    ]
  })
}
</script>
