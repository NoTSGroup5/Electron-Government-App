<template>
    <div class="row">
        <div class="col-xs-6 form-group">
            <div>
                <BootstrapTextInput v-model= "model.name" :type="'text'" :name="'name'" :value="'dsfgdsgf'"></BootstrapTextInput>
                <BootstrapTextInput :type="'text'" :name="'bsn'" :value="'BSN'"></BootstrapTextInput>
                <BootstrapTextInput :type="'text'" :name="'address'" :value="'Adres'"></BootstrapTextInput>
                <BootstrapTextInput :type="'text'" :name="'zip_code'" :value="'Postcode'"></BootstrapTextInput>
                <BootstrapTextInput :type="'text'" :name="'city'" :value="'Plaats'"></BootstrapTextInput>
                <BootstrapTextInput :type="'number'" :name="'phone'" :value="'Telefoonnummer'"></BootstrapTextInput>
                <BootstrapTextInput :type="'number'" :name="'mobile phone'" :value="'Mobiel nummer'"></BootstrapTextInput>
                <BootstrapTextInput :type="'text'" :name="'email'" :value="'email'"></BootstrapTextInput>

                <button class="btn btn-success pull-right">Opslaan</button>
            </div>
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
                        <Mentor v-for="mentor in mentoren" v-bind="mentor"></Mentor>
                    </tbody>
                </table>
            </div>

            <label>Organisaties</label>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Naam organisatie</th>
                    <th>Locatie</th>
                    <th><span class="glyphicon glyphicon-plus pull-right" type="button" data-toggle="modal" data-target="#addOrganisation"> </span></th>

                  
                    <div id="organisatietoevoegen" class="modal fade" role="dialog">
                    </div>
                </tr>
                </thead>
                <tbody>
                    <Organisation v-for="organisation in organisations" v-bind="organisation"></Organisation>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<script>

import Organisation from '../Organisation/OrganisationOverview/Organisation'
import Mentor from '../Mentor/MentorsOverview/Mentor'
import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput'
import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput'
import MentorToevoegenModal from '../Mentor/MentorsOverview/MentorToevoegenModal'
import BootstrapModal from '../Shared/Bootstrap/BootstrapModal'


export default {
    components: {
      Organisation,
      Mentor,
      BootstrapTextInput,
      BootstrapModal,
      MentorToevoegenModal,
      BootstrapSelectInput

    },

    data: () => {
            return {
                model: {
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
  }
</script>
