<template>
    <form @submit.prevent="validateForm()">

        <div class="form-group row" :class="{'has-error': errors.has('name') }">
            <label for="name" class="col-sm-2 col-form-label">Naam</label>
            <div class="col-sm-10">
                <input v-model="model.name" name="name" v-validate="'required'" class="form-control" id="name">
                <p class="text-danger" v-show="errors.has('name')">Een naam is verplicht.</p>
            </div>
        </div>

        <div class="form-group row" :class="{'has-error': errors.has('description') }">
            <label for="description" class="col-sm-2 col-form-label">Omschrijving</label>
            <div class="col-sm-10">
                <input v-model="model.description" name="description"  v-validate="'required'" class="form-control" id="description">
                <p class="text-danger" v-show="errors.has('description')">Een omschrijving is verplicht.</p>
            </div>
        </div>

        <button type="submit" class="btn btn-success pull-right">Opslaan</button>
    </form>
</template>

<script>
import Uuid from 'uuid/v1'
import HttpOrganisationTypeService from '../../../services/httpOrganisationTypeService'

export default {
    data: () => {
      return {
        model: {
          name: null,
          description: null
        }
      }
    },
    methods: {
      validateForm () {
        this.$validator.validateAll().then(() => {
          let httpOrganisationTypeService = new HttpOrganisationTypeService();

          httpOrganisationTypeService.add(Uuid(), this.model.name, this.model.description).then(() => {
            this.$router.push({path: '/organisation-types'})
          }).catch(() => {
            alert('An error occurred while adding the organisation type')
          })
        }).catch(() => {});
      }
    }
  }
</script>
