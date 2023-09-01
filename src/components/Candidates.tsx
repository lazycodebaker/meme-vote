
import CIRCLEGRADIENT from '../assets/pngs/circle-gradient-right.png'
import ABI from '../ABI.json'
import { useContractRead } from 'wagmi'
import { Props } from '../interface'
import { useEffect, useState } from 'react'
import MemeCard from './MemeCard'

const Candidates: React.FC<Props> = ({ isConnected, contractAddress }) => {

      const [memes, setMemes] = useState<string[]>([])

      const { data: memesData } = useContractRead({
            abi: ABI,
            address: contractAddress,
            functionName: "getMemeList",
            chainId: 11155111,
      })

      useEffect(() => {
            if (memesData) {
                  setMemes(memesData as string[])
            }
      }, [memesData])

      return (
            <div className="w-full sm:px-16 px-6 flex flex-col text-gray-50 relative items-center py-20 justify-center">

                  <img src={CIRCLEGRADIENT} alt="CIRCLEGRADIENT" className="absolute sm:block hidden -bottom-[500px] right-0 sm:w-full sm:h-full" />

                  <h1 className="text-center self-center text-4xl sm:text-6xl py-10">Candidates</h1>

                  <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6'>
                        {
                              memes.map((meme, index) => 
                                    <MemeCard 
                                          key={index} 
                                          meme={meme} 
                                          isConnected={isConnected} 
                                          contractAddress={contractAddress}
                                    />
                              )
                        }
                  </div>


            </div >
      )
}

export default Candidates