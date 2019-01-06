<template>
  <section>
    <div class="container">
      <div class="columns is-desktop">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Change Password</p>
            </header>
            <div class="card-content">
              <div class="content">
                <!-- <div class="list is-hoverable"> -->
                    <div class="list-item">First</div>
                    <div class="list-item is-active">Second</div>
                    <div class="list-item">Third</div>
                <!-- </div> -->
                <b-field label="Current Password">
                  <b-input type="password" v-model="currentPassword"  password-reveal></b-input>
                </b-field>
                <b-field label="New Password">
                  <b-input type="password" v-model="newPassword" password-reveal></b-input>
                </b-field>
                <b-field label="Confirm Password">
                  <b-input type="password" v-model="confirmPassword" password-reveal></b-input>
                </b-field>
              </div>
              <div class="content">
                <button class="button is-info" @click="changePassword">Change Password</button>
              </div>
            </div>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentPassword: null,
      newPassword: null,
      confirmPassword: null
    };
  },

  methods: {
    changePassword() {
        this.$snackbar.open('Password Updated Successfully!');
    }
  }
};
</script>
<style lang="sass" scoped>
@import "~bulma/sass/utilities/mixins.sass"
// Horizontal Card
=horizontal-card
  flex-direction: row
  display: flex
  flex-basis: 50ex
  flex-grow: 0
  flex-shrink: 1
  .card-image
    flex: 1
    .image
      min-height: 100%
  .card-content
    flex: 1
  &.is-right
    flex-direction: row-reverse

.card
  &.is-horizontal
    +tablet
      +horizontal-card
    &.is-mobile
      +mobile
        +horizontal-card
</style>
