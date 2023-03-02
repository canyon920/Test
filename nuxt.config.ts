// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: true,
    plugins: [
        '~plugins.axios',
        '@nuxtjs@proxy',
        ['cookie-universal-nuxt', {alias: 'cookiz'}]
    ],
    axios: {
        proxy; true,
        baseURL: 'http://182.168.1.29:3000'
    },
    proxy: {
        '/v21/': {
            target: 'http://192.168.1.28:3000'
        }
    }
})
