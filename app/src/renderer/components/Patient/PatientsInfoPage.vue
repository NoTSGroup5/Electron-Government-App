<template>
    <div class="row">
        <div class="col-xs-6 form-group">
            <div>
                <BootstrapTextInput :type="'text'" :name="'name'" :value="'Naam'"></BootstrapTextInput>
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
                    <th><span class="glyphicon glyphicon-plus pull-right" type="button" data-toggle="modal" data-target="#organisatietoevoegen"> </span></th>

                  
                    <div id="organisatietoevoegen" class="modal fade" role="dialog">
                    </div>
                </tr>
                </thead>
                <tbody>
                    <Organisation v-for="organisation in organisations" v-bind="organisation"></Organisation>
                </tbody>
            </table>
        </div>

        <BootstrapModal title="Mentoren toevoegen" modalId="addMentor" :large="true">
            <div class="row">
                <div class="col-lg-4">
                    <input type="search" id="search" value="" class="form-control" placeholder="Zoeken op BSN">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <table class="table" id="table">
                        <thead>
                        <tr>
                            <th>BSN</th>
                            <th>Naam</th>
                        </tr>
                        </thead>
                        <tbody>
                            <Mentor v-for="mentor in mentoren" v-bind="mentor"></Mentor>
                        </tbody>
                    </table>
                </div>
            </div>
        </BootstrapModal>

        <BootstrapModal :title="'Organisaties toevoegen'" modalId="addOrganisation" :large="true">
            <div class="row">
                <div class="col-lg-4 ">
                    <input type="search" id="organisation_search" value="" class="form-control" placeholder="Zoeken op naam organisatie">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Naam</th>
                            <th>Locatie</th>
                        </tr>
                        </thead>
                        <tbody>
                            <Organisation v-for="organisation in organisations" v-bind="organisation"></Organisation>
                        </tbody>
                    </table>
                </div>
            </div>
        </BootstrapModal>
    </div>
</template>

<script>
  import Organisation from '../Organisation/OrganisationOverview/Organisation'
import Mentor from '../Mentor/MentorsOverview/Mentor'
import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput'
import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput'
import MentorToevoegenModal from '../Mentor/MentorsOverview/MentorToevoegenModal'
  import BootstrapModal from '../Shared/Bootstrap/BootstrapModal';

let Organisations = []
let mentoren = []

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
        organisations: organisations,
        mentoren: mentoren
      }
    },

    beforeCreate: () => {
      // TODO: Add actual API endpoint here, simulate async call for now
      setTimeout(() => {
        Organisations.push({
          name: 'Ziekenhuis Zevenaar',
          location: 'Zevenaar'
        })

        mentoren.push({
          BSN: '2736498',
          naam: 'Kees, J'
        })

        Organisations.push({
          name: 'Rijnstate',
          location: 'Arnhem'
        })

        mentoren.push({
          BSN: '3243243',
          naam: 'Hans, S'
        })
      }, 100)
    },

    beforeDestroy: () => {
      Organisations = []
      mentoren = []
    }
  }
</script>
