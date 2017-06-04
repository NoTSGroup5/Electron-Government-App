<template>
    <tr>
        <td>{{ allergy }}</td>
        <td><span class="glyphicon glyphicon-remove pull-right" v-on:click="removeAllergy"></span></td>
    </tr>
</template>

<script>
    import HttpMedicalFileService from '../../../../services/httpMedicalFileService';

    export default {
        props: [
            "allergy"
        ],

        methods: {
            removeAllergy() {
                this.$emit('remove', this.allergy);
            }
        }
    }
</script>

<style scoped>
</style>
