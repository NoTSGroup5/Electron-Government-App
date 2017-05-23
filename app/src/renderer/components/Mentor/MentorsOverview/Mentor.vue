<template>
    <tr>
        <td>{{ BSN }}</td>
        <td>{{ Naam }}</td>
        <td><button class="btn btn-default">Bewerk</button></td>
    </tr>
</template>

<script>
  export default {
    props: ['BSN', 'Naam']
  }
</script>