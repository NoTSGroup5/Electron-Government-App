<template>
    <div class="row">
        <div class="col-xs-6 form-group">
            <form class="col-4">

                <div class="form-group">
                    <label for="inputName3">Naam</label>
                    <input type="naam" class="form-control" id="inputName3" placeholder="Naam">
                </div>

                <div class="form-group">
                    <label for="inputBSN3">BSN</label>
                    <input type="bsn" class="form-control" id="inputBSN3" placeholder="BSN">
                </div>

                <div class="form-group">
                    <label for="inputAddress3">Address</label>
                    <input type="address" class="form-control" id="inputAddress3" placeholder="Address">
                </div>

                <div class="form-group">
                    <label for="inputZipCode3">Postcode</label>
                    <input type="postcode" class="form-control" id="inputZipCode3" placeholder="Postcode">
                </div>


                <div class="form-group">
                    <label for="inputPlace3">Plaats</label>
                    <input type="plaats" class="form-control" id="inputPlace3" placeholder="Plaats">
                </div>


                <div class="form-group">
                    <label for="inputPhoneNumber3">Telefoonnummer</label>
                    <input type="telefoonnummer" class="form-control" id="inputPhoneNumber3"
                           placeholder="Telefoonnummer">
                </div>

                <div class="form-group">
                    <label for="inputMobilePhoneNumber3">Mobiele nummer</label>
                    <input type="mobiel" class="form-control" id="inputMobilePhoneNumber3" placeholder="Mobiele nummer">
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email">
                </div>
            </form>

            <button type="button" class="btn btn-success pull-right">Opslaan</button>
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
  import Organisation from '../Organization/OrganizationOverview/Organization';
  import Mentor from '../Mentor/MentorsOverview/Mentor';

  let organizations = [];
  let mentoren = [];

  export default {
    components: {
      Organisation,
      Mentor
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
