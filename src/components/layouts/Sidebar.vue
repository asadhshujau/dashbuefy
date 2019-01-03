<template>
    <aside class="menu app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
        <section class="hero is-light">
          <div class="hero-body" style="padding: 2rem 1rem;">
            <article class="media" style="display:flex; align-items: center;">
              <div class="media-content">
              <figure class="media-left" role="button">
                <p class="image is-64x64">
                  <img class="is-rounded" src="https://images.unsplash.com/photo-1544570768-c01eb520ee37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80">
                </p>
              </figure>
                <div class="content">
                  <router-link :to="{name: 'profile'}" :exact="true">
                    <strong class="has-text-link" @click="toggle">Mary Jane Doe</strong>
                  </router-link>
                  <div class="help">maryjanedoe@example.com</div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <ul class="menu-list">
            <li @click="toggle">
                <router-link :to="{name: 'home'}" :exact="true" class="is-radiusless">
                    <span class="icon"><i class="mdi mdi-chart-bubble"></i></span>
                    Home
                </router-link>
            </li>
            <li @click="toggle">
                <router-link :to="{name: 'about'}" :exact="true"  class="is-radiusless">
                    <span class="icon"><i class="mdi mdi-help-circle-outline"></i></span>
                    About
                </router-link>
            </li>
            <li @click="toggle">
                <router-link :to="{name: 'login'}" :exact="true"  target="_blank" class="is-radiusless">
                    <span class="icon"><i class="mdi mdi-login"></i></span>
                    Login
                </router-link>
            </li>
            <li class="is-hidden-desktop">
                <a @click="logout">
                    <span class="icon"><i class="mdi mdi-power"></i></span>
                    Logout
                </a>
            </li>
        </ul>
    </aside>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props: {
    show: Boolean
  },
  computed: mapGetters({
    sidebar: 'sidebar',
    device: 'device'
  }),
  methods: {
    ...mapActions([
        'toggleSidebar'
    ]),

    logout() {
      window.location.replace('#/login');
    },
    toggle() {
      if (this.device.isMobile) {
        this.toggleSidebar({opened: !this.sidebar.opened});
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/mixins';
.app-sidebar {
  position: fixed;
  top: 52px;
  left: 0;
  bottom: 0;
  padding: 0px 0 50px;
  width: 250px;
  min-width: 45px;
  max-height: 100vh;
  height: calc(100% - 50px);
  z-index: 1024 - 1;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
  @include mobile() {
    transform: translate3d(-250px, 0, 0);
  }
  .icon {
    vertical-align: baseline;
    &.is-angle {
      position: absolute;
      right: 10px;
      transition: transform .377s ease;
    }
  }
  .menu-label {
    padding-left: 5px;
  }
  .menu-list {
    li a {
      // border-radius: 0px;
      &[aria-expanded="true"] {
        .is-angle {
          transform: rotate(180deg);
        }
      }
    }
    li a + ul {
      margin: 0 10px 0 15px;
    }
  }
}
</style>
