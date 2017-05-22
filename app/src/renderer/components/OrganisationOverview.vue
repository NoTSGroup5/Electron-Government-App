<template>
    <div>
        <links></links>
        <div class="row">
            <div class="col-md-12">
                <OrganisationList></OrganisationList>
            </div>
        </div>
    </div>
</template>

<script>
  import Links from './Shared/Links'
  import OrganisationList from './OrganisationOverview/OrganisationList.vue'
  export default {
    components: {
      Links,
      OrganisationList
    },
    name: 'patientsOverview'
  }
</script>

<style scoped>
    img {
        margin-top: -25px;
        width: 450px;
    }
</style>