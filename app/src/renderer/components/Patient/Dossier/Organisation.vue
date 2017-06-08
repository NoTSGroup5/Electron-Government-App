<template>
    <tr>
        <td>{{ organisation.name }}</td>
        <td>{{ organisation.city }}</td>
        <td></td>
      
    </tr>
</template>

<script>
   
    export default {
        props: [
            "organisation"
        ]
    }
</script>

<style scoped>
</style>