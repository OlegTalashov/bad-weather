<script lang="ts" src="./GoodWeather.ts" />

<template>
  <div id="app">
    <div class="remove-this-div">
      <Header />
      {{ TestMsg }}
    </div>

  </div>
</template>


<style lang="scss">

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
