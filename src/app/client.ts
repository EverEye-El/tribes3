import { createThirdwebClient } from "thirdweb";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
// const clientID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;


if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
