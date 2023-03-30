<template>
  <v-card width="320">
    <v-form @submit.prevent="authUser">
      <v-text-field
        v-model="authData.email"
        :error-messages="v$.email.$dirty ? v$.email.$silentErrors.map(e => e.$message) : false"
        label="Email"
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      ></v-text-field>
      <v-text-field
        v-model="authData.password"
        :error-messages="v$.password.$dirty ? v$.password.$silentErrors.map(e => e.$message) : false"
        label="Password"
        @input="v$.password.$touch"
        @blur="v$.password.$touch"
      ></v-text-field>
      <v-btn type="submit">
        Sign in
      </v-btn>
    </v-form>
  </v-card>
</template>

<style scoped lang="scss">
</style>

<script>
import { reactive } from "vue";
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  setup() {
    const router = useRouter()

    const authData = reactive({
      email: "",
      password: "",
    })
    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
    const v$ = useVuelidate(rules, authData)
    
    function authUser() {
      v$.value.$touch()
      console.log(v$.value.$error)
      if (!v$.value.$error) {
        router.push({ name: "game" })
      }
    }
    return {
      authData,
      v$,
      authUser
    }
  },
}
</script>
