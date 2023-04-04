import axios from 'axios'

export const getMetricTypes = async (agentUuid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_WEB_SERVER}/metrics/${agentUuid}`)
}

export const getMetrics = async ({ agentUuid, metricType }) => {
  return axios.get(`${process.env.NEXT_PUBLIC_WEB_SERVER}/metrics/${metricType}/${agentUuid}`)
}


