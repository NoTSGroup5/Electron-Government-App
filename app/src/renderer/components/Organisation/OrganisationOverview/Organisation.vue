<template>
    <tr>
        <td>{{ name }}</td>
        <td>{{ location }}</td>
        <td><span class="glyphicon glyphicon-pencil pull-right"></span></td>
    </tr>
</template>

<script>
  export default {
    props: ['name', 'location']
  }
</script>
