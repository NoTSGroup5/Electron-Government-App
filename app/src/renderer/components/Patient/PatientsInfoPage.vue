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
                        <input v-model="model.firstName"  name="first_name" v-validate="'required'" class="form-control"
                               id="patientscreate-first_name">
                        <p class="text-danger" v-show="errors.has('first_name')">Een voornaam is verplicht.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group" :class="{'has-error': errors.has('name_prefix') }">
                        <label for="name_prefix" class="control-label">Tussenvoegsel</label>
                        <input v-model="model.namePrefix"  name="name_prefix" class="form-control" id="name_prefix">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group" :class="{'has-error': errors.has('last_name') }">
                        <label for="name_prefix" class="control-label required">Achternaam</label>
                        <input v-model="model.lastName"  name="last_name"  v-validate="'required'" class="form-control"
                               id="last_name">
                        <p class="text-danger" v-show="errors.has('last_name')">Een achternaam is verplicht.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="form-group" :class="{'has-error': errors.has('birthday_day') }">
                        <label for="patientscreate-birthday-day" class="control-label required">Dag</label>
                        <select  id="patientscreate-birthday-day" name="birthday_day" 
                                class="form-control">
                            <option hidden value="" selected>Kies een dag</option>
                            <option v-for="day in getDays()" :value="day">{{day}}</option>
                        </select>
                        <p class="text-danger" v-show="errors.has('birthday_day')">Een dag is verplicht.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group" :class="{'has-error': errors.has('birthday_month') }">
                        <label for="patientscreate-birthday_month" class="control-label required">Maand</label>
                        <select id="patientscreate-birthday_month" name="birthday_month" 
                                class="form-control">
                            <option hidden value="" selected>Kies een maand</option>
                            <option v-for="month in getMonths()" :value="month.id">{{month.name}}</option>
                        </select>
                        <p class="text-danger" v-show="errors.has('birthday_month')">Een maand is verplicht.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group" :class="{'has-error': errors.has('birthday_year') }">
                        <label for="patientscreate-birthday_year" class="control-label required">Jaar</label>
                        <select id="patientscreate-birthday_year" name="birthday_year" 
                                class="form-control">
                            <option hidden value="" selected>Kies een jaar</option>
                            <option v-for="year in getYears()" :value="year">{{year}}</option>
                        </select>
                        <p class="text-danger" v-show="errors.has('birthday_year')">Een jaar is verplicht.</p>
                    </div>
                </div>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('gender') }">
                <label for="patientscreate-gender" class="control-label required">Geslacht</label>
                <select v-model="model.gender" name="gender" v-validate="'required'" id="patientscreate-gender" class="form-control">
                    <option hidden value="" selected>Kies een geslacht</option>
                    <option v-for="gender in getGenders()" :value="gender">{{gender}}</option>
                </select>
                <p class="text-danger" v-show="errors.has('gender')">Een geslacht is verplicht.</p>
            </div>

            <div class="row">
                <div class="col-md-8">
                    <div class="form-group" :class="{'has-error': errors.has('street') }">
                        <label for="patientcreate-street" class="control-label required">Straatnaam</label>
                        <input v-model="model.streetName" name="street"  v-validate="'required'" class="form-control"
                               id="patientcreate-street">
                        <p class="text-danger" v-show="errors.has('street')">Een straatnaam is verplicht.</p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group" :class="{'has-error': errors.has('street_number') }">
                        <label for="patientcreate-street_number"  class="control-label required">Huisnummer</label>
                        <input v-model="model.streetNumber" v-validate="'required'"  name="street_number" 
                               class="form-control" id="patientcreate-street_number">
                        <p class="text-danger" v-show="errors.has('street_number')">Een huisnummer is verplicht.</p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group" :class="{'has-error': errors.has('street_number_extra') }">
                        <label for="patientcreate-street_number_extra" class="control-label">Toevoeging</label>
                        <input v-model="model.streetNumberExtra"  name="street_number_extra" class="form-control"
                               id="patientcreate-street_number_extra">
                    </div>
                </div>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('zip_code') }">
                <label for="patientcreate-zip_code" class="control-label required">Postcode</label>
                <input v-model="model.zipCode"   v-validate="'required'"  name="zip_code"  class="form-control"
                       id="patientcreate-zip_code">
                <p class="text-danger" v-show="errors.has('zip_code')">Een postcode is verplicht.</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('residence') }">
                <label for="patientcreate-residence"  class="control-label required">Woonplaats</label>
                <input v-model="model.residence" v-validate="'required'" name="residence"  class="form-control"
                       id="patientcreate-residence">
                <p class="text-danger" v-show="errors.has('residence')">Een woonplaats is verplicht.</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('telephone_number') }">
                <label for="patientcreate-telephone_number"   class="control-label required">Telefoonnummer</label>
                <input v-model="model.telephoneNumber" v-validate="'required'" name="telephone_number" 
                       class="form-control" id="patientcreate-telephone_number">
                <p class="text-danger" v-show="errors.has('telephone_number')">Een telefoonnummer is verplicht.</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('email') }">
                <label for="patientcreate-email"  class="control-label required">Email</label>
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
                       <span class="glyphicon glyphicon-plus pull-right" type="button" data-toggle="modal" data-target="#myModal"></span>
                    
                        </th> 
                        <div id="myModal" class="modal fade" role="dialog">
                        <MentorToevoegenModal></MentorToevoegenModal>
                        </div>
                        
                    </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>

            <label>Organisaties</label>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Naam organisatie</th>
                    <th>Locatie</th>
                    <th><span class="glyphicon glyphicon-plus pull-right" type="button" data-toggle="modal" data-target="#organisatietoevoegen"> </span></th>

                  
                    <div id="organisatietoevoegen" class="modal fade" role="dialog">
                        
                    </div>
                </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>

