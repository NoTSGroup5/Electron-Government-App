<template>
    <tr>
        <td>{{ name }}</td>
        <td>{{ location }}</td>
        <td><button class="btn btn-default">Bewerk</button></td>
    </tr>
</template>

<script>
  export default {
    props: ['name', 'location']
  }
</script>
