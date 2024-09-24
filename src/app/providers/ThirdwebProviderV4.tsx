'use client'

import { client } from "@/app/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import {PolygonAmoyTestnet} from "@thirdweb-dev/chains"
import { QueryClient, QueryClientProvider } from "tanstack-v4"

export default function ThirdwebProviderV4({
    children,
}: {
    children: React.ReactNode;
}) {
    const queryClient = new QueryClient();
    return (
    <QueryClientProvider client={queryClient}>
        <ThirdwebProvider clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID} activeChain={PolygonAmoyTestnet}>
            {children}
        </ThirdwebProvider>
    </QueryClientProvider>
    );
}