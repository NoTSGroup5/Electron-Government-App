<template>
  <tr>
   <td>{{ description }} DESCRIPTION </td>
   <td>{{ date }} DATE</td>
    <td><span class="glyphicon glyphicon-pencil pull-right" v-on:click="EditTreatment"></span></td>
  </tr>
</template>

<script>
  export default {
    props: [
      "description",
      "date",
    ],
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
