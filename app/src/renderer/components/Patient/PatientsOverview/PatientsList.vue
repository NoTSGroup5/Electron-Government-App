<template>
  <div>

        <table class="table table-striped" v-if="patients.length">
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
  let patients = []

  import patient from './Patient'
  import HttpOrganisationTypeService from '../../../../services/httpOrganisationTypeService'
  import {ApiService} from '../../../../services/ApiService'

  let api = new ApiService()

  export default {
    components: {
      patient
    },
    data () {
      return {
        patients: []
      }
    },
    beforeCreate: function () {
      let httpOrganisationTypeService = new HttpOrganisationTypeService();

    beforeCreate: () => {
      if (patients && patients.length) return
      api.getPatients()
         .then(res => {
           // we push instead of set the variable, otherwise we'll overwrite the observable and never get data
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
