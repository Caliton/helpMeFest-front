<template>
  <q-dialog v-model="onShow" persistent>
    <q-card style="width: 1000px; max-width: 80vw; max-height: 80vh; height: auto" class="cachorro">
      <q-card-section >
        <q-btn class="float-right" icon="close" flat round dense @click="canceled" />
        <div class="text-overline" >Convidados do(a) <span style="font-size: 1rem">{{user.name }}</span></div>
      </q-card-section>

      <q-card-section>
        <q-btn class="btn btn-secondary button q-ma-sm" no-caps color="cyan" size="sm" rounded label="Adicionar Convidado" @click="add"/>
        <vue-draggable tag="ul" :list="guests" style="width: 100%" class="list-guest" handle=".handle">
          <li
            class="item-guest row"
            v-for="(element, idx) in guests"
            :key="element.idFront"
          >
            <q-input
              class="col-md-6 q-mr-sm"
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
            </q-input>

            <q-input
              v-model="element.relationship"
              style="max-width: 200px;"
              class="col-md-3"
              input-style="color: #6F6F6F;"
              color="primary"
              dense
              filled
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

      <q-card-actions style="margin: 10px;" class="text-teal container-card absolute-bottom-right">
        <q-btn color="light-blue" dense no-caps label="Salvar!" @click="confirm" />
      </q-card-actions>
    </q-card>
</q-dialog>
</template>

<script>
import draggable from 'vuedraggable'
import { OPERATION } from '../../enumerator/operation'

export default {
  name: 'dialog-guests',

  components: {
    'vue-draggable': draggable
  },

  data () {
    return {
      onShow: false,
      event: {},
      guests: [],
      guestsExcludeds: [],
      id: 0,
      idFront: 0,
      userId: 0,
      user: {},
      dragging: false
    }
  },

  methods: {
    onShowDialog  (guestsFilters, event, user) {
      this.event = event
      this.guests = guestsFilters
      this.onShow = true
      this.userId = user.userId

      this.user = user
      this.getGuests(event)
    },

    onHideDialog () {
      this.resetVariables()
      this.onShow = false
    },

    async getGuests (events) {
      try {
        this.event = events
        const result = await this.$axios.get(`/Event/${events.id}?userId=${this.userId}`)
        this.guests = result.data.guests
        this.id = this.guests.length
      } catch (error) {
        console.log(error)
      }
    },

    async confirm () {
      this.loading = true

      this.guestsExcludeds.forEach((item, i) => {
        this.guestsExcludeds[i].enumCrud = OPERATION.delete
      })

      const sendGuest = [...this.guests, ...this.guestsExcludeds]

      const subscription = this.event

      subscription.guests = sendGuest
      subscription.currentUserId = this.userId

      await this.$axios.put('/event/{id}'.replace('{id}', this.event.id), subscription)

      this.loading = false

      this.onHideDialog()
    },

    add () {
      this.idFront++
      this.guests.push({ idFront: this.idFront, id: 0, name: '', relationship: '', relatedUserId: this.userId, enumCrud: OPERATION.create })
    },

    removeAt (idx) {
      this.guestsExcludeds.push(this.guests.splice(idx, 1)[0])
    },

    canceled () {
      this.onHideDialog()
    },

    resetVariables () {
      this.event = {}
      this.guests = []
      this.guestsExcludeds = []
      this.id = 0
      this.idFront = 0
    }
  }
}
</script>

<style>

</style>
