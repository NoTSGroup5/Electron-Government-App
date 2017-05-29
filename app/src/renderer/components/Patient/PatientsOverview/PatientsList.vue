<template>
    <div>

        <table class="table table-striped" v-if="patients.length">
            <thead>
            <tr>
                <td>BSN</td>
                <td>Naam</td>
                <td>Bewerken</td>
                <td>Inzien</td>
            </tr>
            </thead>
            <tbody>
            <patient v-for="patient in patients" v-bind="patient"></patient>
            </tbody>
        </table>

        <div v-show="patients.length == 0">
            Geen patiënten gevonden.
        </div>

    </div>
</template>

<script>
    import patient from './Patient';
    import HttpPatientsService from '../../../../services/httpPatientsService';
    let httpPatientService = new HttpPatientsService();

    export default {
        components: {
            patient
        },
        data: () => {
            return {
                patients: []
            }
        },
        created () {
            httpPatientService.fetch().then((items) => {
                this.patients = items;
            }).catch(() => {
                alert('Het laden van de patients is mislukt.')
            });
        },
        name: 'patientsList'
    }
</script>

<style scoped>

</style>