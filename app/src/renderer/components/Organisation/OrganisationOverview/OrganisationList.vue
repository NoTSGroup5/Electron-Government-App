<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Naam</th>
                <th>Locatie</th>
                <th>Bewerk</th>
            </tr>
        </thead>
        <tbody>
            <Organisation v-for="organisation in organisations" v-bind="organisation"></Organisation>
        </tbody>
    </table>
</template>

<script>
    import Organisation from './Organisation'

let organisations = []

export default {
      components: {
        Organisation
      },

      data: () => {
        return {
          organisations: organisations
        }
      },

      beforeCreate: () => {
        // TODO: Add actual API endpoint here, simulate async call for now
        setTimeout(() => {
          organisations.push({
            name: 'Ziekenhuis Zevenaar',
            location: 'Zevenaar'
          })

          organisations.push({
            name: 'Rijnstate',
            location: 'Arnhem'
          })
        }, 100)
  },

      beforeDestroy: () => {
        organisations = []
  }
    }
</script>

