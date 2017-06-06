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
      props: {
          bsn: {
              type: String,
              required: true
          },
          firstName: {
              type: String,
              required: true
          },
          lastName: {
              type: String,
              required: true,
          },
          namePrefix: {
              type: String,
              required: true
          }
      }
  }
</script>

<style scoped>
</style>
