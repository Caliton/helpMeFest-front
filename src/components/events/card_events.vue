<template>
  <q-card class="my-card">
    <q-card-section horizontal :class="{'my-card-participate': isParticipate}" flat bordered @click="openDetailsEventParticipate">
      <q-card-section style="min-height: 166px; max-height: 167px">
        <div class="text-overline"><q-icon size="sm" name="event" /> {{date | moment("DD-MM-YYYY, h:mm:ss a")}}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ title || 'Aqui fica o Título'}}</div>
        <div class="text-caption text-grey">
           &nbsp; &nbsp; &nbsp;{{descriptionClean || 'Aqui fica à descrição'}}
        </div>
      </q-card-section>
    </q-card-section>

    <q-card-actions v-if="!isOnwer" align="right" style="padding: 1rem; padding-right: 1.5rem" class="absolute-bottom-right">
      <div class="check" style="transform: scale(1.8);" @click="openDetailsEvent">
        <input :id="`check-${data.id}`" type="checkbox" v-model="isParticipate">
        <label :for="`check-${data.id}`"></label>
        <q-tooltip v-if="!isParticipate" anchor="bottom right" self="top right">
          ZzzZZzz..zZzz.
        </q-tooltip>

        <q-tooltip
          v-if="isParticipate"
          anchor="bottom right"
          self="top right"
          content-class="bg-purple text-white shadow-4"
          transition-show="rotate"
          transition-hide="rotate"
        >
          Uhuulll!!!! Eu irei!!!
        </q-tooltip>
      </div>
    </q-card-actions>

    <q-card-actions v-if="isOnwer" align="right">
      <q-btn
        icon="eva-trash-2-outline"
        no-caps
        flat
        style="background-color: none; color: #e74c3c; box-shadow: none !important"
        @click="openExcludeEvent"
      />

      <q-btn
        icon="eva-edit-2-outline"
        no-caps
        flat
        style="background-color: none; color: #9b59b6"
        @click="openEditEvent"
      />

    </q-card-actions>

    <q-dialog v-model="invite" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-icon size="2em" name="sentiment_dissatisfied" color="purple"/>
          <span class="q-ml-sm">Deseja mesmo não participar do Evento?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat no-caps label="Vou pensar melhor..." color="grey" v-close-popup @click="isParticipate = true" />
          <q-btn flat no-caps label="Não quero mais!" color="negative" @click="cancelParticipate" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showDelete" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-icon size="2em" name="thumb_down" color="red"/>
          <span class="q-ml-sm">Deseja mesmo acabar com o Evento?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat no-caps label="Vou pensar melhor..." color="grey" v-close-popup @click="isParticipate = true" />
          <q-btn flat no-caps label="Sim, não quero mais!" color="red" @click="excludeEvent" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>
import { EventBus } from 'src/functions/event_bus.js'

export default {
  name: 'card-events',

  events: ['on-participate'],

  props: {
    title: {
      type: String
    },
    description: {
      type: String,
      default: ''
    },
    date: {
      type: String
    },
    data: {
      type: Object
    },
    isOnwer: {
      type: Boolean,
      default: false
    },
    isParticipateProp: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    descriptionClean: function () {
      return this.description.substr(0, 136) + '...'
    }
  },

  data () {
    return {
      isParticipate: this.data.isParticipating,
      invite: false,
      showDelete: false
    }
  },

  watch: {
    isParticipate: function (value) {
      if (!value) {
        this.invite = true
      }
    }
  },

  methods: {
    openDetailsEvent () {
      if (!this.isParticipate) {
        EventBus.$emit('on-participate-event', this.data)
      }
    },

    openEditEvent () {
      EventBus.$emit('on-edit-event', this.data)
    },

    openExcludeEvent () {
      this.showDelete = true
    },

    excludeEvent () {
      EventBus.$emit('on-delete-event', this.data)
    },

    openDetailsEventParticipate () {
      EventBus.$emit('on-participate-event', this.data)
    },

    cancelParticipate () {
      EventBus.$emit('on-leave-event', this.data)
    }
  }
}
</script>

<style lang="stylus">
.my-card
  border: none
  border-radius: 15px
  height: 216px

.my-card-participate
  cursor: pointer
</style>
