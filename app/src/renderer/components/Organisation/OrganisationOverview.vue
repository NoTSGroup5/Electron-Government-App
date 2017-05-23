<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <h1>Organisaties</h1>
            </div>
            <div class="col-md-6 text-right">
                <router-link class="btn btn-default btn-match-h1" to="/organisation/create">Maak Organisatie</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <organisationList></organisationList>
            </div>
        </div>
    </div>
</template>

<script>
  import organisationList from './OrganisationOverview/OrganisationList.vue'

  export default {
    name: 'organisationOverview',

    components: {
      organisationList
    }
  }
</script>

<style scoped>
    .btn-match-h1 {
        margin-top: 20px;
        margin-bottom: 10px;
    }
</style>
