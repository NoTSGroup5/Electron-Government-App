<template>
  <div>
    <h1>Patienten</h1>
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
</style>
