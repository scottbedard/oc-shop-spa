import axios from 'axios';
import Vue from 'vue';

//
// Configure our HTTP client
//
let token = document.querySelector('meta[name=token]').getAttribute('content');
axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

//
// Plugins
//
require('./plugins/router');
require('./plugins/vuex');

//
// Directives
//
require('./directives/linkable');

//
// Filters
//
require('./filters/money');

//
// Register global components
//
import components from 'src/components/global';
Object.keys(components).forEach(tag => Vue.component(tag, components[tag]));
