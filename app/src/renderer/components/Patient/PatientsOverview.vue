<template>
  <div>
    <div class="clearfix">
      <div class="pull-left">
        <h1>Patiënten</h1>
      </div>

      <div class="pull-right">
        <router-link class="btn btn-default pull-right btn-add" to="/patients/create">Patiënt toevoegen</router-link>
      </div>
    </div>

    <PatientsList></PatientsList>
  </div>
</template>

<script>
  import PatientsList from './PatientsOverview/PatientsList'
  export default {
    components: {
      PatientsList
    },
    name: 'patientsOverview'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
  .btn-add {
    margin-top: 20px;
  }
</style>
