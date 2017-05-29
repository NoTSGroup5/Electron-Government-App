<template>
    <div class="row">
    <div class="col-sm-9" v-if="patient.firstName != null">
       <h2>Dossier {{patient.firstName}} {{patient.lastName}}</h2>
      
      <div class="row">
       <h4>Doktersbezoeken</h4>
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
                <Visit v-for="Visit in patient.Visits" v-bind="Visit"></Visit>
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
                <Allergy v-for="Allergy in patient.Allergies" v-bind="Allergy"></Allergy>
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
                <Medicine v-for="Medicine in patient.Medication" v-bind="Medicine"></Medicine>
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
                <Treatment v-for="Treatment in patient.Treatments" v-bind="Treatment"></Treatment>
            </tbody>
         </table>
      </div>


      
      
    </div>
  </div>
</div>

</template>

 

<script>
  import Vue from 'vue'
  import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput'
  import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput'

  import HttpPatientsService from '../../../services/httpPatientsService'

  import Treatment from './Dossier/Treatment'
  import Allergy from './Dossier/Allergy'
  import Visit from './Dossier/Visit'
  import Medicine from './Dossier/Medicine'

var state = {
    date: new Date(2016, 9, 16)
}

  var patient = {};

export default {
    components: {
      BootstrapTextInput,
      BootstrapSelectInput,
      Treatment,
      Allergy,
      Visit,
      Medicine
    },
    data () {
      return {
        patient: patient
      }
    },
    beforeCreate: function () {
      let httpPatientsService = new HttpPatientsService()
      var bsn = this.$route.params.bsn

      httpPatientsService.getPatientbyBsn(bsn)
        .then(function(res){
            for(var key in res)
                this.$set(this.patient, key, res[key])
                //mocked for now
                this.$set(this.patient, "Allergies", {allergy: "pollen"})
                
        }.bind(this))
    },
    destroyed: function(){
       patient = [];
    }
  
  }
</script>
