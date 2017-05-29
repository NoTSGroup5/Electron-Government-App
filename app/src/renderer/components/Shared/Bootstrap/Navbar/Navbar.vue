<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" :href="baseUrl">{{ title }}</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <slot></slot>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
      props: {
        title: {
          type: String,
          required: true
        },
        baseUrl: {
          type: String,
          default: '#'
        }
      }
    }
</script>