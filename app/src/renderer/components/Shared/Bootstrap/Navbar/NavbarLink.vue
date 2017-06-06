<template>
    <li :class="{'active' : active}">
        <router-link :to="to">
            <slot>Link</slot>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: {
            to: {
                organisationType: String,
                required: true
            },
            active: {
                organisationType: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>