<template>
  <div>

    <table class="table table-striped"  v-if="patients.length">
      <thead>
        <tr>
          <td>BSN</td>
          <td>Naam</td>
          <td>Bewerken</td>
          <td>Inzien</td>
        </tr>
      </thead>
      <tbody>
        <patient v-for="patient in patients" v-bind="patient"></patient>
      </tbody>
    </table>

    <div v-if="patients.length == 0">
              something went wrong with getting patients from the database
    </div>

  </div>
</template>

<script>
  var patients = []

  import patient from './Patient'

  import {ApiService} from '../../../../services/ApiService'
  var api = new ApiService()

  export default {
    components: {
      patient
    },
    data () {
      return {
        patients: patients
      }
    },

    beforeCreate: () => {
      if(patients && patients.length) return
      api.getPatients()
         .then(res => {
           //we push instead of set the variable, otherwise we'll overwrite the observable and never get data
           patients.push({name: 'henk', bsn: 987654321})
           patients.push({name: 'harry', bsn: 123456789})
         })
    },
    methods: {
      test: (event) => {
        debugger
      }
    },
    name: 'patientsList'
  }
</script>

<style scoped>
  
</style>
