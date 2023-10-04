<template>
  <div>
    <button class="btn-site">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "btn-site",
};
</script>

<style lang="scss" scoped>
.btn-site {
  @apply text-ordinary font-medium leading-5 border-def py-[9px] px-[49.5px]  sm:py-[9px] sm:px-[52.5px] hover:bg-[#FFF145]  ease-in-out duration-300;
}
</style>
