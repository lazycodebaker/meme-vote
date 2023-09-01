import { Web3Modal } from '@web3modal/react';
import { sepolia } from 'wagmi/chains';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
// import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

export const chains = [sepolia];
export const projectId = '85a9dd2f0b142d11b9becf9bf70125e8';


export const { publicClient } = configureChains(chains,
      [
            w3mProvider({ projectId }),
            // infuraProvider({ apiKey: "c63043d12f8544fba001872f7da53b7b"}),
            publicProvider()
      ]
);

export const wagmiConfig = createConfig({
      autoConnect: true,
      connectors: w3mConnectors({ projectId, chains }),
      publicClient,
});

export const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function WalletContextProvider({ children }: any) {
      return (
            <>
                  <WagmiConfig config={wagmiConfig}>
                        {children}
                  </WagmiConfig>
                  <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
            </>
      );
};