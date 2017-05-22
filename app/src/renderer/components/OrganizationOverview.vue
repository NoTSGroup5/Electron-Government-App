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
  import OrganizationList from './OrganizationOverview/OrganizationList.vue'
  export default {
    components: {
      OrganizationList
    },
    name: 'organizationOverview'
  }
</script>