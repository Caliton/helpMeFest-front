<template>
  <q-dialog
    v-model="onShow"
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card style="width: 1000px; max-width: 80vw;" class="cachorro">
      <q-card-section >
        <q-btn class="float-right" icon="close" flat round dense @click="canceled" />
        <div class="text-h2 q-mt-sm q-mb-xs" style="color: #6F6F6F">{{ event.name || 'Aqui fica o Título'}}</div>
        <div class="text-caption text-grey q-mt-lg" style="font-size: 1rem">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {{event.description || 'Aqui fica à descrição'}}
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-overline"><q-icon size="sm" name="event" /> {{event.dateInitial | moment("DD-MM-YYYY, h:mm:ss a")}}</div>
        <q-btn class="btn btn-secondary button q-ma-sm" @click="add" no-caps color="cyan" size="sm" rounded label="Adicionar Convidado" />
        <vue-draggable tag="ul" :list="guests" style="width: 100%" class="list-guest" handle=".handle">
          <li
            class="item-guest row"
            v-for="(element, idx) in guests"
            :key="element.id"
          >
            <q-input
              class="col-md-6 q-mr-sm"
              v-model="element.name"
              input-style="color: #6F6F6F;"
              color="primary"
              rounded
              dense
              standout="bg-grey-3 text-black"
              label="Convidado"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Preencha com o nome de seu convidado']"
            >
              <template v-slot:prepend>
                <q-icon name="eva-people" style="color: #6F6F6F !important" />
              </template>
            </q-input>

            <q-input
              v-model="element.relationShip"
              style="max-width: 200px;"
              class="col-md-3"
              input-style="color: #6F6F6F;"
              color="primary"
              rounded
              dense
              standout="bg-grey-3 text-black"
              label="relação"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Preencha com o nome de seu convidado']"
            >
              <template v-slot:after>
                <q-btn  flat round icon="fa fa-times close" style="color: #6F6F6F !important" @click="removeAt(idx)" />
              </template>
            </q-input>

          </li>
        </vue-draggable>

      </q-card-section>

      <q-card-section>
      </q-card-section>
      <q-card-actions style="margin: 10px;" class="text-teal container-card absolute-bottom-right">
        <q-btn color="light-blue" dense no-caps label="Quero Participar!" @click="confirm" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
import draggable from 'vuedraggable'
import { EventBus } from 'src/functions/event_bus.js'

export default {
  name: 'dialog-events',

  components: {
    'vue-draggable': draggable
  },

  events: ['on-close'],

  created () {
    EventBus.$on('on-participate-event', (event) => {
      this.event = event
      this.onShowModal()
      this.getGuests(event)
    })
  },

  beforeDestroy () {
    EventBus.$off('on-participate-event')
  },

  computed: {
    draggingInfo () {
      return this.dragging ? 'under drag' : ''
    }
  },

  data () {
    return {
      onShow: false,
      event: {},

      id: 0,
      guests: [],
      userId: localStorage.getItem('userId'),

      dragging: false
    }
  },

  methods: {
    removeAt (idx) {
      this.guests.splice(idx, 1)
    },

    add () {
      this.id++
      this.guests.push({ id: this.id, name: '', relationShip: '', relatedUserId: this.userId, enumCrud: 67 })
    },

    onShowModal (event) {
      this.onShow = true
    },

    onHideModal () {
      this.$emit('on-close')
      this.onShow = false
    },

    async getGuests (events) {
      try {
        this.event = events
        const result = await this.$axios.get(`/Event/${events.id}?userId=${this.userId}`)
        console.log('result: ', result.data.guests)
        this.guests = result.data.guests
      } catch (error) {
        console.log(error)
      }
    },

    async confirm () {
      this.loading = true

      this.guests.forEach((item, i) => {
        this.guests[i].id = 0
      })

      const subscription = this.event

      subscription.guests = this.guests
      subscription.currentUserId = this.userId
      console.log('bora ve', subscription)

      await this.$axios.put('/event/{id}'.replace('{id}', this.event.id), subscription)

      this.loading = false

      this.onHideModal()
    },

    canceled () {
      this.onHideModal()
    }
  }
}
</script>

<style lang="stylus">
.list-guest
  list-style none

  .q-field--focused .q-field__control
    box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
    background: #F2F2F2 !important

</style>
