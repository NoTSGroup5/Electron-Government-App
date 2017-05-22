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
            <Organisation v-for="organization in organizations" v-bind="organization"></Organisation>
        </tbody>
    </table>
</template>

<script>
    import Organisation from './Organization';

    let organizations = [];

    export default {
      components: {
        Organisation
      },

      data () {
        return {
          organizations: organizations
        }
      },

      beforeCreate: () => {
        // TODO: Add actual API endpoint here, simulate async call for now
        setTimeout(() => {
          organizations.push({
            name: "Ziekenhuis Zevenaar",
            location: "Zevenaar"
          });

          organizations.push({
            name: "Rijnstate",
            location: "Arnhem"
          });
        }, 100);
      },

      beforeDestroy: () => {
        organizations = [];
      }
    }
</script>

