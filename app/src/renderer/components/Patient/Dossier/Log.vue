<template>
  <tr>
   <td>{{log.date | formatDateWithTime }}</td>
   <td>{{log.description}}</td>
  </tr>
</template>

<script>
  export default {
    props: {
      log: {
        id: String,
        date: String,
        description: String
      }
    }
  }
</script>

<style scoped>
</style>
