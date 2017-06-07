<template>
    <tr>
        <td>{{ organisatie.name }}</td>
        <td>{{ organisatie.city }}</td>
        <td></td>
      
    </tr>
</template>

<script>
   
    export default {
        props: [
            "organisatie"
        ]
    }
</script>

<style scoped>
</style>