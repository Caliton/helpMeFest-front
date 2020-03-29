<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="">
        <div class="text-overline"><q-icon size="sm" name="event" /> {{date | moment("DD-MM-YYYY")}}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ title || 'Aqui fica o Título'}}</div>
        <div class="text-caption text-grey">
          {{description || 'Aqui fica à descrição'}}
        </div>
      </q-card-section>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        no-caps
        color="teal"
        rounded
        label="Quero Participar"
        @click="openDetailsEvent"
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
      type: String
    },
    date: {
      type: String
    },
    data: {
      type: Object
    }
  },

  methods: {
    openDetailsEvent () {
      console.log('Oi')

      this.$root.$emit('on-participate', this.data)
    }
  }
}
</script>

<style lang="stylus">
.my-card
  border: none
  border-radius: 15px
</style>
