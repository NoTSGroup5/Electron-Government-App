<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>BSN</th>
                <th>Naam</th>
                <th>Bewerk</th>
            </tr>
        </thead>
        <tbody>
            <Mentor v-for="mentor in mentoren" v-bind="mentor"></Mentor>
        </tbody>
    </table>
</template>

<script>
    import Mentor from './Mentor'

let mentoren = []

export default {
      components: {
        Mentor
      },

      data: () => {
        return {
          mentoren: mentoren
        }
      },

      beforeCreate: () => {
        // TODO: Add actual API endpoint here, simulate async call for now
        setTimeout(() => {
          mentoren.push({
            BSN: '2736498',
            naam: 'Kees, J'
          })

          mentoren.push({
            name: '3243243',
            location: 'Hans, S'
          })
        }, 100)
  },

      beforeDestroy: () => {
        mentoren = []
  }
    }
</script>

