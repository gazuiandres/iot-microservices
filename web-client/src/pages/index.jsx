import { useEffect, useState } from "react";
import { io } from 'socket.io-client'
import Link from "next/link";

import {getAgents} from "../services/agent.service";
import agentsSocket from "../hooks/useAgentsSocket";

const Home = () => {
  const [agents, setAgents] = useState(null);
  const [socket, setSocket] = useState(null);

  agentsSocket({socket, agents, setAgents})

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAgents();
        setAgents(data);
        setSocket(io(`${process.env.NEXT_PUBLIC_WEB_SERVER}/agents`));
      } catch (error) {
        console.error(error);
      }
    })()

    return (() => {
      setSocket(null)
    })
  }, [])
  return (
    <section className=" min-h-screen relative bg-gradient-to-tr from-indigo-300 to-purple-400 pt-20 ">
      <div className=" w-4/5 min-h-[50vh] bg-none border-solid border border-white mx-auto py-5 rounded-2xl px-4 lg:lg:max-w-4xl">
        <h1 className="text-3xl text-center text-black font-bold mb-6">
          Agents
        </h1>
        <div className=" w-full mx-auto md:w-3/4 lg:max-w-2xl">
          {agents &&
            agents.map(({ uuid, connected }) => (
              <Link
                key={uuid}
                href={`/agent/${uuid}`}
                className="card__container"
              >
                <h3 className="">{uuid}</h3>
                <p className="card__statusContainer">
                  <span>Status:</span>
                  {!connected && (
                    <span className="text-sm text-red-500">offline</span>
                  )}
                  {connected && (
                    <span className="text-sm text-green-500">online</span>
                  )}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
