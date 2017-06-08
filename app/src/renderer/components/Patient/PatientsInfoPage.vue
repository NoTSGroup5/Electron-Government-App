<template>
    <div>
        <router-link to="/patients">&#171; Patiënten overzicht</router-link>

        <div class="row">
            <div class="col-xs-6 form-group">

                <form @submit.prevent="validateForm()">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group" :class="{'has-error': errors.has('first_name') }">
                                <label for="patientscreate-first_name" class="control-label required">Naam </label>
                                <input v-model="model.firstName" name="first_name" v-validate="'required'"
                                       class="form-control" id="patientscreate-first_name">
                                <p class="text-danger" v-show="errors.has('first_name')">Een voornaam is verplicht.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group" :class="{'has-error': errors.has('name_prefix') }">
                                <label for="name_prefix" class="control-label">Tussenvoegsel</label>
                                <input v-model="model.namePrefix" name="name_prefix" class="form-control"
                                       id="name_prefix">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group" :class="{'has-error': errors.has('last_name') }">
                                <label for="name_prefix" class="control-label required">Achternaam</label>
                                <input v-model="model.lastName" name="last_name" v-validate="'required'"
                                       class="form-control" id="last_name">
                                <p class="text-danger" v-show="errors.has('last_name')">Een achternaam is verplicht.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group" :class="{'has-error': errors.has('birthday_day') }">
                                <label for="patientscreate-birthday-day" class="control-label required">Dag</label>
                                <select v-model="model.birthday.day" id="patientscreate-birthday-day"
                                        name="birthday_day" class="form-control">
                                    <option hidden value="" selected>Kies een dag</option>
                                    <option v-for="day in getDays()" :value="day">{{day}}</option>
                                </select>
                                <p class="text-danger" v-show="errors.has('birthday_day')">Een dag is verplicht.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group" :class="{'has-error': errors.has('birthday_month') }">
                                <label for="patientscreate-birthday_month" class="control-label required">Maand</label>
                                <select v-model="model.birthday.month" id="patientscreate-birthday_month"
                                        name="birthday_month" class="form-control">
                                    <option hidden value="" selected>Kies een maand</option>
                                    <option v-for="month in getMonths()" :value="month.id">{{month.name}}</option>
                                </select>
                                <p class="text-danger" v-show="errors.has('birthday_month')">Een maand is verplicht.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group" :class="{'has-error': errors.has('birthday_year') }">
                                <label for="patientscreate-birthday_year" class="control-label required">Jaar</label>
                                <select v-model="model.birthday.year" id="patientscreate-birthday_year"
                                        name="birthday_year" class="form-control">
                                    <option hidden value="" selected>Kies een jaar</option>
                                    <option v-for="year in getYears()" :value="year">{{year}}</option>
                                </select>
                                <p class="text-danger" v-show="errors.has('birthday_year')">Een jaar is verplicht.</p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group" :class="{'has-error': errors.has('gender') }">
                        <label for="patientscreate-gender" class="control-label required">Geslacht</label>
                        <select v-model="model.gender" name="gender" v-validate="'required'" id="patientscreate-gender"
                                class="form-control">
                            <option hidden value="" selected>Kies een geslacht</option>
                            <option v-for="gender in getGenders()" :value="gender">{{gender}}</option>
                        </select>
                        <p class="text-danger" v-show="errors.has('gender')">Een geslacht is verplicht.</p>
                    </div>

                    <div class="row">
                        <div class="col-md-8">
                            <div class="form-group" :class="{'has-error': errors.has('street') }">
                                <label for="patientcreate-street" class="control-label required">Straatnaam</label>
                                <input v-model="model.street" name="street" v-validate="'required'" class="form-control"
                                       id="patientcreate-street">
                                <p class="text-danger" v-show="errors.has('street')">Een straatnaam is verplicht.</p>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group" :class="{'has-error': errors.has('street_number') }">
                                <label for="patientcreate-street_number"
                                       class="control-label required">Huisnummer</label>
                                <input v-model="model.houseNumber" v-validate="'required'" name="street_number"
                                       class="form-control" id="patientcreate-street_number">
                                <p class="text-danger" v-show="errors.has('street_number')">
                                    Een huisnummer is verplicht.</p>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group" :class="{'has-error': errors.has('street_number_extra') }">
                                <label for="patientcreate-street_number_extra" class="control-label">Toevoeging</label>
                                <input v-model="model.houseNumberExtra" name="street_number_extra" class="form-control"
                                       id="patientcreate-street_number_extra">
                            </div>
                        </div>
                    </div>

                    <div class="form-group" :class="{'has-error': errors.has('zip_code') }">
                        <label for="patientcreate-zip_code" class="control-label required">Postcode</label>
                        <input v-model="model.zipCode" v-validate="'required'" name="zip_code" class="form-control"
                               id="patientcreate-zip_code">
                        <p class="text-danger" v-show="errors.has('zip_code')">Een postcode is verplicht.</p>
                    </div>

                    <div class="form-group" :class="{'has-error': errors.has('city') }">
                        <label for="patientcreate-city" class="control-label required">Woonplaats</label>
                        <input v-model="model.city" v-validate="'required'" name="city" class="form-control"
                               id="patientcreate-city">
                        <p class="text-danger" v-show="errors.has('city')">Een woonplaats is verplicht.</p>
                    </div>

                    <div class="form-group" :class="{'has-error': errors.has('telephone_number') }">
                        <label for="patientcreate-telephone_number"
                               class="control-label required">Telefoonnummer</label>
                        <input v-model="model.telephoneNumber" v-validate="'required'" name="telephone_number"
                               class="form-control" id="patientcreate-telephone_number">
                        <p class="text-danger" v-show="errors.has('telephone_number')">
                            Een telefoonnummer is verplicht.</p>
                    </div>

                    <div class="form-group" :class="{'has-error': errors.has('email') }">
                        <label for="patientcreate-email" class="control-label required">Email</label>
                        <input v-model="model.email" v-validate="'required'" name="email" class="form-control"
                               id="patientcreate-email">
                        <p class="text-danger" v-show="errors.has('email')">Een email is verplicht.</p>
                    </div>

                    <button type="submit" class="btn btn-default">Gegevens opslaan</button>

                </form>
            </div>


            <div class="col-xs-6 form-group">
                <label>Mentoren</label>
                <div>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>BSN</th>
                            <th>Naam</th>
                            <th>
                                <span class="glyphicon glyphicon-plus pull-right" type="button" data-toggle="modal"
                                      data-target="#addMentorModal"></span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <Mentor v-for="mentor in mentors" :mentor="mentor"></Mentor>
                        </tbody>
                    </table>
                </div>

                <label>organisations</label>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Naam organisatie</th>
                        <th>Locatie</th>
                        <th>
                            <span class="glyphicon glyphicon-plus pull-right" type="button" data-toggle="modal"
                                  data-target="#organisatietoevoegen"> </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <Organisatie v-for="organisatie in addedPermissions" :organisatie="organisatie"></Organisatie>
                    </tbody>
                </table>
            </div>
        </div>

        <div id="addMentorModal" class="modal fade" role="dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Mentoren toevoegen</h4>
                </div>

                <div class="modal-body">
                    <div>
                        <div class="input-group">
                            <input v-model="userInput" type="text" class="form-control" placeholder="Zoek mentor...">
                            <span class="input-group-btn">
                                    <button class="btn btn-default" type="button" v-on:click="findMentor(userInput)">Zoek</button>
                                </span>
                        </div>

                        <table class="table" id="table">
                            <thead>
                            <tr>
                                <th>BSN</th>
                                <th>Naam</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ mentor.bsn }}</td>
                                <td>{{ mentor.name }}</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="addMentor()">
                        Toevoegen
                    </button>
                </div>
            </div>
        </div>


        <div id="organisatietoevoegen" class="modal fade" role="dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Organisatie toevoegen</h4>
                </div>

                <div class="modal-body">
                    <div>
                        <div class="input-group">
                            <input v-model="organisatieInput" type="text" class="form-control"
                                   placeholder="Zoek organisatie op naam...">
                            <span class="input-group-btn">
                                    <button class="btn btn-default" type="button"
                                            v-on:click="findOrganization(organisatieInput)">Zoek</button>
                                </span>
                        </div>

                        <table class="table" id="table">
                            <thead>
                            <tr>
                                <th>Naam</th>
                                <th>Locatie</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="organisatie in organisations">
                                    <td> {{organisatie.name}}</td>
                                    <td> {{organisatie.city}} </td>
                                    <td><button class="btn btn-default" type="button" data-dismiss="modal" v-on:click="addOrganisation(organisatie)">Toevoegen</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

    import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput'
    import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput'
    import AddMentorModal from '../Mentor/MentorsOverview/AddMentorModal'
    import Mentor from './Dossier/Mentor'
    import Organisatie from './Dossier/Organisatie'

    import BootstrapModal from '../Shared/Bootstrap/BootstrapModal'


    import HttpPatientsService from '../../../services/httpPatientsService'
    import HttpMedicalFileService from '../../../services/httpMedicalFileService'
    import HttpOrganisationService from '../../../services/httpOrganisationService'


    export default {
        components: {
            BootstrapTextInput,
            AddMentorModal,
            BootstrapSelectInput,
            Mentor,
            Organisatie

        },

        data ()  {
            return {
                patient: {},
                medicalFile: {},
                mentor: {
                    bsn: "",
                    name: "",
                },
                addedPermissions: [],
                mentors: [],
                selectedOrganisation: "",
                organisations: [],
                userInput: "",
                organisatieInput: "",
                model: {
                    bsn: "",
                    gender: "",
                    firstName: "",
                    namePrefix: "",
                    lastName: "",
                    street: "",
                    houseNumber: "",
                    houseNumberExtra: "",
                    zipCode: "",
                    city: "",
                    telephoneNumber: "",
                    email: "",
                    birthday: {
                        day: "",
                        month: "",
                        year: ""
                    }
                }
            }
        },

        created: function () {
            let bsn = this.$route.params.bsn;
            HttpPatientsService.getPatientbyBsn(bsn).then(patient => {
                this.patient = patient;

                let birthday = new Date(patient.birthday);

                for (let key in patient) {
                    if (patient.hasOwnProperty(key) && key !== "birthday") {
                        this.model[key] = patient[key];
                    }
                }

                this.model.birthday = {
                    day: birthday.getDate(),
                    month: birthday.getMonth(),
                    year: birthday.getFullYear()
                };
            }).catch(e => {
                console.log(e);
            });

            HttpMedicalFileService.getMedicalFile(bsn).then(medicalFile => {
                this.medicalFile = medicalFile;
               


                medicalFile.mentors.forEach((mentor) => {
                    let bsnIndex = mentor.indexOf("#");
                    let id = mentor.substr(bsnIndex + 1, mentor.length - bsnIndex + 1);

                    HttpPatientsService.getPatientbyBsn(id).then(patient => {
                        this.mentors.push(patient)
                    });
                });

                medicalFile.permissions.forEach((permission) => {
                    let bsnIndex = permission.organisation.indexOf("#");
                    let id = permission.organisation.substr(bsnIndex + 1, permission.organisation.length - bsnIndex + 1);

                    HttpOrganisationService.getById(id).then(organisatie => {
                        this.addedPermissions.push(organisatie)
                    });
                });
            });

        },

        methods: {
            addMentor(){
                if (this.mentor.bsn !== "") {
                    HttpPatientsService.getPatientbyBsn(this.mentor.bsn).then(patient => {
                        this.medicalFile.mentors.push(patient.bsn);
                        this.mentors.push(patient);
                    });

                    this.mentor.bsn = "";
                    this.mentor.name = "";
                }
            },

            addOrganisation(organisatie)
            {
                if(!this.inArray(organisatie, this.addedPermissions))
                {

                    this.addedPermissions.push(organisatie);
                    this.medicalFile.permissions.push({id: organisatie.id, organisation : "resource:nl.epd.blockchain.Organisation#" + organisatie.id ,read: true, write: true, del: true});
                    this.organisations = null;
                    this.organisatieInput = "";
                }
                else {
                    alert('Organisatie is al toegevoegd');
                }

                $('#organisatietoevoegen').modal('hide')
                
            },

            inArray(obj, list) {
                var i;
                for (i = 0; i < list.length; i++) {
                    if (list[i].id === obj.id) {
                        return true;
                    }
                }

                return false;
            },

            findOrganization(naam)
            {
                HttpOrganisationService.findByName(naam).then(response => {

                    this.organisations = response;
                }).catch(e => {
                    console.log(e);
                });


            },

            findMentor(bsn){
                HttpPatientsService.getPatientbyBsn(bsn).then(response => {
        
                    if (response.bsn !== this.model.bsn) {
                        this.mentor.bsn = response.bsn;
                        this.mentor.name = response.firstName + " " + response.lastName;
                    }
                    else {
                        alert('You cant add yourself')
                    }
                })
                    .catch(e => {
                        console.log(e);
                    })
            },

            validateForm(){
                this.$validator.validateAll().then(() => {
                    this.model.birthday = this.getTimeStamp(this.model.birthday.day, this.model.birthday.month, this.model.birthday.year);

                    delete this.medicalFile.bsn;
                    HttpMedicalFileService.saveMedicalFile(this.model.bsn, this.medicalFile);
                    HttpPatientsService.editPatient(this.model.bsn, this.model).then(() => {
                        this.$router.push({name: "patientsOverview"})
                    }).catch(() => {
                        alert('An error occurred while editing the patient')
                    })
                }).catch();
            },
            getGenders(){
                return ['Man', 'Vrouw', 'Apache Helicopter']
            },
            getYears(){
                let years = [];
                let yearNow = new Date().getFullYear();
                let yearTo = yearNow - 200;

                for (let year = yearNow; year >= yearTo; year--) {
                    years.push(year);
                }

                return years;
            },
            getDays: function () {
                let days = [];

                for (let day = 1; 31 >= day; day++) {
                    days.push(day);
                }

                return days;
            },
            getMonths(){
                return [
                    {
                        id: 0,
                        name: 'Januari'
                    },
                    {
                        id: 1,
                        name: 'Februari'
                    },
                    {
                        id: 2,
                        name: 'Maart'
                    },
                    {
                        id: 3,
                        name: 'April'
                    },
                    {
                        id: 4,
                        name: 'Mei'
                    },
                    {
                        id: 5,
                        name: 'Juni'
                    },
                    {
                        id: 6,
                        name: 'Juli'
                    },
                    {
                        id: 7,
                        name: 'Augustus'
                    },
                    {
                        id: 8,
                        name: 'September'
                    },
                    {
                        id: 9,
                        name: 'Oktober'
                    },
                    {
                        id: 10,
                        name: 'November'
                    },
                    {
                        id: 11,
                        name: 'December'
                    }
                ]
            },
            getTimeStamp(day, month, year){
                return new Date(year, month, day, 0, 0, 0, 0);
            }
        }
    }
</script>
