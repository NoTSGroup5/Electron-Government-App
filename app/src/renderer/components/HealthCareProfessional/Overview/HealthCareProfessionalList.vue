<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <td><strong>BSN</strong></td>
                    <td><strong>Naam</strong></td>
                    <td><strong>Bewerken</strong></td>
                </tr>
            </thead>
            <tbody>
            <tr v-show="professionals.length === 0">
                <td colspan="4">
                    Geen zorgprofessionals gevonden.
                </td>
            </tr>
            <Professional v-for="professional in professionals" v-bind="professional"></Professional>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Professional from './HealthCareProfessional.vue';
    import HttpHealthCareProfessionalService from '../../../../services/httpHealthCareProfessionalService';

    let httpHealthCareProfessionalService = new HttpHealthCareProfessionalService();

    export default {
        components: {
            Professional
        },
        data: () => {
            return {
                professionals: []
            }
        },
        created () {
            httpHealthCareProfessionalService.fetch().then((items) => {
                this.professionals = items;
            }).catch(() => {
                alert('Loading health care professionals failed.')
            });
        },
        name: 'patientsList'
    }
</script>

<style scoped>

</style>