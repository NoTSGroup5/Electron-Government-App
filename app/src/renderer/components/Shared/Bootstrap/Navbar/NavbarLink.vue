<template>
    <li>
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
        }
      }
    }
</script>