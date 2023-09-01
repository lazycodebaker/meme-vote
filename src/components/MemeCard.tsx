

import HOLDVIKING from '../assets/pngs/memes/HODLVIKING.png'
import { MemeCardProps } from '../interface'
import ABI from '../ABI.json'
import { useContractWrite } from 'wagmi'
import { useEffect, useState } from 'react'

const MemeCard: React.FC<MemeCardProps> = ({key, meme, isConnected , contractAddress}) => {
      
      const [success,setSuccess] = useState<boolean>(false)
      
      const { write: VoteMeme, isSuccess } = useContractWrite({
            abi: ABI,
            address: contractAddress,
            functionName: "voteForMeme",
            chainId: 11155111,
      })

      const handleVote = async (meme: string) => {
            await VoteMeme({
                  args: [meme],
                  value: BigInt(0)
            })
      }

      useEffect(() => {
            if(isSuccess){
                  setSuccess(true)
            } else {
                  setSuccess(false)
            }
      }, [isSuccess])
      

      return (
            <div key={key} className="flex flex-col w-[240px] h-[270px] ">
                  <div className="buttonborder buttonbordercustom w-[240px] flex items-center justify-center h-[210px]">
                        <img src={HOLDVIKING} alt="HOLDVIKING" className="p-10" />
                  </div>
                  <div className="buttonborderbottom buttonborder px-4 flex items-center justify-between buttonbordercustom w-[240px] h-[60px]">
                        <h1 className='text-sm'>{meme}</h1>
                        <div className="flex items-center cursor-pointer text-sm  justify-center text-gray-50 bg-[#0C8C5E] w-[80px] h-[32px] rounded-full">
                              {
                                    !success ? isConnected ? <h1 onClick={() => handleVote(meme)}>Vote</h1> : <h1 className='text-gray-50/50'>Connect</h1> : <h1 className='text-gray-50/50'>Voted</h1>
                              }
                        </div>
                  </div>
            </div>
      )
}

export default MemeCard