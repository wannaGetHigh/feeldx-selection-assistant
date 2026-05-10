import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { apiClient } from '@/lib/axios'

export class BaseApiAdapterClass {
  protected readonly http: AxiosInstance

  constructor(http: AxiosInstance = apiClient) {
    this.http = http
  }

  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.http.get<T>(url, config)
    return data
  }

  protected async post<T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.http.post<T>(url, body, config)
    return data
  }

  protected async put<T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.http.put<T>(url, body, config)
    return data
  }

  protected async patch<T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.http.patch<T>(url, body, config)
    return data
  }

  protected async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.http.delete<T>(url, config)
    return data
  }
}
