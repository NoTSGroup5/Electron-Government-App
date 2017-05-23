<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <h1>Organisaties</h1>
            </div>
            <div class="col-md-6 text-right">
                <button class="btn-default btn btn-match-h1">Maak Organisatie</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <OrganizationList></OrganizationList>
            </div>
        </div>
    </div>
</template>

<script>
  import OrganizationList from './OrganizationOverview/OrganizationList.vue'

  export default {
    name: 'organizationOverview',

    components: {
      OrganizationList
    }
  }
</script>

<style scoped>
    .btn-match-h1 {
        margin-top: 20px;
        margin-bottom: 10px;
    }
</style>