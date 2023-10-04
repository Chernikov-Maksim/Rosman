<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-container">
        <div class="header-row">
          <a href="#">
            <img
              src="../../public/images/header/logo.svg"
              alt="logo"
              class="header-logo"
          /></a>
          <a href="#">
            <img
              class="mobile-logo"
              src="../../public/images/header/mobileLogo.svg"
              alt="logo"
            />
          </a>
          <a href="#" class="catalog">
            <img
              src="../../public/images/header/itemKatalog.svg"
              alt="icon"
              class="catalog-icon"
            />
            <span class="catalog-text">Каталог</span>
          </a>
          <nav class="navigation">
            <ul class="links">
              <li>
                <a class="link" href="#">
                  <span>Бренды</span>
                </a>
              </li>
              <li>
                <a class="link" href="#">
                  <span>Новости</span>
                </a>
              </li>
              <li>
                <a class="link select" href="#">
                  <span>РОСМЭН</span>
                  <img src="../../public/images/header/select.svg" alt="icon" />
                </a>
              </li>
              <li>
                <a class="link" x href="#">
                  <span>Партнерам</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="row-right">
          <div class="item">
            <img
              class="item-icon"
              src="../../public/images/header/search.svg"
              alt="search"
            />
            <img
              class="item-icon icon-none"
              src="../../public/images/header/vois.svg"
              alt="vois"
            />
            <img
              class="item-icon"
              src="../../public/images/header/like.svg"
              alt="like"
            />
          </div>
          <div class="lang">
            <button
              :class="{
                'btn-ru': language === 'RU',
                'btn-eng': language === 'ENG',
                active: language === 'RU',
              }"
              @click="changeLanguage('RU')"
            >
              RU
            </button>
            <span>/</span>
            <button
              :class="{
                'btn-ru': language === 'ENG',
                'btn-eng': language === 'RU',
                active: language === 'ENG',
              }"
              @click="changeLanguage('ENG')"
            >
              ENG
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "RU",
    };
  },
  methods: {
    changeLanguage(lang) {
      this.language = lang;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply bg-[#FFF145] transform-none bg-no-repeat bg-auto relative sm:shadow-[0px_-4px_8px_0px_#bdad0080_inset] sm:transform -skew-y-1;

  &::after {
    @apply bg-[#FFF145] bg-no-repeat bg-auto absolute h-[200px] w-full mt-[-250px] z-[-1] block;
    content: "";
  }
}

.header-wrapper {
  @apply max-w-7xl mx-auto px-3 sm:px-6 2xl:px-0;
}

.header-container {
  @apply flex items-center justify-between py-3 transform-none sm:transform skew-y-1 sm:py-6;
}

.header-logo {
  @apply w-[121.5px] h-[30px] hidden sm:flex;
}
.mobile-logo {
  @apply flex sm:hidden w-[43px] h-[40px];
}
.catalog {
  @apply hidden  items-center mr-6 ml-[58px] py-[9px] pl-[13.5px] pr-3 border-solid border-[1px] border-[#000000] sm:flex;
  .catalog-icon {
    @apply w-[15px] h-[15px] mr-[10.5px];
  }
  .catalog-text {
    @apply font-medium text-[17px] leading-6;
  }
}

.header-row {
  @apply flex items-center;
  .navigation {
    @apply hidden lg:flex;
  }
  .links {
    @apply flex items-center gap-8;
    .link {
      @apply flex items-center;
      span {
        @apply font-normal text-mini leading-[18px];
      }
      img {
        @apply w-[11px] h-[11px] ml-2;
      }
    }
    .select {
      span {
        @apply uppercase;
      }
    }
  }
}

.row-right {
  @apply flex flex-row-reverse items-center gap-[26px] sm:gap-[34px] sm:flex-row;

  .item {
    @apply flex items-center gap-[20px];
    .item-icon {
      @apply w-5 h-5 cursor-pointer;
    }
    .icon-none {
      @apply hidden sm:flex;
    }
  }
  .lang {
    @apply flex items-center gap-1 text-[17px] font-medium;
  }
  .btn-ru {
    @apply text-[black];
  }

  .btn-eng {
    @apply opacity-50;
  }

  .active {
    @apply text-[#000000] ease-in-out duration-300;
  }
}
</style>
