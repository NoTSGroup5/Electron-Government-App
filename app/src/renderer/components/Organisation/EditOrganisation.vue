<template>
    <div>
        <router-link to="/organisations">&#171; Organisaties overzicht</router-link>

        <form @submit.prevent="validateForm()">
            <div class="form-group" :class="{'has-error': errors.has('name') }">
                <label for="organisationadd-residence" class="control-label required">Naam</label>
                <input v-model="model.name" name="residence" v-validate="'required'" class="form-control"
                       id="organisationadd-name">
                <p class="text-danger" v-show="errors.has('name')">Een naam is verplicht.</p>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('type') }">
                <label for="organisationadd-type" class="control-label required">Type</label>
                <select v-model="model.organisationType" name="type" id="organisationadd-type" class="form-control">
                    <option hidden value="" selected>Kies een type</option>
                    <option v-for="type in types" :value="type.id">{{type.name}}</option>
                </select>
                <p class="text-danger" v-show="errors.has('type')">Een type is verplicht.</p>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="form-group" :class="{'has-error': errors.has('street') }">
                        <label for="organisationadd-street" class="control-label required">Straatnaam</label>
                        <input v-model="model.street" name="street" v-validate="'required'" class="form-control"
                               id="organisationadd-street">
                        <p class="text-danger" v-show="errors.has('street')">Een straatnaam is verplicht.</p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group" :class="{'has-error': errors.has('street_number') }">
                        <label for="organisationadd-street_number" class="control-label required">Huisnummer</label>
                        <input v-model="model.houseNumber" name="street_number" v-validate="'required'"
                               class="form-control" id="organisationadd-street_number">
                        <p class="text-danger" v-show="errors.has('street_number')">Een huisnummer is verplicht.</p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group" :class="{'has-error': errors.has('street_number_extra') }">
                        <label for="organisationadd-street_number_extra" class="control-label">Toevoeging</label>
                        <input v-model="model.houseNumberExtra" name="street_number_extra" class="form-control"
                               id="organisationadd-street_number_extra">
                    </div>
                </div>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('zip_code') }">
                <label for="organisationadd-zip_code" class="control-label required">Postcode</label>
                <input v-model="model.zipCode" name="zip_code" v-validate="'required'" class="form-control"
                       id="organisationadd-zip_code">
                <p class="text-danger" v-show="errors.has('zip_code')">Een postcode is verplicht.</p>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('city') }">
                <label for="organisationadd-residence" class="control-label required">Woonplaats</label>
                <input v-model="model.city" name="residence" v-validate="'required'" class="form-control"
                       id="organisationadd-residence">
                <p class="text-danger" v-show="errors.has('city')">Een woonplaats is verplicht.</p>
            </div>

            <button type="submit" class="btn btn-default">Organisatie opslaan</button>
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
    import HttpOrganisationTypeService from '../../../services/httpOrganisationTypeService'
    import HttpOrganisationService from '../../../services/httpOrganisationService'
    import Uuid from 'uuid/v1'
    import _ from 'lodash'

    export default {
        data: () => {
            return {
                types : [],
                model : {
                    id : "",
                    name : "",
                    street: "",
                    houseNumber: "",
                    houseNumberExtra: "",
                    zipCode: "",
                    city: "",
                    organisationType : ""
                }
            }
        },
        created() {
            Promise.all([HttpOrganisationTypeService.fetch(), HttpOrganisationService.getById(this.$route.params.id)]).then((results) => {
                this.types = results[0];
                this.setModel(results[1]);
            }).catch(() => {
                console.log('An error occurd while retrieving data');
            })
        },
        methods : {
            validateForm(){
                this.$validator.validateAll().then(() => {
                    this.model.organisationType = this.getTypeFromId(this.model.organisationType);

                    HttpOrganisationService.update(this.model.id, this.model).then(() => {
                        this.$router.push({path: '/organisations'})
                    }).catch(() => {
                        alert('An error occurred while updating the organisation')
                    })
                }).catch();
            },
            getTypeFromId(id){
                return _.find(this.types, {id});
            },
            setModel(organisation){
                this.model.id = organisation.id;
                this.model.name = organisation.name;
                this.model.street = organisation.street;
                this.model.houseNumber = organisation.houseNumber;
                this.model.houseNumberExtra = organisation.houseNumberExtra;
                this.model.zipCode = organisation.zipCode;
                this.model.city = organisation.city;
                this.model.organisationType = organisation.organisationType.id;
            }
        }
    }
</script>
