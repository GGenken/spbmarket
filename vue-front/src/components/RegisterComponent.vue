<template>
  <b-card style="max-width: 40rem;" title="Регистрация" class="mx-auto mt-5 p-3">
      <b-form>
        <b-form-group label="имя пользователя">
          <b-form-input placeholder="5opka" v-model="form.username"></b-form-input>
        </b-form-group>
        <b-form-group label="пароль">
          <b-form-input type="password" placeholder="TiZabanen251" v-model="form.password"></b-form-input>
        </b-form-group>
      </b-form>
    <b-button type="submit" variant="primary" @click="handleSubmit">Зарегистрироваться</b-button>
  </b-card>
</template>

<script>
export default {
  name: "RegisterComponent",

  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  inject: ['$axios'],
  methods: {
    handleSubmit: function () {
      this.$axios.post('/api/user/register', null, {
        params: {
          username: this.form.username,
          password: this.form.username
        }
      }).then(function (response) {
        console.log(response.code)
      })
    }
  }
}
</script>
