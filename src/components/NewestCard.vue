<template lang="pug">
v-card.mx-auto(max-width='100%' elevation="0")
  div.d-flex.flex-no-wrap
    div
      v-avatar(rounded size="80")
        v-img.align-end.my-2(height='80px' :src='newest.image')
    div
      v-card-title.pb-0.title(class="text-h6")
        | {{ newest.name }}
      v-card-text.text
        | {{ newest.description }}

</template>

<script>
export default {
  name: 'NewestCard',
  props: {
    newest: {
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
