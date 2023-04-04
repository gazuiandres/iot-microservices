import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRouter } from "next/router";
import "react-tabs/style/react-tabs.css";

import MetricsComponent from "../../features/MetricsComponent";
import { getMetricTypes } from "../../services/metrics.service";

const Agent = () => {

  const [tabIndex, setTabIndex] = useState(0);
  const [metricTypes, setMetricTypes] = useState(null);

  const router = useRouter();
  const { uuid } = router.query;

  const formatMetricTypes = (types) => {
    return types.map((type) => {
      return type._id;
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getMetricTypes(uuid);
        const typesFormated = formatMetricTypes(data);
        setMetricTypes(typesFormated);
      } catch (error) {}
    })();
  }, []);

  return (
    <section className=" min-h-screen relative bg-gradient-to-tr from-indigo-300 to-purple-400 pt-20 ">
      <div className=" w-4/5 min-h-[3s0vh] bg-none border-solid border border-white mx-auto py-5 rounded-2xl px-4 lg:lg:max-w-4xl">
        <h1 className="text-3xl text-center text-black font-bold mb-6">
          Agent: {uuid}
        </h1>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {metricTypes &&
              metricTypes.map((name) => <Tab key={name}>{name}</Tab>)}
          </TabList>
          {metricTypes &&
            metricTypes.map((metricType) => (
              <TabPanel key={metricType}>
                <MetricsComponent agentUuid={uuid} metricType={metricType} />
              </TabPanel>
            ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Agent;
