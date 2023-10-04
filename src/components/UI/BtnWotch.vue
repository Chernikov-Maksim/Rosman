<template>
  <div>
    <button class="btn-wotch">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "btn-wotch",
};
</script>

<style lang="scss" scoped>
.btn-wotch {
  @apply text-ordinary font-medium leading-5 text-[white] bg-[#000000] py-2.5  px-[43.5px] sm:py-2.5 sm:px-[45.5px] hover:bg-[#FFF145] hover:text-[#000000] ease-in-out duration-300;
}
</style>
