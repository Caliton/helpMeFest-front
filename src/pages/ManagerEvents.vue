<template>
  <q-page class="flex flex-center">
    <div class="events-page">
      <list-events isManager ref="listEvents" title="Gerenciar meus Eventos" :endpoint="`/event/eventsByOwner/${idUser}`" :isOnwer="true" />
    </div>
    <dialog-events @on-close="refreshListEvents"/>
    <dialog-users />
  </q-page>
</template>

<script>
import ListEvents from '../components/events/list_events.vue'
import DialogEvents from '../components/manage_events/dialog_events.vue'
import DialogUsers from '../components/manage_events/dialog_users.vue'

export default {
  name: 'manager-events',

  components: {
    'list-events': ListEvents,
    'dialog-events': DialogEvents,
    'dialog-users': DialogUsers
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
