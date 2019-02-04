require('../scss/main.scss');
require('./vue/vue');

console.log('ENVIRONMENT', process.env.NODE_ENV)
// for development
if (process.env.NODE_ENV === 'development') {
    require('../../public/index.html')
}