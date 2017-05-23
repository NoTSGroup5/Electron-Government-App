<template>
    <div class="row">
    <div class="col-sm-9">
       <h2>Dossier {{name}} Kees </h2>
        <div class="row">
      <div class="row">
         <h4>Doktersbezoeken  </h4>
      </div>

       <div class="row" >
         <h4>Doktersbezoeken  </h4>
      </div>


      
      
    </div>
  </div>
</div>

</template>

<script>
  import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput'
  import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput'

  let organizationOptions = [];

  export default {
    components: {
      BootstrapTextInput,
      BootstrapSelectInput
    },

    props: ['name'],
   
  }
</script>