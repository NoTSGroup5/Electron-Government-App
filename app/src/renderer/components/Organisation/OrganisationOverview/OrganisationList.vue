<template>
    <div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Naam</th>
                <th>Locatie</th>
                <th>Bewerk</th>
                <th>Verwijderen</th>
            </tr>
            </thead>
            <tbody>
            <tr v-show="organisations.length === 0">
                <td colspan="3">Geen organisaties gevonden.</td>
            </tr>
            <Organisation v-for="organisation in organisations" v-bind="organisation"></Organisation>
            </tbody>
        </table>

        <BootstrapSyncModal :title="'Organisatie verwijderen'" modalId="removeOrganisation" :large="true" :event="'ShowConfirmDeleteModal'">
            Weet u zeker dat u de organisatie "{{deleteOrganisationModel.name}}" wilt verwijderen?

            <div slot="modal-footer">
                <button @click="removeOrganisation()" type="button" class="btn btn-default" data-dismiss="modal">Verwijderen</button>
            </div>
        </BootstrapSyncModal>
    </div>
</template>

<script>
    import Organisation from './Organisation';
    import HttpOrganisationService from '../../../../services/httpOrganisationService';
    import BootstrapSyncModal from '../../../components/Shared/Bootstrap/BootstrapSyncModal.vue';
    import EventHub from '../../../../services/eventHub';
    import _ from 'lodash';

    let httpOrganisationService = new HttpOrganisationService();

    export default {
        components: {
            Organisation,
            BootstrapSyncModal
        },
        data: () => {
            return {
                organisations: [],
                deleteOrganisationModel : {}
            }
        },
        methods : {
            removeOrganisation(){
                httpOrganisationService.del(this.deleteOrganisationModel.id).then(() => {
                    let index = _.findIndex(this.organisations, {id : this.deleteOrganisationModel.id});
                    this.organisations.splice(index, 1);
                    this.deleteOrganisationModel = {};
                }).catch((ex) => {console.log(ex); console.log('Deleting organisation failed')});
            }
        },
        created() {
            EventHub.$on('ShowConfirmDeleteModal', (organisation) => {
                this.deleteOrganisationModel = organisation;
            });
            httpOrganisationService.fetch().then((items) => {
                this.organisations = items;
            });
        }
    }
</script>

