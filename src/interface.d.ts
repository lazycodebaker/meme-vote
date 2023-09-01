import { ConnectArgs } from "wagmi/actions"

export type HexString = `0x${string}` | undefined

interface Props {
      connect: (args?: Partial<ConnectArgs> | undefined) => void,
      address : HexString,
      isConnected: boolean,
      disconnect: () =>  UseMutateFunction<void, Error, void, unknown>,
      contractAddress: HexString,
}


export interface MemeCardProps  {
      key :number,
      meme: string,
      isConnected: boolean,
      contractAddress: HexString,
}
