<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section>
        <div class="text-overline"><q-icon size="sm" name="event" /> {{date | moment("DD-MM-YYYY, h:mm:ss a")}}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ title || 'Aqui fica o Título'}}</div>
        <div class="text-caption text-grey">
           &nbsp; &nbsp; &nbsp;{{descriptionClean || 'Aqui fica à descrição'}}
        </div>
      </q-card-section>
    </q-card-section>

    <q-card-actions v-if="!isOnwer" align="right" style="padding: 1rem; padding-right: 1.5rem" class="absolute-bottom-right">
      <div class="check" style="transform: scale(1.8);" @click="openDetailsEvent">
        <input id="check" type="checkbox" v-model="isParticipate">
        <label for="check"></label>
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
        label="Editar"
        no-caps
        rounded
        color="purple"
        @click="openEditEvent"
      />
    </q-card-actions>

  </q-card>
</template>

<script>
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
      isParticipate: this.data.isParticipating
    }
  },

  methods: {
    openDetailsEvent () {
      console.log('Olha isso CACHORRO: ', this.data)

      if (!this.isParticipate) {
        this.$root.$emit('on-participate-event', this.data)
      }
    },

    openEditEvent () {
      this.$root.$emit('on-edit-event', this.data)
    }
  }
}
</script>

<style lang="stylus">
.my-card
  border: none
  border-radius: 15px
  height: 216px
</style>
