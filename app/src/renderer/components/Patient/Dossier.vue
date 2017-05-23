<template>
    <div class="row">
    <div class="col-sm-9">
       <h2>Dossier {{name}} Kees </h2>
      
      <div class="row">
       <h4>Doktersbezoeken  </h4>
         <table class="table table-striped">
            <thead>
            <tr>
                <th>Locatie</th>
                <th>Onderwerp</th>
                <th>Datum</th>
                <th><span class="glyphicon glyphicon-plus pull-right" data-toggle="modal" data-target="#doktersbezoek"></span></th>

                <!-- Modal -->
                        <div id="doktersbezoek" class="modal fade" role="dialog">
                            <div class="modal-dialog">

                                <!-- Modal content-->
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Doktersbezoek toevoegen</h4>
                                    </div>
                                    <div class="modal-body">
                                       <BootstrapTextInput :type="'text'" :name="'Reden'" :value="'reden'"></BootstrapTextInput>
                                       <BootstrapTextInput :type="'text'" :name="'Behandelend arts'" :value="'Behandelend arts'"></BootstrapTextInput> 
                                       <BootstrapTextInput :type="'text'" :name="'Omschrijving bezoek'" :value="'Omschrijving bezoek'"></BootstrapTextInput> 
                                       <BootstrapTextInput :type="'text'" :name="'Ondernomen acties'" :value="'Ondernomen acties'"></BootstrapTextInput> 
                                    
                                       
                                    <Datepicker placeholder="Select Date"></Datepicker>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Toevoegen</button>
                                    </div>
                                </div>

                            </div>
                        </div>
            </tr>
            </thead>
            <tbody>
                <Organisation v-for="organization in organizations" v-bind="organization"></Organisation>
            </tbody>
         </table>
      </div>

       <div class="row" >
         <h4>Allergieen  </h4>

         <table class="table table-striped">
            <thead>
            <tr>
                <th>Allergie</th>
                <th>Bewerken</th>   
                <th><span class="glyphicon glyphicon-plus pull-right"></span></th>
            </tr>
            </thead>
            <tbody>
                <Organisation v-for="organization in organizations" v-bind="organization"></Organisation>
            </tbody>
         </table>
      </div>

      <div class="row" >
         <h4>Medicatie  </h4>

         <table class="table table-striped">
            <thead>
            <tr>
                <th>Medicijn</th>
                <th>Inname op moment</th> 
                <th><span class="glyphicon glyphicon-plus pull-right"></span></th>  
            </tr>
            </thead>
            <tbody>
                <Organisation v-for="organization in organizations" v-bind="organization"></Organisation>
            </tbody>
         </table>
      </div>

      <div class="row" >
         <h4>Behandelingen  </h4>

         <table class="table table-striped">
            <thead>
            <tr>
                <th>Behandeling</th>
                <th>Datum van -tot</th> 
                <th>Bewerken</th>   
                <th>Logs</th>   
                <th><span class="glyphicon glyphicon-plus pull-right" ></span></th>  
            </tr>
            </thead>
            <tbody>
                <Organisation v-for="organization in organizations" v-bind="organization"></Organisation>
            </tbody>
         </table>
      </div>


      
      
    </div>
  </div>
</div>

</template>

 

<script>
  import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput'
  import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput'
  import Datepicker from 'vuejs-datepicker'

var state = {
    date: new Date(2016, 9, 16)
}

  let organizationOptions = []

export default {
    components: {
      Datepicker,
      BootstrapTextInput,
      BootstrapSelectInput
    },

    props: ['name']
  
  }
</script>
