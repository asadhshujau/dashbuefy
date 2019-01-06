<template>
<section>
<div class="hero is-fullheight-with-navbar">
    <div class="hero-body">
        <div class="container">
            <div class="columns isv-centered is-tablet">
                <div class="column is-half is-offset-one-quarter">
                    <div class="card login-card">
                        <header class="card-header login-card-header">
                            <a href="#" class="card-header-icon is-size-3 is-white">
                                <span class="icon">
                                    <i class="mdi mdi-login-variant"></i>
                                </span>
                            </a>
                            <p class="card-header-title is-size-3">Login</p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <b-field label="Email">
                                    <b-input size="is-medium" v-model="email"></b-input>
                                </b-field>
                                <b-field label="Password">
                                    <b-input type="password" size="is-medium" v-model="password" password-reveal></b-input>
                                </b-field>
                            </div>
                            <div class="content">
                                <button class="button is-medium is-outlined is-primary" @click="login">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
</template>
<script>
export default {
    data() {
        return {
            email: null,
            password: null
        }
    },

    methods: {
        login() {
            this.$router.push({name: 'home'});
        }
    }
}
</script>
<style lang="scss" scoped>
.login-card-header {
    background-color: #00d1b2;
    .card-header-icon {
        padding-left: 1.5rem;
    }
    .card-header-title, .card-header-icon {
        color: #ffffff
    }
}
</style>
