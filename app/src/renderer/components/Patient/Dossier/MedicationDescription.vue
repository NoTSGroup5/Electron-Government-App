<template>
    <tr>
        <td>{{ medicine.name }}</td>
        <td>{{ medicine.reason }}</td>
        <td>{{ medicine.dosage }}</td>
      
    </tr>
</template>

<script>
   
    export default {
        props: [
            "medicine"
        ]
    }
</script>

<style scoped>
</style>