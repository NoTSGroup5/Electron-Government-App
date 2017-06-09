<template>
  <tr>
      <td>{{visit.organisation}}</td>
      <td>{{ visit.date | formatDate }} </td>
      <td>{{visit.description}}</td>
      <td><span class="glyphicon glyphicon-remove pull-right" v-on:click="removeVisit"></span></td>
  </tr>
</template>

<script>
  export default {
    props: [
      'visit'
    ],
    methods: {
      removeVisit(){
          this.$emit('removeVisit', this.visit)
      }
    }
  }
</script>

<style scoped>
</style>
