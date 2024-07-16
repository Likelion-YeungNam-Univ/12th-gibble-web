import axios from 'axios'
import { apiServer } from '@/config/api'

export const axios = axios.create({
    baseURL: apiServer
})