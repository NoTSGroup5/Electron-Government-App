<template>
    <tr>
        <td>{{ bsn }}</td>
        <td>{{ name }}</td>
      
    </tr>
</template>

<script>
   
    export default {
        props: [
            "bsn",
            "name",
        ]
    }
</script>

<style scoped>
</style>