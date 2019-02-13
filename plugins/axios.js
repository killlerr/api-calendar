export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
    })
    
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)

      if ([401, 403].includes(code)) {
        app.$auth.logout();
      }

      return Promise.reject(error);
    })
}