import axios from 'axios'
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

export const MboApi = new HttpClient(
  axios.create(mboSettingDefaultConfig),
  getCredentialWithAccessToken
)
export const OneOnOneApi = new HttpClient(
  axios.create(oneOnOneDefaultConfig),
  getCredentialWithAccessToken
)
