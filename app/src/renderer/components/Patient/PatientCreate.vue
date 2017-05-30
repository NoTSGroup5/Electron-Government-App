<template>
    <div>
        <router-link to="/patients">&#171; Patiënten overzicht</router-link>

        <form @submit.prevent="validateForm()">

            <div class="row">
                <div class="col-md-4">
                    <div class="form-group" :class="{'has-error': errors.has('first_name') }">
                        <label for="patientscreate-first_name" class="control-label required">Naam</label>
                        <input v-model="model.firstName" name="first_name" v-validate="'required'" class="form-control"
                               id="patientscreate-first_name">
                        <p class="text-danger" v-show="errors.has('first_name')">Een voornaam is verplicht.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group" :class="{'has-error': errors.has('name_prefix') }">
                        <label for="name_prefix" class="control-label">Tussenvoegsel</label>
                        <input v-model="model.namePrefix" name="name_prefix" class="form-control" id="name_prefix">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group" :class="{'has-error': errors.has('last_name') }">
                        <label for="name_prefix" class="control-label required">Achternaam</label>
                        <input v-model="model.lastName" name="last_name" v-validate="'required'" class="form-control"
                               id="last_name">
                        <p class="text-danger" v-show="errors.has('last_name')">Een achternaam is verplicht.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="form-group" :class="{'has-error': errors.has('birthday_day') }">
                        <label for="patientscreate-birthday-day" class="control-label required">Dag</label>
                        <select id="patientscreate-birthday-day" name="birthday_day" v-validate="'required'"
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
                        <select id="patientscreate-birthday_month" name="birthday_month" v-validate="'required'"
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
                        <select id="patientscreate-birthday_year" name="birthday_year" v-validate="'required'"
                                class="form-control">
                            <option hidden value="" selected>Kies een jaar</option>
                            <option v-for="year in getYears()" :value="year">{{year}}</option>
                        </select>
                        <p class="text-danger" v-show="errors.has('birthday_year')">Een jaar is verplicht.</p>
                    </div>
                </div>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('bsn') }">
                <label for="patientcreate-bsn" class="control-label required">Burgerservicenummer</label>
                <input v-model="model.bsn" name="bsn" v-validate="'required'" class="form-control"
                       id="patientcreate-bsn">
                <p class="text-danger" v-show="errors.has('bsn')">Een Burgerservicenummer is verplicht.</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('gender') }">
                <label for="patientscreate-gender" class="control-label required">Geslacht</label>
                <select v-model="model.gender" name="gender" id="patientscreate-gender" class="form-control">
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
                        <label for="patientcreate-street_number" class="control-label required">Huisnummer</label>
                        <input v-model="model.houseNumber" name="street_number" v-validate="'required'"
                               class="form-control" id="patientcreate-street_number">
                        <p class="text-danger" v-show="errors.has('street_number')">Een huisnummer is verplicht.</p>
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
                <input v-model="model.zipCode" name="zip_code" v-validate="'required'" class="form-control"
                       id="patientcreate-zip_code">
                <p class="text-danger" v-show="errors.has('zip_code')">Een postcode is verplicht.</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('city') }">
                <label for="patientcreate-residence" class="control-label required">Woonplaats</label>
                <input v-model="model.city" name="residence" v-validate="'required'" class="form-control"
                       id="patientcreate-residence">
                <p class="text-danger" v-show="errors.has('city')">Een woonplaats is verplicht.</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('telephone_number') }">
                <label for="patientcreate-telephone_number" class="control-label required">Telefoonnummer</label>
                <input v-model="model.telephoneNumber" name="telephone_number" v-validate="'required'"
                       class="form-control" id="patientcreate-telephone_number">
                <p class="text-danger" v-show="errors.has('telephone_number')">Een telefoonnummer is verplicht.</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('email') }">
                <label for="patientcreate-email" class="control-label required">Email</label>
                <input v-model="model.email" name="email" v-validate="'required'" class="form-control"
                       id="patientcreate-email">
                <p class="text-danger" v-show="errors.has('email')">Een email is verplicht.</p>
            </div>

            <button type="submit" class="btn btn-default">Patiënt toevoegen</button>

        </form>
    </div>
</template>

<style scoped>
    form {
        margin-top: 15px;
    }

    .required:before {
        content: "*";
        color: red;
        margin-right: 5px;
    }
</style>

<script>
    import HttpPatientsService from '../../../services/httpPatientsService'

    export default {
        data: () => {
            return {
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
        methods: {
            validateForm(){
                this.$validator.validateAll().then(() => {
                    this.model.birthday = this.getTimeStamp(this.model.birthday.day, this.model.birthday.month, this.model.birthday.year);
                    HttpPatientsService.addPatient(this.model).then(() => {
                        this.$router.push({name: "patientsOverview"});
                    }).catch(() => {
                        alert('An error occurred while adding the patient')
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
