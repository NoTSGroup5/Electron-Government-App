<template>
  <div>
    <div class="clearfix">
      <div class="pull-left">
        <h1>Zorgprofessionals</h1>
      </div>

      <div class="pull-right">
        <router-link class="btn btn-default pull-right btn-add" to="/health-care-professional/create">Zorgprofessional toevoegen</router-link>
      </div>
    </div>

    <List></List>
  </div>
</template>

<script>
  import List from './Overview/HealthCareProfessionalList.vue'
  export default {
    components: {
        List
    },
    name: 'healthCareProfessionalsOverview'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
  .btn-add {
    margin-top: 20px;
  }
</style>
