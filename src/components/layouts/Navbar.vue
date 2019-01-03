<template>
    <nav class="navbar is-link is-fixed-top" role="navigation" aria-label="main navigation">
         <div class="navbar-brand is-pulled-left">
            <a role="button" class="navbar-burger burger is-hidden-tablet" @click="toggleSidebar({opened: !sidebar.opened})" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <a class="navbar-item" @click="logout">Logout</a>
            </div>
        </div>
    </nav>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    props: {
        show: Boolean
    },

    computed: mapGetters({
        sidebar: 'sidebar'
    }),

    methods: {
        ...mapActions([
            'toggleSidebar'
        ]),

        logout() {
            // this.$auth.logout({
            //     redirect: 'Home',
            //     makeRequest: false
            // })
        }
    }
}
</script>
<style lang="scss" scoped>

.app-navbar {
    position: fixed;
    min-width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
    .container {
        margin: auto 10px;
    }
    .nav-right {
        align-items: stretch;
        align-items: stretch;
        flex: 1;
        justify-content: flex-end;
        overflow: hidden;
        overflow-x: auto;
        white-space: nowrap;
    }
}

.hero-brand {
    .vue {
        margin-left: 10px;
        color: #36AC70;
    }
    .admin {
        color: #28374B;
    }
}

</style>
