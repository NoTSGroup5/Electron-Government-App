<template>
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
                                                <Organisation v-for="organization in organizations" v-bind="organization"></Organisation>
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
</template>