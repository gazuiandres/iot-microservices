import { useEffect } from "react";

function metricsSocket({ agentUuid, metricType, setMetrics, metrics, socket }) {

  const addMetric = (metric) => {
    const metricsCopy = [...metrics]
    metricsCopy.shift()
    setMetrics([
      ...metricsCopy,
      metric
    ])
  }

  useEffect(() => {

    if (socket) {
      socket.emit("watch-agent-metric", { agentUuid, metricType })
      socket.on("add_metric", addMetric)
    }

    return (() => {
      if (socket) {
        socket.removeAllListeners();
        socket.disconnect();
      }
    })
  }, [socket])

  return true
}

export default metricsSocket
