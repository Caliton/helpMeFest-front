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
        <!-- <q-input outlined v-model="text" :dense="dense" /> -->

        <div class="row">
          <q-input
            class="col-md-7"
            filled
            v-model="event.name"
            placeholder="Titulo do Evento"
            dense
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Dê um titulo para o seu ']"
          />
        </div>

        <div class="row">
          <q-input
            class="col-md-10"
            filled
            v-model="event.description"
            placeholder="Descrição do Evento"
            dense
            type="textarea"
            :maxlength="500"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Dê um titulo para o seu ']"
          />
        </div>

        <div class="row">
          <q-input
            class="col-md-10"
            filled
            v-model="event.place"
            placeholder="Endereço"
            dense
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Dê um titulo para o seu ']"
          >
            <template v-slot:prepend>
              <q-icon name="map" style="color: #6F6F6F !important" />
            </template>
          </q-input>
        </div>

        <div class="row">
          <q-input filled dense v-model="event.dateInitial" class="col-md-4 q-mr-sm" placeholder="Começo do Evento">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="event.dateInitial" mask="DD-MM-YYYY HH:mm" />
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="event.dateInitial" mask="DD-MM-YYYY HH:mm" format24h />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input filled dense v-model="event.dateEnd" class="col-md-4 q-mr-sm" placeholder="Final do Evento">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="event.dateEnd" mask="DD-MM-YYYY HH:mm" />
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="event.dateEnd" mask="DD-MM-YYYY HH:mm" format24h />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-section >
      </q-card-section>

      <q-card-actions style="margin: 10px;" class="text-teal container-card absolute-bottom-right">
        <q-btn color="light-blue" dense no-caps label="Salvar!" @click="confirm" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
import { EventBus } from 'src/functions/event_bus.js'

export default {
  name: 'edit-events',

  events: ['on-close'],

  created () {
    EventBus.$on('on-edit-event', (event) => {
      this.onShow = true
      this.event = event
    })

    EventBus.$on('on-create-event', () => {
      this.onShow = true
    })
  },

  beforeDestroy () {
    EventBus.$off('on-edit-event')
    EventBus.$off('on-create-event')
  },

  computed: {
    draggingInfo () {
      return this.dragging ? 'under drag' : ''
    }
  },

  data () {
    return {
      onShow: false,
      event: {
        name: '',
        dateInitial: '',
        dateEnd: '',
        description: '',
        place: '',
        eventOrganizerId: 0,
        guests: []
      }
    }
  },

  methods: {
    removeAt (idx) {
      this.guests.splice(idx, 1)
    },

    add () {
      this.id++
      this.guests.push({ id: this.id, name: '', relationShip: '' })
    },

    onShowModal () {
      this.onShow = true
    },

    onHideModal () {
      this.$emit('on-close')
      this.onShow = false
    },

    async confirm () {
      this.event.dateInitial = this.$moment(this.event.dateEnd, 'YYYY-MM-DD, h:mm:ss')
      this.event.dateEnd = this.$moment(this.event.dateEnd, 'YYYY-MM-DD, h:mm:ss')
      this.event.eventOrganizerId = localStorage.getItem('userId')

      this.event.eventOrganizer = localStorage.getItem('userId')
      this.event.currentUserId = localStorage.getItem('userId')

      this.event.isParticipating = true

      this.event.guests = []
      this.event.people = []
      this.event.users = []
      EventBus.$emit('on-save-event', this.event)
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
