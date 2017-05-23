<template>
    <tr>
        <td>{{ BSN }}</td>
        <td>{{ Naam }}</td>
        <td><span class="glyphicon glyphicon-pencil pull-right"></span></td>
    </tr>
</template>

<script>
  export default {
    props: ['BSN', 'Naam']
  }
</script>
