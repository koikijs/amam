require('babel-polyfill');
const normalize = require('koiki').normalize;

const title = 'amam';
const description = 'Attendence Management System';

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

const appHost = process.env.GLOBAL_HOST || 'localhost';
const appPort = Number(process.env.GLOBAL_PORT || 3000);
const base = normalize(`${appHost}:${appPort}`);

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: Number(process.env.PORT || 3000),
  api: {
    host: 'chaus.herokuapp.com',
    port: Number('443')
  },
  app: {
    base,
    host: appHost,
    port: appPort,
    title,
    description,
    head: {
      titleTemplate: `${title} - %s`,
      meta: [
        { name: 'description', content: description },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: title },
        { property: 'og:image', content: 'favicon.ico' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:card', content: 'summary' },
        { property: 'og:creator', content: 'koikijs' },
        { property: 'og:image:width', content: '300' },
        { property: 'og:image:height', content: '300' }
      ]
    },
    statics: {
      link: [
        { rel: 'shortcut icon', href: 'favicon.ico' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lobster' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/normalize.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
      ]
    }
  }
}, environment);
