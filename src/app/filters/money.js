import Vue from 'vue';

Vue.filter('money', value => '$' + value.toFixed(2));
