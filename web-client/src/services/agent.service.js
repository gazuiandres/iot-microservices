import axios from 'axios'

export const getAgents = async () => {
  return axios.get(`${process.env.NEXT_PUBLIC_WEB_SERVER}/agents`)
}


