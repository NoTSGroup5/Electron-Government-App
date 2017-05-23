<template>
  <tr>
    <td>{{bsn}}</td>
    <td>{{name}}</td>
    <td><router-link class="btn btn-default" to="/patientsInfo"> Bewerk {{name}}</router-link></td>
    <td><router-link class="btn btn-default" to="/patientDossier">Dossier van {{name}}</router-link></td>
  </tr>
</template>

<script>
  export default {
    props: ['name', 'bsn']
  }
</script>

<style scoped>
</style>
