<template>
  <tr>
   <td>{{ treatment.description }}</td>
   <td>{{ treatment.startDate + (treatment.endDate? " - "+ treatment.endDate : "")}}</td>
   <td><span class="glyphicon glyphicon-pencil pull-right" v-on:click="EditTreatment"></span></td>
   <td>view logs</td>
   <td>add log</td>
  </tr>
</template>

<script>
  export default {
    props: {
        treatment: {
            description: String,
            startDate: String,
            endDate: String
        }
    },
    methods: {
            EditTreatment() {
              debugger
              this.$emit('remove');
            }
        }
  }
</script>

<style scoped>
</style>
