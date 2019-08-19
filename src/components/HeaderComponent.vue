<template>
  <header class="header__section">
    <img class="header__section__logo" src="../assets/icons/logo.svg" alt="Venue Search">
  </header>
</template>

<style lang="scss">
  .header__section {
    position: relative;
    height: 65vh;
    text-align: center;
    background: url('../assets/img/coffee-corner.jpg') no-repeat center center fixed;
    background-size: cover;
    @media (max-width: 599px), (min-height: 767px) {
      height: 40vh;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
    &__logo {
      position: relative;
      z-index: 1;

      @media (max-width: 599px) {
        width: 100%;
      }
    }
  }

</style>
