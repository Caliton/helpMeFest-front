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
        <div class="text-caption text-grey" style="font-size: 1rem">
          {{event.description || 'Aqui fica à descrição'}}
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-overline"><q-icon size="sm" name="event" /> {{date | moment("DD-MM-YYYY")}}</div>
        <div class="text-h5 q-ma-lg">Deseja participar deste Evento?</div>
        <div class="check" style="transform: scale(2); margin-left: 1.5rem">
          <input id="check" type="checkbox">
          <label for="check"></label>
        </div>
      </q-card-section>

      <q-card-section>
      </q-card-section>
      <q-card-actions style="margin: 10px;" class="text-teal container-card absolute-bottom-right">
        <q-btn size="sm" rounded color="secondary" no-caps label="Concluir" @click="confirm" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
export default {
  name: 'reception-login',

  events: ['on-close'],

  created () {
    this.$root.$on('on-participate', (event) => {
      this.onShow = true
      this.event = event
    })
  },

  beforeDestroy () {
    this.$root.$off('on-participate')
  },

  data () {
    return {
      onShow: false,
      event: {}
    }
  },

  methods: {
    onShowModal () {
      this.onShow = true
    },

    onHideModal () {
      this.$emit('on-close')
      this.onShow = false
    },

    async confirm () {
      this.loading = true

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
.cachorro
  .check {
    position: relative;
    background: linear-gradient(-135deg, #4158d0, #c850c0);
    line-height: 0;
    perspective: 400px;
  }

  .check input[type="checkbox"],
  .check label,
  .check label::before,
  .check label::after,
  .check {
    appearance: none;
    display: inline-block;
    border-radius: 1rem;
    border: 0;
    transition: .35s ease-in-out;
    box-sizing: border-box;
    cursor: pointer;
  }

  .check label {
    width: 2.2rem;
    height: 1rem;
    background: #d7d7d7;
    overflow: hidden;
  }

  .check input[type="checkbox"] {
    position: absolute;
    z-index: 1;
    width: .8rem;
    height: .8rem;
    top: .1rem;
    left: .1rem;
    background: linear-gradient(45deg, #dedede, #ffffff);
    box-shadow: 0 6px 7px rgba(0,0,0,0.3);
    outline: none;
  }

  .check input[type="checkbox"]:checked {
    left: 1.3rem;
  }

  .check input[type="checkbox"]:checked + label {
    background: transparent;
  }

  .check label::before,
  .check label::after {
    content: "· ·";
    position: absolute;
    overflow: hidden;
    left: .15rem;
    top: .5rem;
    height: 1rem;
    letter-spacing: -.04rem;
    color: #9b9b9b;
    font-family: "Times New Roman", serif;
    z-index: 2;
    font-size: .6rem;
    border-radius: 0;
    transform-origin: 0 0 -.5rem;
    backface-visibility: hidden;
  }

  .check label::after {
    content: "●";
    top: .65rem;
    left: .3rem;
    height: .1rem;
    width: .35rem;
    font-size: .2rem;
    transform-origin: 0 0 -.4rem;
  }

  .check input[type="checkbox"]:checked + label::before,
  .check input[type="checkbox"]:checked + label::after {
    left: 1.55rem;
    top: .4rem;
    line-height: .1rem;
    transform: rotateY(360deg);
  }

  .check input[type="checkbox"]:checked + label::after {
    height: .16rem;
    top: .55rem;
    left: 1.6rem;
    font-size: .6rem;
    line-height: 0;
  }
</style>
