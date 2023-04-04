import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRouter } from "next/router";
import "react-tabs/style/react-tabs.css";

import MetricsComponent from "../../features/MetricsComponent";

const Agent = () => {
  const nameMetrics = ["rss", 'rrs'];
  const metrics = [
    [
      {
        value: 1,
        date: "4:27",
      },
      {
        value: 2,
        date: "4:30",
      },
      {
        value: 5,
        date: "4:35",
      },
      {
        value: 3,
        date: "4:38",
      },
      {
        value: 8,
        date: "4:45",
      },
      {
        value: 10,
        date: "5:10",
      },
      {
        value: 20,
        date: "5:15",
      },
      {
        value: 15,
        date: "5:20",
      },
      {
        value: 23,
        date: "5:30",
      },
      {
        value: 30,
        date: "5:50",
      },
    ],
    [
      {
        value: 1,
        date: "4:28",
      },
      {
        value: 2,
        date: "4:30",
      },
      {
        value: 5,
        date: "4:35",
      },
      {
        value: 3,
        date: "4:38",
      },
      {
        value: 6,
        date: "4:45",
      },
      {
        value: 15,
        date: "5:10",
      },
    ],
  ];

  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();
  const { uuid } = router.query;
  return (
    <section className=" min-h-screen relative bg-gradient-to-tr from-indigo-300 to-purple-400 pt-20 ">
      <div className=" w-4/5 min-h-[3s0vh] bg-none border-solid border border-white mx-auto py-5 rounded-2xl px-4 lg:lg:max-w-4xl">
        <h1 className="text-3xl text-center text-black font-bold mb-6">
          Agent {uuid}
        </h1>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {nameMetrics.length && nameMetrics.map((name) => <Tab key={name}>{name}</Tab>)}
          </TabList>
          {metrics.length &&
            metrics.map((metric) => (
              <TabPanel key={Date.now() + (Date.now() * 2 / 100 * Math.random())}>
                <MetricsComponent metrics={metric} />
              </TabPanel>
            ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Agent;
