<template lang="pug">
v-container
  v-row(align='center' justify='center').mt-16.mb-5
    v-col.col-12.col-md-2
      h1.text-center step1
    v-col.col-12.col-md-2
      v-img(src='../assets/images/aboutus.jpeg' height='100px' contain)
    v-col.col-12.col-md-8
        h2 第一次看診準備事項
        p 為了避免擔誤您寶貴的時間，請事先來電預約。第一次看診時間約需45~60分鐘。(因需先為您做全口口腔資料收集，煩請先預留您寶貴的時間，以利為醫師為您診療)請攜帶雙證件(健保卡+身份證或駕照)，以利確認您的資料。
  hr.hr
  v-row(align='center' justify='center').mt-5.mb-5
    v-col.col-12.col-md-2
      h1.text-center step2
    v-col.col-12.col-md-2
      v-img(src='../assets/images/aboutus.jpeg' height='100px' contain)
    v-col.col-12.col-md-8
        h2 當日掛號注事項
        p 看診前，櫃檯人員會請您填寫個人資料，包括是否有藥物過敏、凝血問題、內科疾病等。填妥您的資料並核對無誤後，櫃檯人員會請您於候診區稍坐，護士小姐會先為您做環境介紹，再帶您拍攝口腔健檢所需之口內資料；完成後再請醫師為您做初診檢查服務。
  hr.hr
  v-row(align='center' justify='center').mt-5.mb-5
    v-col.col-12.col-md-2
      h1.text-center step3
    v-col.col-12.col-md-2
      v-img(src='../assets/images/aboutus.jpeg' height='100px' contain)
    v-col.col-12.col-md-8
        h2 醫師診療服務
        p 您的初診醫師會幫您作完整的口腔檢查(牙周病、蛀牙、顳顎關節、顏面美容等四個層次)。初診醫師會視您口腔狀況給予您診療建議計劃。醫師也會判斷您的口腔狀況，是否需轉診給其他專科醫師做治療，或者做跨科會診。您的醫師也會為您做洗牙服務。（限未超過半年者）我們擁有專業及經驗豐富的醫療團隊，每位醫師各有專長診治項目，給您專業、安心的牙醫治療。
  hr.hr
  v-row(align='center' justify='center').mt-5.mb-5
    v-col.col-12.col-md-2
      h1.text-center step4
    v-col.col-12.col-md-2
      v-img(src='../assets/images/aboutus.jpeg' height='100px' contain)
    v-col.col-12.col-md-8
        h2 專業醫療諮詢
        p 我們培訓專業口腔健康管理師，針對醫師於診間給您的診療建議，搭配您的口腔X光照片等，提供您最專業的口腔治療計劃。
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
    }
  }
}
</script>
