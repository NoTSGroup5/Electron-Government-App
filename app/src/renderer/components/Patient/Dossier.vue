<template>
    <div>
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
                            <th><span class="glyphicon glyphicon-plus pull-right" data-toggle="modal" data-target="#doctorsVisit"></span></th>
                        </tr>
                        </thead>
                        <tbody>
                        <Visit v-for="visit in medicalFile.visits" :visit="visit"></Visit>
                        </tbody>
                    </table>
                </div>

                <div class="row">
                    <h4>Allergieen  </h4>

                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Allergie</th>
                            <th><span class="glyphicon glyphicon-plus pull-right" data-toggle="modal" data-target="#addAllergy"></span></th>
                        </tr>
                        </thead>
                        <tbody>
                        <Allergy v-for="allergy in medicalFile.allergies" :allergy="allergy"
                                 @remove="removeAllergy"></Allergy>
                        </tbody>
                    </table>
                </div>

                <div class="row">
                    <h4>Medicatie  </h4>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Medicijn</th>
                            <th>Inname op moment</th>
                            <th><span class="glyphicon glyphicon-plus pull-right"  type="button" data-toggle="modal" data-target="#addMedicine"></span></th>
                        </tr>
                        </thead>
                        <tbody>
                        <Medicine v-for="medicine in medicalFile.medication" :medicine="medicine"></Medicine>
                        </tbody>
                    </table>
                </div>

                <div class="row">
                    <h4>Behandelingen  </h4>

                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Behandeling</th>
                            <th>Datum vn -tot</th>
                            <th>Bewerken</th>
                            <th>Logs</th>
                            <th><span class="glyphicon glyphicon-plus pull-right" data-toggle="modal" data-target="#AddTreatment"></span></th>
                        </tr>
                        </thead>
                        <tbody>
                        <Treatment v-for="treatment in medicalFile.treatments" :treatment="treatment"
                                    @edit="editTreatment" @showLogs="showLogs" @addLog="addLog"></Treatment>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9 text-right">
                <button class="btn btn-success" v-on:click="save">Opslaan</button>
            </div>
        </div>


        <!-- Add medicine modal -->
        <div id="addMedicine" class="modal fade" role="dialog">
            <AddMedicine :bsn="patient.bsn" ></AddMedicine>
        </div>

        <!-- Doctor visit modal -->
        <div id="doctorsVisit" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Doktersbezoek toevoegen</h4>
                    </div>
                    <div class="modal-body">
                        <BootstrapTextInput :type="'text'" :name="'Reden'" :value="'reden'"></BootstrapTextInput>
                        <BootstrapTextInput :type="'text'" :name="'Behandelend arts'"
                                            :value="'Behandelend arts'"></BootstrapTextInput>
                        <BootstrapTextInput :type="'text'" :name="'Omschrijving bezoek'"
                                            :value="'Omschrijving bezoek'"></BootstrapTextInput>
                        <BootstrapTextInput :type="'text'" :name="'Ondernomen acties'"
                                            :value="'Ondernomen acties'"></BootstrapTextInput>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">
                            Toevoegen
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Allergy modal -->
        <div id="addAllergy" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Allergie toevoegen</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row">
                            <label for="allergy" class="col-sm-4 col-form-label" aria-describedby="allergy">Allergie</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="allergy" placeholder="Allergie" v-model="allergyValue">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="addAllergy">Toevoegen</button>
                    </div>
                </div>
            </div>
        </div>


                <!-- Treatment modal -->
        <div id="AddTreatment" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Behandelingen toevoegen</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row">
                            <label for="reason" class="col-sm-4 col-form-label" aria-describedby="reason">Allergie</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="reason" placeholder="beschrijving" v-model="TreatmentInfo.description">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="startDate" class="col-sm-4 col-form-label" aria-describedby="startDate">Startdatum</label>
                            <div class="col-sm-8">
                                <input type="date" class="form-control" id="startDate" v-model="TreatmentInfo.startDate">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="endDate" class="col-sm-4 col-form-label" aria-describedby="endDate">Einddatum</label>
                            <div class="col-sm-8">
                                <input type="date" class="form-control" id="endDate" v-model="TreatmentInfo.endDate">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" v-on:click="addTreatment" data-dismiss="modal">Toevoegen
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="ShowLogs" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">logs van {{ActiveTreatment.description}}</h4>
                        <a v-on:click="addLog">Log toevoegen</a>
                    </div>
                    <div class="modal-body">
                        <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Datum en tijd</th>
                            <th>beschrijving</th>
                        </tr>
                        </thead>
                        <tbody>
                        <Log v-for="log in ActiveTreatment.logs" :log="log"></Log>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
    import Vue from 'vue'

    import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput';
    import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput';
    import AddMedicine from '../Medication/AddMedication'

    import HttpPatientsService from '../../../services/httpPatientsService';
    import HttpMedicalFileService from '../../../services/httpMedicalFileService';

    import Treatment from './Dossier/Treatment';
    import Allergy from './Dossier/Allergy';
    import Visit from './Dossier/Visit';
    import Medicine from './Dossier/Medicine';
    import Log from './Dossier/Log'

    import Uuid from 'uuid/v1';

    export default {
        components: {
            BootstrapTextInput,
            BootstrapSelectInput,
            Treatment,
            Allergy,
            Visit,
            Medicine,
            AddMedicine,
            Log
        },

        data () {
            return {
                patient: {},
                medicalFile: {},
                allergyValue: "",
                TreatmentInfo: {
                    description : "",
                    startDate: Date.now(),
                    endDate : ""
                },
                ActiveTreatment: {
                    description: "",
                    logs: []
                }
            }
        },

        created: function () {
            this.patient.bsn = this.$route.params.bsn;

            HttpPatientsService.getPatientbyBsn(this.patient.bsn).then((patient) => {
                this.patient = patient;
            });

            HttpMedicalFileService.getMedicalFile(this.patient.bsn).then(medicalFile => {
                    this.medicalFile = medicalFile[0];
            });
        },

        methods: {
            removeAllergy(allergy) {
                this.medicalFile.allergies = this.medicalFile.allergies.filter(function (item) {
                    return item !== allergy;
                });
            },

            save() {
                debugger
                HttpMedicalFileService.saveMedicalFile(this.medicalFile);

                this.$router.push({name: 'patientsOverview'})
            },

            addAllergy() {
                if(this.allergyValue !== "") {
                    this.medicalFile.allergies.unshift(this.allergyValue);
                    this.allergyValue = "";
                }
            },

            addTreatment(){
                // if it already has an id, it's an edit!
                if(this.TreatmentInfo.id){
                    var found = false;
                    this.medicalFile.treatments.forEach(function(treatment, index){
                        if(found) return
                        if(treatment.id === this.TreatmentInfo.id){
                            // and here we have to update the new values
                            // we can't overwrite the item, otherwise the observer would be gone :')
                            let item = this.medicalFile.treatments[index]; 
                            let info = this.TreatmentInfo;
                            item.description = info.description;
                            item.startDate = info.startDate;
                            item.endDate = info.endDate;
                            
                            // for some reason, the cleartreatmentinfo below doesn't work when we're done here
                            // we might want to look into this...
                            info.description = "";
                            info.endDate = "";

                            found = true;
                        };
                    }.bind(this));
                }
                else if(this.TreatmentInfo.startDate !== "" && this.TreatmentInfo.description !== "") {
                    this.medicalFile.treatments.unshift({
                        id: Uuid(),
                        description: this.TreatmentInfo.description,
                        startDate: this.TreatmentInfo.startDate,
                        endDate: this.TreatmentInfo.endDate,
                        logs: []
                    });
                }
                this.TreatmentInfo;
                //when we're done, clean up our mess
                this.clearTreatmentInfo();
            },

            editTreatment(treatment){
                // to prevent the databinding
                this.TreatmentInfo = JSON.parse(JSON.stringify(treatment));
                $("#AddTreatment").modal();
            },

            addLogModal(){
                debugger
            },

            addLog(){
                this.ActiveTreatment.logs.unshift({
                    description:"description",
                    id: Uuid(),
                    date: Date.now()
                });
            },

            showLogs(treatment){
                this.ActiveTreatment.description = treatment.description;
                this.ActiveTreatment.logs = treatment.logs;
                $("#ShowLogs").modal();
            },

            clearTreatmentInfo(){
                let ti = this.TreatmentInfo;
                let now = ti.startDate;
                this.clearObject(ti)
                ti.startDate = now; 
            },


            // clear the values from the object, except the default ones 
            clearObject(object){
                Object.keys(object).forEach(function(key) { delete object[key]; });
            }
        }
    }
</script>


