<template>
    <div>
        <div class="clearfix">
            <h1 class="pull-left">Organisatie Types Overzicht</h1>
            <router-link class="btn btn-default pull-right btn-add" to="/organisation-type/create">Maak Organisatie Type</router-link>
        </div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Naam</th>
                <th>Omschrijving</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="type in organisationTypes">
                <td>{{type.name}}</td>
                <td>{{type.description}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import Uuid from 'uuid/v1'
import HttpOrganisationTypeService from '../../../services/httpOrganisationTypeService'

let httpOrganisationTypeService = new HttpOrganisationTypeService()

export default {
    data: () => {
      return {
        organisationTypes: []
      }
    },
    created () {
      httpOrganisationTypeService.fetch().then((items) => {
        this.organisationTypes = items
      }).catch(() => {
        alert('Het laden van de organisatie types zijn mislukt.')
      })
    },
    methods: {}
  }
</script>

<style scoped>
    .btn-add {
        margin-top: 20px;
    }
</style>
