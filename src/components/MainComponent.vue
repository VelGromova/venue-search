<template>
  <div>
    <header-component />
    <section class="content">
      <h2 class="title">Find the venue nearby</h2>
      <div class="filter-form">
        <range-input
          v-model="radius"
          :min="1"
          :max="20"
          :step="1">
          <label slot="label">Radius: {{ radius }} km</label>
        </range-input>
        <range-input
          v-model="limit"
          :min="10"
          :max="1000"
          :step="5">
          <label slot="label">Limit: {{ limit }} venues</label>
        </range-input>
        <div class="filter-form__section">
          <v-select
            :placeholder="'Please, select the category'"
            v-model="section"
            :options="sections.map(data => data.toUpperCase())"
          />
        </div>
        <h3 class="filter-form__title">What's your price range ?</h3>
        <div class="filter-form__wrapper">
           <span :class="{ active: activePrice === index }"
                 v-for="(value, index) in prices"
                 class="filter-form__value"
                 :key="`${index}-price`"
                 v-on:click="activePrice = index"
           >{{value}}</span>
        </div>
        <span class="filter-form__value filter-form__open-now"
              :class="{ active: isOpen }"
              v-on:click="isOpen = !isOpen"
        >Open Now</span>
      </div>
      <location-list :venues="venues" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import vSelect from 'vue-select';
import RangeInput from './ui/RangeInput';
import LocationList from './LocationList';
import HeaderComponent from './HeaderComponent';
import HTTP from './../providers/http';

export default {
  components: {
    HeaderComponent,
    LocationList,
    vSelect,
    RangeInput,
  },

  data() {
    return {
      radius: 1,
      isOpen: false,
      limit: 10,
      section: '',
      sections: [
        'food',
        'drinks',
        'coffee',
        'shops',
        'arts',
        'outdoors',
        'sights',
        'trending',
      ],
      activePrice: 0,
      prices: ['$', '$$', '$$$', '$$$$'],
      latitude: 0.00,
      longitude: 0.00,
      venues: [],
    };
  },

  mounted() {
    this.currentGeo();
  },

  watch: {
    radius() { this.getVenues(); },
    activePrice() { this.getVenues(); },
    isOpen() { this.getVenues(); },
    limit() { this.getVenues(); },
    section() { this.getVenues(); },
  },

  computed: {
    ...mapGetters(['getGeo']),
  },

  methods: {
    ...mapActions(['currentGeo']),
    async getVenues() {
      const data = {
        longitude: this.getGeo.longitude,
        latitude: this.getGeo.latitude,
        radius: this.radius * 1000,
        isOpen: this.isOpen,
        limit: this.limit,
        section: this.section,
        price: `${this.activePrice + 1}`,
      };

      this.venues = await HTTP.filterVenuesInArea(data);
    },
  },
};
</script>

<style lang="scss" scoped>
  .filter-form {
    margin: 2rem 0;
    @media (max-width: 599px) {
      margin: 1.5rem 0;
    }
    &__title {
      margin: 1rem 0;
    }
    &__section {
      width: 70%;
      max-width: 480px;
      @media (max-width: 599px) {
        width: 100%;
      }
    }
    &__wrapper {
      @media (max-width: 599px) {
        display: flex;
        justify-content: space-between;
      }
    }
    &__value {
      border: 1px solid rgba(60, 60, 60, .26);
      padding: 0.5rem 1rem;
      margin-right: 3px;
      cursor: pointer;
      transition: background-color .3s cubic-bezier(.075, .820, .165, 1);
      &:hover {
        background: var(--main-color--lighter);
      }
      &:focus, &:active {
        background: var(--main-color--darker);
      }
    }
    &__open-now {
      display: inline-block;
      margin-top: 2rem;
    }
    /*dynamic class styling*/
    .active {
      background: var(--main-color--darker);
    }
  }

  .range {
    margin-bottom: 2rem;
  }

</style>
