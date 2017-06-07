<template>
  <tr>
   <td>{{ treatment.description }}</td>
   <td>{{ treatment.startDate | formatDate }}  {{treatment.endDate? " - " : "" }}  {{treatment.endDate | formatDate }}</td>
   <td><span class="glyphicon glyphicon-pencil " v-on:click="EditTreatment"></span></td>
   <td><a v-on:click="showLogs">view logs</a></td>
   <td><a v-on:click="addLog">add log</a></td>
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
            },
            addLog(){
              this.$emit('addLog', this.treatment)
            }
        }
  }
</script>

<style scoped>
</style>
