<template>
  <div>

    <table class="table table-striped"  v-if="patients.length">
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

    <div v-if="patients.length == 0">
              something went wrong with getting patients from the database
    </div>

  </div>
</template>

<script>
    var patients = []

    import patient from './Patient'

    import {ApiService} from './../services/ApiService';
    var api = new ApiService();

    export default {
        components: {
            patient
        },
        data () {
            return {
                patients: patients
            }
        },

        beforeCreate: function () {
            api.fetchData('patients')
                .then(res => {
                    // if(res.ok)
                    this.patients = [{name: 'henk'}, {name: 'harry'}];
                });
        },
        methods: {
            test: (event) => {
                debugger
            }
        },
        name: 'patientsList'
    }
</script>

<style scoped>
    .row {
        box-sizing: border-box;
        display: table;
        table-layout: fixed;
        width: 100%;
    }

    .tablehead,
    .tablefooter {
        background: red;
    }

    .cell {
        display: table-cell;
        flex: 1;
        flex-direction: column;
        position: relative;
    }

    @supports (display: flex) {
        .row {
            display: flex;

        }

    // display: block is needed to allow inline-block content inside a cell, if there is vertical alignment, we need display: flex
    .cell {
           display: block;
       }

        .cell-valign-middle,
        .cell-valign-bottom {
            display: flex;
        }
    }

    .cell-min {
        width: 1%;
        flex: none auto;
    }

    .cell-max {
        width: 100%;
        flex: 1 100%;
    }
</style>
