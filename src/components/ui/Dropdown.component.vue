<template>
  <div class="dropdown__container">
    <div class="dropdown__title">{{ title }}</div>
    <div class="dropdown__option">
      <a v-for="option in optionsList">
        {{ option.name }}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dropdown',
    data: () => ({
      optionsList: [
        { id: 1, name: 'Valinta 1' },
        { id: 2, name: 'Valinta 2' }
      ],
      open: false
    }),
    props: {
      title: {
        type: String
      }
    }
  }
</script>

<style lang="scss">
  $dropdown-option-color: #f9f9f9;
  $color-text: #333333;

  .dropdown {
    &__container {
      height: 100%;
      position: relative;
      display: inline-block;
      color: white;

      &:hover .dropdown__option {
        display: block;
      }
    }
    &__title {
      height: 100%;
      font-size: 16px;
      cursor: pointer;
      border: none;
      background: transparent;
      color: inherit
    }
    &__option {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: $dropdown-option-color;
      min-width: 100%;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;

      a {
        color: $color-text;
        padding: 12px 16px;
        text-decoration: none;
        display: block;

        &:hover {
          background-color: rgba(0,0,0,0.05);
        }
      }
    }
  }
</style>