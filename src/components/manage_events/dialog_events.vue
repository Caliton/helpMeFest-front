<template>
  <q-dialog
    v-model="onShow"
    transition-show="scale"
    transition-hide="scale"
    persistent
  >
    <q-card style="width: 1000px; max-width: 80vw;" class="cachorro">
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
            class="col-md-12"
            filled
            v-model="event.description"
            placeholder="Descrição do Evento"
            dense
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Dê um titulo para o seu ']"
          />
        </div>

        <div class="row">
          <q-input
            class="col-md-6"
            filled
            v-model="event.place"
            placeholder="Endereço"
            dense
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Dê um titulo para o seu ']"
          />
        </div>

        <div class="row">
          <q-input filled dense v-model="event.dateInitial" class="col-md-4 q-mr-sm">
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

          <q-input filled dense v-model="event.dateEnd" class="col-md-4 q-mr-sm">
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

      <q-card-section>
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
  },

  beforeDestroy () {
    EventBus.$off('on-edit-event')
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
        description: '',
        dateInitial: '',
        dateEnd: '',
        place: '',
        eventOrganizerId: 0,
        guests: []
      },
      dragging: false

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
      this.loading = true

      // const subscription = {
      //   idUser: localStorage.getItem('userId'),
      //   guests: this.guests
      // }

      // await this.$axios.patch('/event/{id}'.replace('{id}', event.id), subscription)

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
