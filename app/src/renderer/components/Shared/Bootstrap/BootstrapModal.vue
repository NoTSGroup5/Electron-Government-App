<template>
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" :aria-labelledby="ariaLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">{{ title }}</h4>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Opslaan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        title: {
          type: String,
          default: 'Modal'
        },
        modalId: {
          type: String,
          required: true,
        },
        ariaLabel: {
          type: String,
          default: 'myModal'
        }
      }
    }
</script>