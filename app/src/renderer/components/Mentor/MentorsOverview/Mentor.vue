<template>
    <tr>
        <td>{{ bsn }}</td>
        <td>{{ name }}</td>
        <td><span class="glyphicon glyphicon-pencil pull-right"></span></td>
    </tr>
</template>

<script>
  export default {
    props: ['bsn', 'name']
  }
</script>
