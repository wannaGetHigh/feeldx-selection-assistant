import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api'
const parsedTimeout = Number(import.meta.env.VITE_API_TIMEOUT)
const TIME_OUT = Number.isFinite(parsedTimeout) && parsedTimeout > 0 ? parsedTimeout : 15_000

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: { 'Content-Type': 'application/json' },
})
