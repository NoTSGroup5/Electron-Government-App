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
                            <th><span class="glyphicon glyphicon-plus pull-right"></span></th>
                        </tr>
                        </thead>
                        <tbody>
                        <Treatment v-for="treatment in medicalFile.treatments" :treatment="treatment"></Treatment>
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
                        <button type="button" class="btn btn-default" data-dismiss="modal">Toevoegen
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

    export default {
        components: {
            BootstrapTextInput,
            BootstrapSelectInput,
            Treatment,
            Allergy,
            Visit,
            Medicine,
            AddMedicine
        },

        data () {
            return {
                patient: {},
                medicalFile: {},
                allergyValue: ""
            }
        },

        created: function () {
            let httpPatientsService = new HttpPatientsService();
            let bsn = this.$route.params.bsn;

            httpPatientsService.getPatientbyBsn(bsn).then((patient) => {
                this.patient = patient;

                HttpMedicalFileService.getMedicalFile(bsn).then(medicalFile => {
                    this.medicalFile = medicalFile[0];
                });
            });
        },

        methods: {
            removeAllergy(allergy) {
                this.medicalFile.allergies = this.medicalFile.allergies.filter(function (item) {
                    return item !== allergy;
                });
            },

            save() {
                HttpMedicalFileService.saveMedicalFile(this.medicalFile);

                this.$router.push({name: 'patientsOverview'})
            },

            addAllergy() {
                if(this.allergyValue !== "") {
                    this.medicalFile.allergies.push(this.allergyValue);
                }
            }
        }
    }
</script>
