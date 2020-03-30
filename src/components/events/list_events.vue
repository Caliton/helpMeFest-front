<template>
  <div class="q-pa-md">
    <q-table
      :title="title || 'Eventos'"
      style="min-height: 80vmin"
      row-key="name"
      :data="data"
      :columns="columns"
      :filter="filter"
      hide-header
      :loading="loading"
      grid
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div
          class="area-card"
        >
          <card-events
            :title="props.row.name"
            :description="props.row.description"
            :date="props.row.dateInitial"
            :data="props.row"
            :isOnwer="isOnwer"
          />
        </div>
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span>
            Uhm que pena não temos eventos... {{ message }}
          </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>

      <div slot="bottom" slot-scope="props" class="flex flex-center" style="width: 100%">
        <div class="q-pa-lg flex flex-center">
          <q-pagination
          v-model="props.pagination.page"
          :max="props.pagesNumber"
          :direction-links="true"
          >
          </q-pagination>
        </div>
      </div>

    </q-table>
  </div>
</template>
<script>
import CardEvents from './card_events.vue'

export default {
  name: 'list-events',

  components: {
    'card-events': CardEvents
  },

  props: {
    title: {
      type: String
    },
    endpoint: {
      type: String
    },
    isOnwer: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      filter: '',
      loading: false,
      columns: [
        {
          name: 'title',
          required: true,
          label: 'Titulo',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'description', align: 'center', label: 'description', field: 'description', sortable: true }
      ],
      data: [
        // {
        //   // name: 'Festa de 21 anos Landix',
        //   // description: 'Festa que vai acontecer em 2021, uma comemoração estonteante, que vai ser muito legal a presença de quem é colaborador e seus familiares',
        //   // dateInitial: '29-03-2020 12:30',
        //   // dateEnd: '29-03-2020 17:30',
        //   // place: 'Rua Lapa do Lobo, 350',
        //   // eventOrganizerId: 0
        // }
      ]
    }
  },

  mounted () {
    this.getEvents()
  },

  methods: {
    async getEvents () {
      try {
        this.loading = true
        const result = await this.$axios.get(this.endpoint, this.dataEndpoint)
        console.log('Olha isso: ', result)
        this.data = result.data
        this.loading = false
      } catch (e) {
        this.loading = false
        console.log(e)
      }
    },

    refresh () {
      this.getEvents()
    }
  }
}
</script>

<style lang="stylus">
.area-card
  margin: 2rem
  border-radius: 15px
  width: 20%
  height 216px
  transition .3s
  box-shadow: 0 1px 2px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);

.area-card:hover
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  transform: translate(2px, -2px)

@media (max-width: 1440px)
  .area-card
    width: 30%;

</style>
