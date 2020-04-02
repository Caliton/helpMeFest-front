<template>
  <q-dialog
    v-model="onShow"
    transition-show="scale"
    transition-hide="scale"
    persistent
  >
    <q-card style="width: 1000px; max-width: 80vw; max-height: 80vh; height: auto" class="cachorro">
      <q-card-section >
        <q-btn class="float-right" icon="close" flat round dense @click="canceled" />
        <div class="text-overline" >Usúarios que vão participar do(a) <span style="font-size: 1rem">{{event.name}}</span></div>
      </q-card-section>

      <q-card-section>
        <vue-draggable tag="ul" :list="users" style="width: 100%" class="list-guest" handle=".handle">
          <li
            class="item-guest row"
            v-for="(element, idx) in users"
            :key="element.idFront"
          >
            <q-input
              class="col-md-10 q-mr-sm"
              v-model="element.name"
              input-style="color: #6F6F6F;"
              color="primary"
              filled
              dense
              placeholder="Convidado"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Preencha com o nome de seu convidado']"
            >
              <template v-slot:prepend>
                <q-icon name="eva-person" style="color: #6F6F6F !important" />
              </template>

              <template v-slot:after>
                <q-btn  flat round icon="eva-people" style="color: #6F6F6F !important" @click="openGuests(element)" />
                <q-btn  flat round size="sm" icon="fa fa-times close" style="color: #6F6F6F !important" @click="removeAt(idx)" />

              </template>
            </q-input>
          </li>
        </vue-draggable>

        <div v-if="this.users.length === 0">
          <div class="full-width row flex-center text-accent q-gutter-sm">
            <q-icon size="2em" name="sentiment_dissatisfied" />
            <span>
              Uhm que pena os usuários não se inscreveram no seu evento...
            </span>
          </div>
        </div>
      </q-card-section>

      <q-card-actions style="margin: 10px;" class="text-teal container-card absolute-bottom-right">
        <q-btn color="light-blue" dense no-caps label="Salvar!" @click="confirm" />
      </q-card-actions>

      <dialog-guests ref="cachorro" />
    </q-card>
  </q-dialog>
</template>

<script>
import draggable from 'vuedraggable'
import { EventBus } from 'src/functions/event_bus.js'
import dialogGuests from './dialog_guests.vue'
import { OPERATION } from '../../enumerator/operation'

export default {
  name: 'dialog-users',

  components: {
    'vue-draggable': draggable,
    'dialog-guests': dialogGuests
  },

  data () {
    return {
      onShow: false,
      guests: [],
      users: [],
      cachorro: [],
      usersExcludeds: []
    }
  },

  created () {
    EventBus.$on('on-participate-event', (event) => {
      this.event = event
      this.getGuests(event)
      this.onShowModal()
    })
  },

  beforeDestroy () {
    EventBus.$off('on-participate-event', this.event)
  },

  methods: {
    onShowModal () {
      this.onShow = true
    },

    onHideModal () {
      this.onShow = false
    },

    openGuests (user) {
      const guestsFilter = this.guests.filter((item) => {
        return item.relatedUserId === user.userId
      })

      this.$refs.cachorro.onShowDialog(guestsFilter, this.event, user)
    },

    async getGuests (events) {
      try {
        this.event = events

        const result = await this.$axios.get(`/Event/${events.id}?userId=${localStorage.getItem('userId')}`)
        this.event = result.data
        this.guests = result.data.guests

        this.users = this.organizerUsers(result.data.users)
      } catch (error) {
        console.log(error)
      }
    },

    organizerUsers (data) {
      const list = []
      data.forEach(item => {
        // !(item.userId === this.event.eventOrganizerId)
        if (!item.relatedUserId) {
          list.push(item)
        }
      })

      return list
    },

    async confirm () {
      this.loading = true

      this.usersExcludeds.forEach((item, i) => {
        this.usersExcludeds[i].enumCrud = OPERATION.delete
      })

      const sendUsers = [...this.users, ...this.usersExcludeds]

      const subscription = this.event

      subscription.users = sendUsers
      subscription.currentUserId = localStorage.getItem('userId')

      await this.$axios.put('/event/{id}'.replace('{id}', this.event.id), subscription)

      this.loading = false

      this.onHideModal()
    },

    canceled () {
      this.onHideModal()
    },

    removeAt (idx) {
      this.usersExcludeds.push(this.users.splice(idx, 1)[0])
    }

  }

}
</script>

<style lang="stylus">

</style>
