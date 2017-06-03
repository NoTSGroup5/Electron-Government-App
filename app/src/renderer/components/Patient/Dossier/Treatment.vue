<template>
  <tr>
   <td>{{ treatment.description }}</td>
   <td>{{ treatment.startDate | formatDate }}  {{treatment.endDate? " - " : "" }}  {{treatment.endDate | formatDate }}</td>
   <td><span class="glyphicon glyphicon-pencil pull-right" v-on:click="EditTreatment"></span></td>
   <td><a v-on:click="showLogs">view logs</a></td>
   <td>add log</td>
  </tr>
</template>

<script>


  export default {
    props: {
        treatment: {
            id: String,
            description: String,
            startDate: String,
            endDate: String
        }
    },
    methods: {
            EditTreatment() {
              this.$emit('edit', this.treatment);
            },
            showLogs(){
              this.$emit('showLogs', this.treatment)
            }
        }
  }
</script>

<style scoped>
</style>
