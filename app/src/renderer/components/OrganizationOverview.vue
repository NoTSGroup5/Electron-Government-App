<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <OrganizationList></OrganizationList>
            </div>
        </div>
    </div>
</template>

<script>
  import Links from './Shared/Links'
  import OrganizationList from './OrganizationOverview/OrganizationList.vue'
  export default {
    components: {
      Links,
      OrganizationList
    },
    name: 'organizationOverview'
  }
</script>