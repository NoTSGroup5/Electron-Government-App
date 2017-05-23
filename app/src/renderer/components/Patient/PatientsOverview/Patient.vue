<template>
  <tr>
    <td>{{bsn}}</td>
    <td>{{name}}</td>
    <td> Edit {{name}}</td>
    <td><router-link to="/patientsInfo"> Edit {{name}}</router-link></td>
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
