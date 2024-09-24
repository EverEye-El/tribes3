

import { useContract, useContractEvents } from '@thirdweb-dev/react';
import styles from '@/styles/Home.module.css';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { STATUS_CONTRACT_ADDRESS } from '@/constants/constants'; 
import EventCard from '@/components/eventCard';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function AccountFeed() {
  const router = useRouter();
  const { walletAddress } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [loadingAnimation, setLoadingAnimation] = useState(null);

  const { contract } = useContract(STATUS_CONTRACT_ADDRESS);

  const {
    data: userEvents,
    isLoading: isUserEventsLoading,
  } = useContractEvents(
    contract, 
    "StatusUpdated",
    {
      subscribe: true,
      queryFilter: {
        filters: {
          user: walletAddress,
        }
      }
    }
  );

  useEffect(() => {
    import('@/public/loadingLottie.json').then((module) => {
      setLoadingAnimation(module.default);
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.pageLoading}>
        <div>
          {loadingAnimation && <Lottie animationData={loadingAnimation} loop={true} />}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container} style={{ maxWidth: "500px" }}>
      <button onClick={() => window.history.back()} className={styles.updateButton}>Back</button>
      <h1>Account Feed</h1>
      <p style={{ fontSize: "0.75rem" }}>{walletAddress}</p>
      <h3>Latest Updates:</h3>
      {!isUserEventsLoading && userEvents && (
        userEvents.slice(0, 20).map((event, index) => (
          <EventCard
            key={index}
            walletAddress={event.data.user}
            newStatus={event.data.newStatus}
            timeStamp={event.data.timeStamp}
          />
        ))
      )}
    </div>
  )
};