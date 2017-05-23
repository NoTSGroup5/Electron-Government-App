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
                        <td><span class="glyphicon glyphicon-plus" data-toggle="modal" data-target="#myModal"></span>
                        </td>
                        </th>

                        <!-- Modal -->
                        <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog">

                                <!-- Modal content-->
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Mentoren toevoegen</h4>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <input type="search" id="search" value="" class="form-control"
                                                       placeholder="Zoeken op BSN">
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
                                                <hr>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Opslaan
                                        </button>
                                    </div>
                                </div>

                            </div>
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
                    <th>Organisatie naam</th>
                    <th>Locatie</th>
                    <th><span class="glyphicon glyphicon-plus" type="button" data-toggle="modal"
                              data-target="#organisatietoevoegen"> </span></th>

                    <!-- Modal -->
                    <div id="organisatietoevoegen" class="modal fade" role="dialog">
                        <div class="modal-dialog">

                            <!-- Modal content-->
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Organisaties toevoegen</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4 ">
                                            <input type="search" id="search" value="" class="form-control"
                                                   placeholder="Zoeken op naam organisatie">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <table class="table" id="table">
                                                <thead>
                                                <tr>
                                                    <th>Naam</th>
                                                    <th>Locatie</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <Organisation v-for="organization in organizations"
                                                              v-bind="organization"></Organisation>
                                                </tbody>
                                            </table>
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Opslaan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </tr>
                </thead>
                <tbody>
                    <Organisation v-for="organization in organizations" v-bind="organization"></Organisation>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  import Organisation from '../Organization/OrganisationOverview/Organization';
  import Mentor from '../Mentor/MentorsOverview/Mentor';
  import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput';
  import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput';


  let organizations = [];
  let mentoren = [];

  export default {
    components: {
      Organisation,
      Mentor,
      BootstrapTextInput,
      BootstrapSelectInput
    },

    data: () => {
      return {
        organizations: organizations,
        mentoren: mentoren
      }
    },

    beforeCreate: () => {
      // TODO: Add actual API endpoint here, simulate async call for now
      setTimeout(() => {
        organizations.push({
          name: "Ziekenhuis Zevenaar",
          location: "Zevenaar"
        });

        mentoren.push({
          BSN: "2736498",
          naam: "Kees, J"
        });

        organizations.push({
          name: "Rijnstate",
          location: "Arnhem"
        });

        mentoren.push({
          BSN: "3243243",
          naam: "Hans, S"
        });
      }, 100);
    },

    beforeDestroy: () => {
      organizations = [];
      mentoren = [];
    }
  }
</script>
