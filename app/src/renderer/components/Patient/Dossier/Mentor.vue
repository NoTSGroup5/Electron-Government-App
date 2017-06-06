<template>
    <tr>
        <td>{{ mentor.bsn }}</td>
        <td>{{ mentor.firstName }}</td>
      
    </tr>
</template>

<script>
   
    export default {
        props: [
            "mentor"
        ]
    }
</script>

<style scoped>
</style>