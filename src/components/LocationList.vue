<template>
  <ul class="location-list">
    <li class="location-list__venue"
        v-for="(venueData, index) in venues"
        :key="venueData.venue.id"
    >
      <div class="location-list__img">
        <img :src="photos[index]"
        />
      </div>
      <div class="venue-info">
        <h3 class="venue-info__name">{{ venueData.venue.name }}</h3>
        <span class="venue-info__address">{{ venueData.venue.location.address }}</span>
        <span class="venue-info__price"> {{ venueData.venue.price }}</span>
        <span v-if="venueData.venue.isOpen" class="venue-info__openStatus">Open now</span>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
      photos: {},
      listHover: false,
    };
  },
  props: {
    venues: Array,
  },
  watch: {
    // should get the photo url from API
    venues: (values) => {
      values.map((value, index) => {
        const groups = value.venue.photos.groups;
        if (groups.length !== 0 && groups[0].items.length !== 0) {
          this.photos[index] = groups[0].items[0].prefix + groups[0].items[0].suffix;
        }
        return value;
      });
    },
  },
};
</script>

<style lang="scss">

  .location-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    position: relative;
    width: 100%;
    cursor: pointer;
    transition: transform .2s cubic-bezier(.075, .820, .165, 1);
    &__venue {
      width: 48%;
      margin: 10px 0;
      box-shadow: 0 0 5px rgba(0,0,0,.3);
      border-radius: 3px;
      @media (max-width: 599px) {
        width: 100%;
      }
    }
    &__img {
      position: relative;
      overflow: hidden;
      padding-top: 56.25%;
      background-color: var(--main-color--lighter);
      img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .hovered {
    transform: scale(1.05);
  }
  .venue-info {
    display: flex;
    flex-direction: column;
    padding: 20px;
    &__name {
      font-size: 1.5rem;
      text-overflow: ellipsis;
      @media (max-width: 599px) {
        font-size: 1.2rem;
      }
    }
    &__address {
      color: var(--color-darkgrey);
      opacity: .4;
      font-size: 18px;
    }
    &__openStatus {
      color: var(--color-green);
    }
  }

</style>
