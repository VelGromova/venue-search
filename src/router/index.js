import VueRouter from 'vue-router';
import Vue from 'vue';
import MainComponent from '@/components/MainComponent';
import VenueDetail from '@/components/VenueDetail';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: MainComponent,
    },
    {
      path: '/venue/:id',
      name: 'venueDetail',
      component: VenueDetail,
    },
  ],
});
