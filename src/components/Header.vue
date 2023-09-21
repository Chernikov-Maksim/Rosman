<template>
  <div class="header">
    <div>
      <div class="flex items-center">
        <img src="../../public/images/header/logo.svg" alt="logo" />
        <nav>
          <ul class="flex items-center">
            <li class="flex items-center" v-for="link in links" :key="link.id">
              <a href="#">{{ link.link }}</a>
              <img v-if="link.src" :src="link.src" alt="Link Image" />
              <span v-else>{{ link.link }}</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          link: "Каталог",
          src: "../../public/images/header/itemKatalog.svg",
        },
        { id: 2, link: "Бренды" },
        { id: 3, link: "Новости" },
        { id: 4, link: "РОСМЭН", src: "../../public/images/header/select.svg" },
        { id: 5, link: "Партнерам" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
