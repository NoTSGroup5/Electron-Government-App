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
  import HttpPatientsService from '../../../../services/httpPatientsService'
  
  export default {
    components: {
      patient
    },
    data () {
      return {
        patients: patients
      }
    },
    beforeCreate: function () {
      let httpPatientsService = new HttpPatientsService()
  
      httpPatientsService.getPatients()
        .then(res => {
          if (!res.length > 0) return
          res.forEach(patient => {
            patients.push(patient)
          })
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
