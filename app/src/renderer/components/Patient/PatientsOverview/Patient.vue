<template>
  <tr>
    <td>{{bsn}}</td>
    <td>{{firstName}} {{lastName}}</td>
    <td><router-link class="btn btn-default" :to="{ name: 'patientinfo', params: { bsn: 123 }}"> Bewerk {{firstName}} {{lastName}}</router-link></td>
    <td><router-link class="btn btn-default" to="/">Dossier van {{firstName}} {{lastName}}</router-link></td>
  </tr>
</template>

<script>
  export default {
    props: [
      'bsn',
      'firstName',
      'namePrefix',
      'lastName',
      'email',
      'telephoneNumber',
      'birthday',
      'gender',
      'city',
      'zipCode',
      'street',
      'houseNumber',
      'houseNumberExtra'
    ]
  }
</script>

<style scoped>
</style>
