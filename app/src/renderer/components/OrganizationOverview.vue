<template>
    <div>
        <h1>Organisaties</h1>
        <OrganizationList></OrganizationList>
    </div>
</template>

<script>
  import OrganizationList from './OrganizationOverview/OrganizationList.vue'
  export default {
    components: {
      OrganizationList
    },
    name: 'organizationOverview'
  }
</script>