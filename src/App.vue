<template>
  <div id="app">
      <!-- <n-progress-container></n-progress-container> -->
      <div v-if="$router.currentRoute.name == 'login'">
            <transition mode="out-in" enter-active-class="fadeIn" enter-leave-class="fadeOut" appear>
                <router-view class="animated"></router-view>
            </transition>
      </div>
      <div v-else>
        <navbar :show="true"></navbar>
        <sidebar :show="sidebar.opened && !sidebar.hidden"></sidebar>
        <app-main></app-main>
        <div class="sidebar-mobile-overlay" @click="toggleSidebar({opened: !sidebar.opened})"
            v-if="showOverlay">
        </div>
      </div>
</div>
</template>
<script>
import Navbar from './components/layouts/Navbar';
import Sidebar from './components/layouts/Sidebar';
import AppMain from './components/layouts/AppMain';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    Navbar,
    Sidebar,
    AppMain
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

  computed: {
    ...mapGetters({
      sidebar: 'sidebar',
      device: 'device'
    }),

    showOverlay() {
      return this.sidebar.opened  && this.device.isMobile
    }
  },

  methods: {
    ...mapActions([
      'toggleDevice',
      'toggleSidebar'
    ])
  }
}
</script>

<style lang="scss">
@import '@/scss/app.scss';
@import '~animate.css';
.animated {
  animation-duration: .377s;
}

.sidebar-mobile-overlay {
  top: 0px;
  left: 0px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>
