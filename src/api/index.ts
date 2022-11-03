import axios, { AxiosResponse } from 'axios'
import { ApiConstant } from '../const'
import HttpClient from './httpClient'

export const defaultConfig = {
  headers: {
    ...ApiConstant.HEADER_DEFAULT,
  },
  timeout: ApiConstant.TIMEOUT,
}

export const configWithCustomParams = {
  ...defaultConfig,
  paramsSerializer(params: any) {
    // refactor search params
    return params
  },
}

const mboSettingDefaultConfig = { ...defaultConfig, baseURL: ApiConstant.MBO_SETTING_BASE_URL }
const oneOnOneDefaultConfig = { ...defaultConfig, baseURL: ApiConstant.ONE_ON_ONE_BASE_URL }

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

const mboAxiosClient = configInterceptors(axios.create(mboSettingDefaultConfig))
const oneOnOneAxiosClient = configInterceptors(axios.create(oneOnOneDefaultConfig))

export const MboApi = new HttpClient(mboAxiosClient, getCredentialWithAccessToken)
export const OneOnOneApi = new HttpClient(oneOnOneAxiosClient, getCredentialWithAccessToken)
