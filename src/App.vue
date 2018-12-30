<template>
  <div id="app">
      <!-- <n-progress-container></n-progress-container> -->
      <navbar :show="true"></navbar>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/scss/app.scss';
</style>
