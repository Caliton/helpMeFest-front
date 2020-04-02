<template>
  <q-dialog
    v-model="onShow"
    transition-show="scale"
    transition-hide="scale"
    persistent
  >
    <q-card style="width: 1000px; max-width: 80vw; max-height: 80vh; height: auto" class="cachorro">
      <q-card-section >

      </q-card-section>

      <q-card-section>
        <q-btn class="btn btn-secondary button q-ma-sm" @click="add" no-caps color="cyan" size="sm" rounded label="Adicionar Convidado" />
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
              label="Convidado"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Preencha com o nome de seu convidado']"
            >
              <template v-slot:prepend>
                <q-icon name="eva-people" style="color: #6F6F6F !important" />
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
import { EventBus } from 'src/functions/event_bus.js'

export default {
  name: 'dialog-guests',
  data () {
    return {
      onShow: false
    }
  },

  created () {
    EventBus.$on('on-participate-event', (event) => {
      this.event = event
      this.onShowModal()
    })
  },

  beforeDestroy () {
    EventBus.$off('on-participate-event')
  },

  methods: {
    onShowModal () {
      this.onShow = true
    },

    onHideModal () {
      this.onShow = false
    },

    confirm () {
      this.onHideModal()
    }
  }

}
</script>

<style lang="stylus">

</style>
