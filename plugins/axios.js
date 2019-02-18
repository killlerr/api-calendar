export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
    })
    
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      console.log(error)
      if ([401, 403].includes(code)) {
        // Vue.auth.logout()
        // Auth.logout()
        console.log('Error')
      }

      return Promise.reject(error);
    })
}