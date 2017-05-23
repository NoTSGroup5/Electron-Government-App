<template>
  <tr>
    <td>{{bsn}}</td>
    <td>{{name}}</td>
    <td><router-link class="btn btn-default" to="/patientsInfo"> Bewerk {{name}}</router-link></td>
    <td>Dossier van {{name}}</td>
  </tr>
</template>

<script>
  export default {
    props: ['name', 'bsn']
  }
</script>

<style scoped>
</style>
