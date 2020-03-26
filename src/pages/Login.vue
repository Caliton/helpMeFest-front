<template>
  <div class="login-page">
    <!-- <div class="bg-primary justify-center row large-gutter sm-column">
      <img alt="logo" src="../statics/img_general/landix_negativa_hor_600x130.png" class="ldx-img" />
    </div> -->

    <div class="login-page-2">
      <div class="login-page-3">
        <div class="login-page-4">
          <div class="bg-text">
            <div class="login-logo">
              <span href="starter2.html">HelpMe<b>Fest</b></span>
            </div>
            <!-- <img alt="logo" src="../statics/img_general/landix_negativa_hor_600x130.png" style="width: 100px"/> -->
          </div>
          <q-form @submit="onSubmit" class="login-form">
            <q-input
              suffix="@landix.com.br"
              color="primary"
              label="Email"
              v-model="username"
              lazy-rules
              :rules="[ val => val && val.length > 0 || $t('requiredField')]"
              v-on:keyup.enter="onSubmit"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              :label="$t('password')"
              lazy-rules
              :rules="[ val => val && val.length > 0 || $t('requiredField')]"
              v-on:keyup.enter="onSubmit"
            >
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>

              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <div>
              <q-btn
                unelevated
                rounded
                class="login-btn"
                :loading="loading"
                label="Entrar"
                type="submit"
                color="primary"
              >
                <template v-slot:loading>
                  <q-spinner-bars/>
                </template>
              </q-btn>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: null,
      password: null,
      isPwd: true,
      logging: false,
      loading: false
    }
  },

  methods: {
    // submit for the login form
    async onSubmit () {
      this.loading = true
      var login = {
        username: `${this.username}@landix.com.br`,
        password: this.password
      }
      console.log('01')

      try {
        var response = await this.$axios.post('/landix/login/', login)

        this.$store.commit('setUser', response.data)

        console.log('02')

        this.$router.push('/dashboards')
        console.log('03')

        this.logging = true
        this.loading = false

        this.$q.notify({
          color: 'positive',
          type: 'positive',
          message: 'Login realizado com Sucesso!'
        })
      } catch (error) {
        this.logging = false
        this.loading = false
      }
    },
    showNotify (notification) {
      this.$q.notify({
        color: notification.color,
        textColor: 'white',
        icon: notification.icon,
        message: this.$t(notification.message)
      })
    }
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Montserrat:700|Poppins:400,500,700&display=swap');

.login-page
  font-family: 'Poppins', sans-serif;
  background-color: #eee
  letter-spacing: unset
  color: #3c4858

.login-page-2
  height: auto
  min-height: 100vh

.login-page-3
  // background-image: url('https://picsum.photos/1920/1080?random')
  background: #9053c7;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
  background: linear-gradient(-135deg, #c850c0, #4158d0);
  width 100%
  height: 100%
  min-height: 100vh
  background-position: top
  background-size: cover
  margin: 0
  padding: 0
  border: 0
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-align: center
  -ms-flex-align: center
  align-items: center

// .login-page-3::before
//   position: absolute
//   z-index: 1
//   width: 100%
//   height: 100%
//   display: block
//   left: 0
//   top: 0
//   content: ""
//   background: rgba(0,0,0,.6)

.login-page-4
  max-width: 500px
  border-radius 6px
  min-width: 250px
  width: 350px
  margin: 0 auto
  -webkit-transform: translateZ(0)
  transform: translateZ(0)
  background-color: var(--md-theme-default-background,#fff)
  z-index 9999 !important
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-orient: vertical
  -webkit-box-direction: normal
  -ms-flex-direction: column
  flex-direction: column
  position: relative
  overflow: unset
  font-size: .875rem
  -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.14)
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14)
  color: #333

.login-form
  padding: 15px 20px
  line-height: 1.75em
  position: relative
  font-size: 14px

.bg-text
  padding: 15px
  z-index: 2
  z-starter: 2
  width: 100%

.login-logo
  text-align center
  font-size 1.5rem
</style>
