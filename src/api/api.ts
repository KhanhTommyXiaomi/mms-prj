import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { ApiConstant } from '../const'

class HttpService {
  axios: any
  getCredential: any
  constructor(axios: any, getCredential: any) {
    this.axios = axios
    this.getCredential = getCredential
  }
  request(config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.request(config)
  }
  get(url: string, config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.get(url, config)
  }
  post(url: string, data?: any, config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.post(url, data, config)
  }
  put(url: string, data?: any, config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.put(url, data, config)
  }
  patch(url: string, data?: any, config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.patch(url, data, config)
  }
  delete(url: string, config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.delete(url, config)
  }
}

const defaultConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    ...ApiConstant.HEADER_DEFAULT,
  },
  timeout: ApiConstant.TIMEOUT,
}

const getCredentialWithAccessToken = (config: any = {}) => {
  const accessToken = 'blabla'
  const accessTokenKey = 'access-token'
  if (!accessToken) return config
  return {
    ...config,
    headers: {
      ...(config.headers || {}),
      [accessTokenKey]: accessToken,
    },
  }
}

const configInterceptors = (axiosClient: any) => {
  axiosClient.interceptors.response.use(
    (res: AxiosResponse) => res.data,
    (err: Error) => Promise.reject(err)
  )
  return axiosClient
}

const axiosClient = configInterceptors(axios.create(defaultConfig))

const ApiClient = new HttpService(axiosClient, getCredentialWithAccessToken)

export default ApiClient
