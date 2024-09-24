import { useContract, useContractEvents } from "@thirdweb-dev/react";

import { getContract, getContractEvents, readContract, prepareEvent } from "thirdweb";
import { useReadContract } from "thirdweb/react";
import { polygonAmoy } from "thirdweb/chains";

import { STATUS_CONTRACT_ADDRESS } from "@/constants/constants";
import EventCard from "@/components/eventCard";
import { client } from "@/app/client";

console.log("Client:", client);

export default function StatusEvents() {
    console.log("Inside StatusEvents component"); 
    
    const { contract } = useContract(STATUS_CONTRACT_ADDRESS);

    const { 
        data: statusEvents,
        isLoading: isStatusEventsLoading,
    } = useContractEvents(
        contract,
        "StatusUpdated",
        {
            subscribe: true,
        }
    );

    if (!client) {
        console.error("Client is undefined");
        return <div>Error: Thirdweb client is not initialized</div>;
    }

    // Thirdweb V5 SDK
    // const contract = getContract({
    //     client,
    //     address: STATUS_CONTRACT_ADDRESS,
    //     chain: polygonAmoy,
    // });

    // const data = await readContract({ 
    //     contract, 
    //     method: "function statuses(address) view returns (string)", 
    //     params: [] 
    //   })

    // const preparedEvent = prepareEvent({ 
    //     contract, 
    //     signature: "event StatusUpdated(address indexed user, string newStatus, uint256 timestamp)" 
    //   });
    //   const events = await getContractEvents({ 
    //     contract, 
    //     events: [preparedEvent] 
    //   });

  return (
    <div style={{ minWidth: "500px"}}>
       {!isStatusEventsLoading && statusEvents && (
        statusEvents.slice(0, 30).map((event, index) => (
            <EventCard
                key={index}
                walletAddress={event.data.user}
                newStatus={event.data.newStatus}
                timeStamp={event.data.timeStamp}
            />
        ))
       )}
    </div>
  );
};

