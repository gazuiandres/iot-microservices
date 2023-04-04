import { useEffect } from "react";

function agentsSocket({ setAgents, agents, socket }) {

  const updateAgent = (agentUpdated) => {
    const agentsCopy = agents.map((agent) => {
      if (agentUpdated.uuid === agent.uuid) {
        return {
          ...agent,
          ...agentUpdated
        }
      }

      return agent
    })
    setAgents(agentsCopy)
  }

  useEffect(() => {

    if (socket) {
      socket.on("agents_updated", updateAgent)
    }

    return (() => {
      if (socket) {
        socket.removeAllListeners();
        socket.disconnect();
      }
    })
  }, [socket])
}

export default agentsSocket
