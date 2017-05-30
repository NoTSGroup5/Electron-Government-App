<template>
        <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Medicijn toevoegen </h4>
                    </div>
                    <div class="modal-body">
                        <BootstrapTextInput :type="'text'" :name="'Naam medicijn'" :value="'Naam medicijn'"></BootstrapTextInput>
                        <BootstrapTextInput :type="'text'" :name="'Start datum'" :value="'Start datum'"></BootstrapTextInput>
                        <BootstrapTextInput :type="'text'" :name="'Eind datum'" :value="'Eind datum'"></BootstrapTextInput>
                        <BootstrapTextInput :type="'text'" :name="'Reden'" :value="'Reden'"></BootstrapTextInput>
                        <BootstrapTextInput :type="'text'" :name="'Dosis'" :value="'Dosis'"></BootstrapTextInput>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" >Toevoegen </button>
                    </div>
                </div>
            </div>
</template>



<script>
    import Vue from 'vue'
    import BootstrapTextInput from '../Shared/Bootstrap/BootstrapTextInput'
    import BootstrapSelectInput from '../Shared/Bootstrap/BootstrapSelectInput'
    import BootstrapModal from '../Shared/Bootstrap/BootstrapSelectInput'



    export default {
        components: {
            BootstrapTextInput,
            BootstrapSelectInput,
            BootstrapModal
        },
        props: {
            bsn: {
                type: String, 
                required: true
            }
        },

    }

</script>

