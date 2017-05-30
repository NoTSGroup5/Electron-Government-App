<template>
    <div :id="modalId" class="modal fade">
        <div class="modal-dialog" :class="modalClass"  role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">{{ title }}</h4>
                    </slot>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Opslaan</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EventHub from '../../../../services/eventHub'

    export default {
        props: {
            title: {
                type: String,
                default: 'Modal'
            },
            modalId: {
                type: String,
                required: true
            },
            event : {
                type : String,
                required : true
            },
            small: {
                type: Boolean,
                default: false
            },
            large: {
                type: Boolean,
                default: false
            },
            full: {
                type: Boolean,
                default: false
            }
        },
        created(){
            EventHub.$on(this.event, () => {
                $('#' + this.modalId).modal('show');
            });
        },
        computed: {
            modalClass () {
                return {
                    'modal-lg': this.large,
                    'modal-sm': this.small,
                    'modal-full': this.full
                }
            }
        }
    }
</script>