import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput'
import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput'
import MentorToevoegenModal from '../Mentor/MentorsOverview/MentorToevoegenModal'

import BootstrapModal from '../Shared/Bootstrap/BootstrapModal'

 import HttpPatientsService from '../../../services/httpPatientsService'

let httpPatientsService = new HttpPatientsService();
let patient = {};


          

export default {
    components: {
      BootstrapTextInput,
      MentorToevoegenModal,
      BootstrapSelectInput,
      BootstrapModal
    },
    data ()  {
            return {
                patient: patient,
                model:  {
                        bsn: "",
                        gender: "",
                        firstName: "",
                        namePrefix: "",
                        lastName: "",
                        streetName: "",
                        streetNumber: "",
                        streetNumberExtra: "",
                        zipCode: "",
                        residence: "",
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

            httpPatientsService.getPatientbyBsn(bsn).then(response => {
            // JSON responses are automatically parsed.
            console.log(response)
            this.patient = response;

            this.model.bsn = response.bsn;
            this.model.gender = response.gender;
            this.model.firstName = response.firstName;
            this.model.namePrefix = response.namePrefix;
            this.model.lastName = response.lastName;
            this.model.streetName = response.street;
            this.model.streetNumber = response.houseNumber;
            this.model.streetNumberExtra = response.houseNumberExtra;
            this.model.zipCode = response.zipCode;
            this.model.residence = response.city;
            this.model.telephoneNumber = response.telephoneNumber;
            this.model.email = response.email;
            })
            .catch(e => {
            console.log(e);
            })
        },
        destroyed: function () {
            patient = [];
        },
         
       
        methods: {
            validateForm(){

                console.log(this.model)
                this.$validator.validateAll().then(() => {
                    let birthdayTimestamp = this.getTimeStamp(this.model.birthday.day, this.model.birthday.month, this.model.birthday.year);
                    httpPatientsService.editPatient(this.model.bsn, this.model.firstName, this.model.namePrefix, this.model.lastName, this.model.gender, birthdayTimestamp, this.model.streetName, this.model.streetNumber, this.model.streetNumberExtra, this.model.zipCode, this.model.residence, this.model.telephoneNumber, this.model.email).then(() => {
                        
                    }).catch(() => {
                        alert('An error occurred while editing the patient')
                    })
                }).catch((err) => {
                    console.log(err)
                });
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
