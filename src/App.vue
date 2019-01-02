<template>
  <div id="app">
      <!-- <n-progress-container></n-progress-container> -->
      <navbar :show="true"></navbar>
      <sidebar :show="sidebar.opened && !sidebar.hidden"></sidebar>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-view/>
  </div>
</template>
<script>
import Navbar from './components/layouts/Navbar';
import Sidebar from './components/layouts/Sidebar';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    Navbar,
    Sidebar
  },

  beforeMount() {
    const { body } = document;
    const WIDTH = 768;
    const RATIO = 3;

    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect();
        let isMobile = rect.width - RATIO < WIDTH;
        this.toggleDevice(isMobile ? 'mobile' : 'other');
        this.toggleSidebar({opened: !isMobile});
      }
    }

    document.addEventListener('visibilitychange', handler);
    window.addEventListener('DOMContentLoaded', handler);
    window.addEventListener('resize', handler);
  },

  computed: mapGetters({
    sidebar: 'sidebar'
  }),

  methods: mapActions([
    'toggleDevice',
    'toggleSidebar'
  ])
}
</script>

<style lang="scss">
@import '@/scss/app.scss';
</style>
