import * as axios from 'axios'

declare module 'axios' {
  interface AxiosResponse<T> {
    success?: boolean,
    data: T
  }
}