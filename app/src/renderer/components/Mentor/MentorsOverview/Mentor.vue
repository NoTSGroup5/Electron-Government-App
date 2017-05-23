<template>
    <tr>
        <td>{{ BSN }}</td>
        <td>{{ Naam }}</td>
        <td><span class="glyphicon glyphicon-pencil"></span></td>
    </tr>
</template>

<script>
  export default {
    props: ['BSN', 'Naam']
  }
</script>
