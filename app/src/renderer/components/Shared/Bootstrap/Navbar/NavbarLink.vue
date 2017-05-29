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
                type: String,
                required: true
            },
            active: {
                type: boolean,
                required: false,
                default: false
            }
        }
    }
</script>