<template>
    <div>
        <router-link to="/health-care-professionals">&#171; Zorgprofessionals overzicht</router-link>

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
               <div class="col-md-12">
                   <div class="form-group" :class="{'has-error': errors.has('bsn') }">
                       <label for="patientcreate-bsn" class="control-label required">Burgerservicenummer</label>
                       <input v-model="model.bsn" name="bsn" v-validate="'required'" class="form-control"
                              id="patientcreate-bsn">
                       <p class="text-danger" v-show="errors.has('bsn')">Een Burgerservicenummer is verplicht.</p>
                   </div>
               </div>
                <div class="col-md-12">
                    <div class="form-group" :class="{'has-error': errors.has('organisation') }">
                        <label for="organisation" class="control-label required">Organisatie</label>
                        <select v-model="model.organisation" name="organisation" v-validate="'required'" class="form-control"
                               id="organisation">
                            <option value="" hidden selected>Kies een organisatie</option>
                            <option v-for="organisation in organisations" :value="getOrganisationReference(organisation.id)">
                                {{organisation.name}} - {{getLocation(organisation)}}
                            </option>
                        </select>
                        <p class="text-danger" v-show="errors.has('organisation')">Een organisatie is verplicht.</p>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-default">Zorgprofessional toevoegen</button>

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
    import HttpHealthCareProfessionalService from '../../../services/httpHealthCareProfessionalService'
    import HttpOrganisationService from '../../../services/httpOrganisationService'

    let httpHealthCareProfessionalService = new HttpHealthCareProfessionalService();
    let httpOrganisationService = new HttpOrganisationService();

    export default {
        data: () => {
            return {
                model: {
                    bsn: "",
                    firstName: "",
                    namePrefix: "",
                    lastName: "",
                    organisation : ""
                },
                organisations : []
            }
        },
        created(){
          httpOrganisationService.fetch().then(organisations => {
              this.organisations = organisations;
          });
        },
        methods: {
            getLocation(organisation){
                let address = organisation.street + ' ' + organisation.houseNumber;

                if(organisation.houseNumberExtra){
                    address += ' ' + organisation.houseNumberExtra;
                }

                address += ', ' + organisation.zipCode + ' ' + organisation.city;

                return address;
            },
            getOrganisationReference(id){
                return `resource:nl.epd.blockchain.Organisation#${id}`;
            },
            validateForm(){
                this.$validator.validateAll().then(() => {
                    httpHealthCareProfessionalService.add(this.model).then(() => {
                        this.$router.push({name: "healthCareProfessionalsOverview"});
                    }).catch(() => {
                        alert('An error occurred while adding the health care professional')
                    })
                }).catch();
            }
        }
    }
</script>