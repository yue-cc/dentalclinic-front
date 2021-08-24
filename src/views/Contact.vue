<template lang="pug">
v-container
  v-row.mt-16(align='center' justify='center')
    v-col.col-12.col-md-4
      h2 聯絡方式
      p
        | 0800-0800
        br
        | abcd@mail.com
        br
        | 桃園市OO區OO里OO路OOO巷OOO號
    v-col.col-12.col-md-8
      iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176822.7212159119!2d121.10538170246993!3d24.94434676673058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683d0eceda863f%3A0x54e44f52583a486a!2z5qGD5ZyS5biC!5e0!3m2!1szh-TW!2stw!4v1628727976049!5m2!1szh-TW!2stw" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy")
    v-col.col-12.col-md-4
      h2 交通方式
      p
        | (捷運)搭乘OO線至OO站，步行10分鐘
        br
        | (公車)搭乘OO號公車至OO站，步行5分鐘
    v-col.col-12.col-md-8
      v-img(src='../assets/images/route.jpg')
</template>

<script>
export default {
  name: 'Contact'
}
</script>
