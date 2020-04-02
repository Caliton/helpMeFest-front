<template>
  <q-page class="flex flex-center">
    <div class="events-page">
      <list-events ref="listEvents" :endpoint="`/event/allbyuser/${idUser}`" />
    </div>
    <dialog-events @on-close="refreshListEvents"/>
  </q-page>
</template>

<script>
import ListEvents from '../components/events/list_events.vue'
import DialogEvents from '../components/events/dialog_events.vue'

export default {
  name: 'PageIndex',

  components: {
    'list-events': ListEvents,
    'dialog-events': DialogEvents
  },

  data () {
    return {
      idUser: localStorage.getItem('userId')
    }
  },

  methods: {
    refreshListEvents () {
      this.$refs.listEvents.refresh()
    }
  }

}
</script>

<style lang="stylus">
.events-page
  width 90%
  min-height 80vmin
  border-radius: 6px
  background-color: #E4E8F4
</style>
