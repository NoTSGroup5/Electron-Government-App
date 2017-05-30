<template>
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" :aria-labelledby="ariaLabel">
        <div class="modal-dialog" :class="modalClass" role="document">
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
    export default {
      props: {
        title: {
          organisationType: String,
          default: 'Modal'
        },
        modalId: {
          organisationType: String,
          required: true
        },
        ariaLabel: {
          organisationType: String,
          default: 'myModal'
        },
        small: {
          organisationType: Boolean,
          default: false
        },
        large: {
          organisationType: Boolean,
          default: false
        },
        full: {
          organisationType: Boolean,
          default: false
        }
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
