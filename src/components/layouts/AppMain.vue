<template>
    <section class="app-main" :style="[hiddenSidebarStyle]">
        <div class="container is-fluid is-marginless app-content">
            <transition mode="out-in" enter-active-class="fadeIn" enter-leave-class="fadeOut" appear>
                <router-view class="animated"></router-view>
            </transition>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            sidebar: 'sidebar'
        }),
        hiddenSidebarStyle() {
            return this.sidebar.hidden ? {'margin-left': 0} : null;
        }
    }
}
</script>
<style lang="scss">
@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/mixins';
.app-main {
    padding-top: 0px;
    margin-left: 250px;
    transform: translate3d(0, 0, 0);
    @include mobile() {
        margin-left: 0;
    }
}
.app-content {
    padding: 20px;
}
</style>

