<template lang="pug">
v-row.fill-height
  v-col
    v-sheet(height='64')
      v-toolbar(flat color='#DEE9FC')
        v-btn(color='primary' dark @click.stop='dialog = true')
          | 新增預約
        v-btn.mx-4(outlined @click='setToday')
          | 今天
        v-btn(fab text small @click='prev')
          v-icon(small) mdi-chevron-left
        v-btn(fab text small @click='next')
          v-icon(small) mdi-chevron-right
        v-toolbar-title {{ title }}
        .flex-grow-1
        v-menu(bottom right)
          template(v-slot:activator='{ on }')
            v-btn(outlined v-on='on')
              span {{ typeToLabel[type] }}
              v-icon(right) mdi-menu-down
          v-list
            v-list-item(@click="type = 'day'")
              v-list-item-title 日
            v-list-item(@click="type = 'week'")
              v-list-item-title 周
            v-list-item(@click="type = 'month'")
              v-list-item-title 月
            v-list-item(@click="type = '4day'")
              v-list-item-title 四天
    v-dialog(v-model='dialog', max-width='500')
      v-card
        v-container
          div.doctor-circle1.mr-2
          div.doctor-circle2.mr-2
          div.doctor-circle3
          v-form(@submit.prevent='addEvent')
            v-text-field(v-model='name', type='text', label='時段-醫生-預約人')
            v-text-field(v-model='details', type='text', label='電話及預約項目')
            v-text-field(v-model='start', type='date', label='開始')
            v-text-field(v-model='end', type='date', label='結束')
            v-text-field(v-model='color', type='color', label='選擇標題顏色')
            v-btn.mr-4(type='submit', color='primary', @click.stop='dialog = false')
              | 確定
    v-dialog(v-model='dialogDate', max-width='500')
      v-card
        v-container
          div.doctor-circle1.mr-2
          div.doctor-circle2.mr-2
          div.doctor-circle3
          v-form(@submit.prevent='addEvent')
            v-text-field(v-model='name', type='text', label='時段-醫生-預約人')
            v-text-field(v-model='details', type='text', label='電話及預約項目')
            v-text-field(v-model='start', type='date', label='開始')
            v-text-field(v-model='end', type='date', label='結束')
            v-text-field(v-model='color', type='color', label='選擇標題顏色')
            v-btn.mr-4(type='submit', color='primary', @click.stop='dialog = false')
              | 確定
    v-sheet(height='500')
      v-calendar(ref='calendar', v-model='focus', color='primary', :events='events', :event-color='getEventColor', :event-margin-bottom='3', :now='today', :type='type', @click:event='showEvent', @click:more='viewDay', @click:date='setDialogDate', @change='updateRange')
      v-menu(v-model='selectedOpen', :close-on-content-click='false', :activator='selectedElement', full-width='', offset-x='')
        v-card(color='grey lighten-4', :width='350', flat='')
          v-toolbar(:color='selectedEvent.color', dark='')
            v-btn(@click='deleteEvent(selectedEvent.id)', icon='')
              v-icon mdi-delete
            v-toolbar-title(v-html='selectedEvent.name')
            .flex-grow-1
          v-card-text
            form(v-if='currentlyEditing !== selectedEvent.id')
              | {{ selectedEvent.details }}
            form(v-else='')
              textarea-autosize(v-model='selectedEvent.details', type='text', style='width: 100%', :min-height='100', placeholder='add note')
          v-card-actions
            v-btn(text='', color='secondary', @click='selectedOpen = false')
              | close
            v-btn(v-if='currentlyEditing !== selectedEvent.id', text='', @click.prevent='editEvent(selectedEvent)')
              | edit
            v-btn(text='', v-else='', type='submit', @click.prevent='updateEvent(selectedEvent)')
              | Save
</template>

<script>
import { db } from '@/main'
export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: 'month',
    typeToLabel: {
      month: '月',
      week: '周',
      day: '日',
      '4day': '四天'
    },
    name: null,
    details: null,
    start: null,
    end: null,
    color: '#1976D2', // default event color
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    dialog: false,
    dialogDate: false
  }),
  mounted () {
    this.getEvents()
  },
  computed: {
    title () {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }
      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth
      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear
      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)
      switch (this.type) {
        case 'month':return `${startMonth} ${startYear}`
        case 'week':
        case '4day':return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case 'day':return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long'
      })
    }
  },
  methods: {
    async getEvents () {
      const snapshot = await db.collection('calEvent').get()
      const events = []
      snapshot.forEach(doc => {
        const appData = doc.data()
        appData.id = doc.id
        events.push(appData)
      })
      this.events = events
    },
    setDialogDate ({ date }) {
      this.dialogDate = true
      this.focus = date
    },
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    async addEvent () {
      if (this.name && this.start && this.end) {
        await db.collection('calEvent').add({
          name: this.name,
          details: this.details,
          start: this.start,
          end: this.end,
          color: this.color
        })
        this.getEvents()
        this.name = ''
        this.details = ''
        this.start = ''
        this.end = ''
        this.color = ''
      } else {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請輸入預約項目'
        })
      }
    },
    editEvent (ev) {
      this.currentlyEditing = ev.id
    },
    async updateEvent (ev) {
      await db.collection('calEvent').doc(this.currentlyEditing).update({
        details: ev.details
      })
      this.selectedOpen = false
      this.currentlyEditing = null
    },
    async deleteEvent (ev) {
      await db.collection('calEvent').doc(ev).delete()
      this.selectedOpen = false
      this.getEvents()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => { this.selectedOpen = true })
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      this.start = start
      this.end = end
    },
    nth (d) {
      return d > 3 && d < 21 ? 'th' : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    }
  }
}
</script>
