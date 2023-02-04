<template>
    <div>
        {{ HeaderMsg }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


    @Component
    export default class Header extends Vue {
        HeaderMsg: string = "HeaderMsgContent"
    }

</script>