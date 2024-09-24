
import { client } from "@/app/client";
import { ConnectWallet } from "@thirdweb-dev/react"
import { ConnectButton } from "thirdweb/react"

const ConnectedPage = () => {
    
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
            }}>
                <h3>Tribes Web3</h3>  
                    <div>
                        <ConnectWallet />  
                        <ConnectButton client={client}/>   
                    </div> 
            </div>
        </div>
    )
};

export default ConnectedPage;