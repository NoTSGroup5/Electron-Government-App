<template>
    <table class="table">
        <thead>
            <tr>
                <th>Naam</th>
                <th>Locatie</th>
                <th>Bewerk</th>
            </tr>
        </thead>
        <tbody>
            <Organisation></Organisation>
        </tbody>
    </table>
</template>

<script>
    import Organisation from './Organisation';

    export default {
      components: {
        Organisation
      }
    }
</script>

