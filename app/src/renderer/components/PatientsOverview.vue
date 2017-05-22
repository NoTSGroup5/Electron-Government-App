<template>
  <div>
    <links></links>
    <h1>Patienten</h1>
    <PatientsList></PatientsList>
  </div>
</template>

<script>
  import Links from './Shared/Links'
  import PatientsList from './PatientsOverview/PatientsList'
  export default {
    components: {
      Links,
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
