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
                            <th>Datum vn -tot</th>
                            <th>Beschrijving</th>
                            <th><span class="glyphicon glyphicon-plus pull-right"  type="button" data-toggle="modal" data-target="#addMedicine"></span></th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <Medicine v-for="medicine in medicalFile.medicine" :medicine="medicine" 
                                    @showDescription="showDescription" @removeMedicine="removeMedicine"></Medicine>
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
                                    @edit="editTreatment" @showLogs="showLogs" @addLog="addLogModal"></Treatment>
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
        <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Medicijn toevoegen</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row">
                            <label for="name" class="col-sm-4 col-form-label" aria-describedby="Naam medicijn" >Naam medicijn</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="name" placeholder="name" v-model="medication.name">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="startDate" class="col-sm-4 col-form-label" aria-describedby="startDate">Startdatum</label>
                            <div class="col-sm-8">
                                <input type="date" class="form-control" id="startDate" v-model="medication.startDate">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="endDate" class="col-sm-4 col-form-label" aria-describedby="endDate">Einddatum</label>
                            <div class="col-sm-8">
                                <input type="date" class="form-control" id="endDate" v-model="medication.endDate">
                            </div>
                        </div>

                    
                        <div class="form-group row">
                            <label for="reason" class="col-sm-4 col-form-label" aria-describedby="Reden">Reden</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="reason" placeholder="reason" v-model="medication.reason">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="dosage" class="col-sm-4 col-form-label" aria-describedby="dosage">dosage</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="dosage" placeholder="dosage" v-model="medication.dosage">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="addMedicine">>Toevoegen
                        </button>
                    </div>
                </div>
            </div>
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
                        
                        <div class="form-group row">
                            <label for="reason" class="col-sm-4 col-form-label" aria-describedby="Reden">Organisatie</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="organisation" placeholder="organisatie" v-model="doktersBezoek.organisation">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="dosage" class="col-sm-4 col-form-label" aria-describedby="dosage">Datum</label>
                            <div class="col-sm-8">
                                <input type="date" class="form-control" id="date" placeholder="datum" v-model="doktersBezoek.date">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="dosage" class="col-sm-4 col-form-label" aria-describedby="dosage">Beschrijving</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="description" placeholder="beschrijving" v-model="doktersBezoek.description">
                            </div>
                        </div>
                        
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
                            <label for="reason" class="col-sm-4 col-form-label" aria-describedby="reason">Behandeling</label>
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

        

        <div id="showDescription" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Medicatie beschrijving</h4>
                    </div>
                    <div class="modal-body">
                        <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Naam</th>
                            <th>Reden</th>
                            <th>Dosering</th>
                        </tr>
                        </thead>
                        <tbody>
                        <MedDescription :medicine="ActiveMedicine"></MedDescription>
                        </tbody>
                    </table>
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

        <div id="addLog" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">log toevoegen aan {{ActiveTreatment.description}}</h4>
                    </div>
                    <div class="modal-body">
                    <div class="form-group row">
                            <label for="logdescription" class="col-sm-4 col-form-label" aria-describedby="logdescription">beschrijving</label>
                            <div class="col-sm-8">
                                <textarea v-model="logDescription" class="form-control" id="logdescription"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" v-on:click="addLog" data-dismiss="modal">Toevoegen
                        </button>
                    </div>
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


    import HttpPatientsService from '../../../services/httpPatientsService';
    import HttpMedicalFileService from '../../../services/httpMedicalFileService';

    import Treatment from './Dossier/Treatment';
    import Allergy from './Dossier/Allergy';
    import Visit from './Dossier/Visit';
    import Medicine from './Dossier/Medicine';
    import Log from './Dossier/Log'
    import MedDescription from './Dossier/MedicationDescription';

    import Uuid from 'uuid/v1';

    export default {
        components: {
            BootstrapTextInput,
            BootstrapSelectInput,
            Treatment,
            Allergy,
            Visit,
            Medicine,
            MedDescription,
            Log
        },

        data () {
            return {
                bsn: '',
                patient: {},
                medicalFile: {},
                allergyValue: "",
                TreatmentInfo: {
                    description : "",
                    startDate: new Date().toISOString().slice(0,10),
                    endDate : ""
                },
                doktersBezoek: {
                    organisation: "",
                    date:  new Date().toISOString().slice(0,10),
                    description: ""
                },
                ActiveTreatment: {
                    description: "",
                    logs: []
                },
                ActiveMedicine: {
                    name: "",
                    reason: "",
                    dosage: ""
                },
                
                logDescription: "",
                medication: {
                    name: "",
                    startDate: new Date().toISOString().slice(0,10),
                    endDate: new Date().toISOString().slice(0,10),
                    reason: "",
                    dosage: ""
                }
            }
        },

        created: function () {
            this.patient.bsn = this.$route.params.bsn;
            this.bsn = this.$route.params.bsn;

            HttpPatientsService.getPatientbyBsn(this.patient.bsn).then((patient) => {
                this.patient = patient;
            });

            HttpMedicalFileService.getMedicalFile(this.patient.bsn).then(medicalFile => {
                this.medicalFile = medicalFile;
            });
        },

        methods: {

            removeMedicine(medicine){
                this.medicalFile.medicine = this.medicalFile.medicine.filter(function (item) {
                    return item !== medicine;
                    console.log(this.medicalFile.medicine);
                });
            },
            removeAllergy(allergy) {
                this.medicalFile.allergies = this.medicalFile.allergies.filter(function (item) {
                    return item !== allergy;
                });
            },

            save() {
                delete this.medicalFile.bsn;

                HttpMedicalFileService.saveMedicalFile(this.bsn, this.medicalFile);
                this.$router.push({name: 'patientsOverview'})
            },

            addAllergy() {
                if(this.allergyValue !== "") {
                    this.medicalFile.allergies.push(this.allergyValue);

                    this.allergyValue = "";

                }
            },
            addMedicine(){
                if(this.medication.name !== "") {
                    this.medicalFile.medicine.push({id:Uuid() ,name: this.medication.name, startDate: new Date(this.medication.startDate).getTime(), endDate: new Date(this.medication.endDate).getTime() , reason: this.medication.reason, dosage: this.medication.dosage});
   
                    this.medication.name = "";
                    this.medication.startDate = "";
                    this.medication.endDate = "";
                    this.medication.reason = "";
                    this.medication.dosage = "";
                }
            },

            addTreatment(){
                // if it already has an id, it's an edit!
                if(this.TreatmentInfo.id){
                    var found = false;
                    this.medicalFile.treatments.forEach(function(treatment, index){
                        if(found) return;
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
                        startDate: new Date(this.TreatmentInfo.startDate).getTime(),
                        endDate: new Date(this.TreatmentInfo.endDate).getTime(),
                        logs: []
                    });
                }
                //when we're done, clean up our mess
                this.clearTreatmentInfo();
            },

            editTreatment(treatment){
                // to prevent the databinding
                this.TreatmentInfo = JSON.parse(JSON.stringify(treatment));
                $("#AddTreatment").modal();
            },

            addLogModal(treatment){
                if(treatment){
                    this.ActiveTreatment = treatment;
                }
                $("#addLog").modal();
            },

            addLog(){
                this.ActiveTreatment.logs.unshift({
                    description:this.logDescription,
                    id: Uuid(),
                    date: Date.now()
                });
                this.logDescription = "";
            },

            showDescription(medicine){
                console.log("HIHI");
                this.ActiveMedicine.name = medicine.name;
                this.ActiveMedicine.reason = medicine.reason;
                this.ActiveMedicine.dosage = medicine.dosage;
                $("#showDescription").modal();
            },

            showLogs(treatment){
                this.ActiveTreatment.description = treatment.description;
                this.ActiveTreatment.logs = treatment.logs;
                $("#ShowLogs").modal();
            },

            clearTreatmentInfo(){
                let ti = this.TreatmentInfo;
                let now = ti.startDate;
                this.clearObject(ti);
                ti.startDate = now; 
            },


            // clear the values from the object, except the default ones 
            clearObject(object){
                Object.keys(object).forEach(function(key) { delete object[key]; });
            }
        }
    }
</script>


