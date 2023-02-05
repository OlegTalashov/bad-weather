<template>
    <div>
        {{ HeaderMsg }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


export default {
    name: 'Header',
    data(){ 
        return {
            HeaderMsg: "HeaderMsgContent"
        }
    }
}

</script>