<template>
  <tr>
    <td>{{bsn}}</td>
    <td>{{firstName}} {{lastName}}</td>
    <td><router-link class="btn btn-default" :to="{ name: 'patientInfo', params: { bsn: bsn }}"> Bewerk</router-link></td>
    <td><router-link class="btn btn-default" :to="{ name: 'patientDossier', params: {bsn: bsn}}">Dossier</router-link></td>
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
