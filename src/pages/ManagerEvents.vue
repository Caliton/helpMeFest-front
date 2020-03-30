<template>
  <q-page class="flex flex-center">
    <div class="events-page">
      <list-events ref="listEvents" title="Gerenciar meus Eventos" :endpoint="`/event/eventsByOwner/${idUser}`" :isOnwer="true" />
    </div>
    <dialog-events @on-close="refreshListEvents"/>
  </q-page>
</template>

<script>
import ListEvents from '../components/events/list_events.vue'
import DialogEvents from '../components/manage_events/dialog_events.vue'

export default {
  name: 'manager-events',

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
  background-color: #eeeeee
</style>
