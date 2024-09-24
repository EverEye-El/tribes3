'use client'

import { client } from "@/app/client";
import { ThirdwebProvider } from "thirdweb/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function ThirdwebProviderV5({
    children,
}: {
    children: React.ReactNode;
}) {
    const queryClient = new QueryClient();
    return (
    <QueryClientProvider client={queryClient}>
        <ThirdwebProvider>
            {children}
        </ThirdwebProvider>
    </QueryClientProvider>
    );
} 