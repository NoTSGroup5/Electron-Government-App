<template>
    <div>
        <BootstrapTextInput :type="'text'" :name="'name'" :value="'Naam'"></BootstrapTextInput>
        <BootstrapTextInput :type="'text'" :name="'address'" :value="'Adres'"></BootstrapTextInput>
        <BootstrapTextInput :type="'text'" :name="'zip_code'" :value="'Postcode'"></BootstrapTextInput>
        <BootstrapTextInput :type="'text'" :name="'city'" :value="'Plaats'"></BootstrapTextInput>
        <BootstrapTextInput :type="'number'" :name="'phone'" :value="'Telefoonnummer'"></BootstrapTextInput>

        <BootstrapSelectInput :name="'organisation_type'" :value="'Soort Organisatie'" :options="organisationOptions"></BootstrapSelectInput>

        <button class="btn btn-success pull-right">Opslaan</button>
    </div>
</template>

<script>
  import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput'
  import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput'

  let organisationOptions = []

export default {
    components: {
      BootstrapTextInput,
      BootstrapSelectInput
    },

    data: () => {
      return {
        organisationOptions
      }
    },

    beforeCreate: () => {
      organisationOptions.push({ name: 'Ziekenhuis', value: 'hospital' })
      organisationOptions.push({ name: 'Fysiotherapeut', value: 'fysio' })
      organisationOptions.push({ name: 'Huisarts', value: 'house_doctor' })
    }
  }
</script>
