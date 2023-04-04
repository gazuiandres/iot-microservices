import { useEffect, useState } from "react";
import { io } from 'socket.io-client'


import LineChart from "../components/LineChart";
import { getMetrics } from "../services/metrics.service";
import useMetricsSocket from "../hooks/useMetricsSocket";

const MetricsComponent = ({ metricType, agentUuid }) => {
  const [metrics, setMetrics] = useState(null);
  const [socket, setSocket] = useState(null);

  useMetricsSocket({
    agentUuid,
    metricType,
    metrics,
    socket,
    setMetrics,
  });

  const formatMetrics = (metrics) => {
    metrics.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    return metrics.map((metric) => {
      const date = new Date(metric.createdAt);
      return {
        value: metric.value,
        createdAt: date.toLocaleTimeString(),
      };
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getMetrics({ agentUuid, metricType });
        const metricFormatted = formatMetrics(data);
        setMetrics(metricFormatted);
        setSocket(io(`${process.env.NEXT_PUBLIC_WEB_SERVER}/metrics`));
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {
      setSocket(null);
    };
  }, []);

  return (
    <div className="w-full">
      <h3 className="text-center mb-4">Metric: {metricType}</h3>
      <div className="w-full h-40 lg:h-56">
        {metrics && (
          <LineChart data={metrics} nameKey="createdAt" valueKey="value" />
        )}
      </div>
    </div>
  );
};

export default MetricsComponent;
