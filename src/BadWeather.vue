<template>
  <div id="app">
    <div class="remove-this-div">
      <Header />
      {{ TestMsg }}
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/header/Header.vue';

// @Component({
//   name: 'Bad Weather',
//   components: {
//     Header,
//   }
// })
// export default class BadWeather extends Vue {
//   TestMsg: string = 'TestMsgContent';
// }

export default {
  name: 'BadWeather',
  components: {
    Header
  },
  data() {
    return {
      TestMsg: 'Hello',
    }
  }
}
</script>

<style>

/*************** TODO Remove */
.remove-this-div{
  position: fixed;
  width: 320px;
  height: 500px;
  top: 30%;
  left: 40%;
  background-color: bisque;
}

</style>
