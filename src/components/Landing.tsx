
import LEFTELLIPSE from '../assets/pngs/left-ellipse.png'
import RIGHTELLIPSE from '../assets/pngs/right-ellipse.png'
import { FaDiscord, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import { Props } from '../interface'
import { useContractRead } from 'wagmi'
import ABI from "../ABI.json"
import { useEffect, useState } from 'react'



const Landing: React.FC<Props> = ({ contractAddress }) => {

      const [daysLeft, setDaysLeft] = useState<number>(0)
      const [hoursLeft, setHoursLeft] = useState<number>(0)
      const [minutesLeft, setMinutesLeft] = useState<number>(0)
      const [secondsLeft, setSecondsLeft] = useState<number>(0)

      const { data: time } = useContractRead({
            abi: ABI,
            address: contractAddress,
            functionName: "votingEndTime",
            chainId: 11155111,
      });

      const votingEndTime = Number(time); // Convert BigInt to number

      useEffect(() => {
            const interval = setInterval(() => {
                  // Calculate the time difference between current time and votingEndTime
                  const currentTime = Math.floor(Date.now() / 1000);
                  const timeDifference = votingEndTime - currentTime;

                  if (timeDifference > 0) {
                        const days = Math.floor(timeDifference / (60 * 60 * 24));
                        const hours = Math.floor((timeDifference % (60 * 60 * 24)) / (60 * 60));
                        const minutes = Math.floor((timeDifference % (60 * 60)) / 60);
                        const seconds = Math.floor(timeDifference % 60);

                        setDaysLeft(days);
                        setHoursLeft(hours);
                        setMinutesLeft(minutes);
                        setSecondsLeft(seconds);
                  }
            }, 1000); // Update every 1 second

            // Clear the interval when the component unmounts
            return () => clearInterval(interval);
      }, [votingEndTime,secondsLeft]);

      return (
            <div className="flex w-full justify-center mt-[50px]">
                  <img src={LEFTELLIPSE} alt="left-ellipse" className="absolute top-32 opacity-80 left-10 w-[270px] h-[350px] -z-10" />
                  <img src={RIGHTELLIPSE} alt="right-ellipse" className="absolute bottom-24 opacity-80 right-16 w-[140px] h-[180px] -z-10" />

                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 sm:px-16 px-6">

                        <div className='flex items-center sm:items-start flex-col'>
                              <div className="flex flex-col sm:mt-0 -mt-10 w-full space-y-2 items-center text-gray-50">
                                    <h1 className="sm:text-6xl text-3xl">Cast Your Vote for the Best <span className="text-gradient">Meme</span></h1>
                                    <h1 className="text-lg py-4 sm:pr-14 ">Your vote counts! Choose the most captivating <span className='text-gradient'>memes</span> and help determine the rulers of the crypto meme realm.</h1>
                              </div>

                              <div className='flex items-center sm:mt-24 mt-12 justify-center'>
                                    <a target='_blank' href={"https://instagram.com/lazycodebaker"}>
                                          <FaInstagram size={32} className='mx-4 outline-none focus:outline-none select-none  text-gray-400 hover:text-gray-50 cursor-pointer hover:scale-125' />
                                    </a>
                                    <a target='_blank' href={"https://t.me/lazycodebaker"}>
                                          <FaTelegram size={32} className='mx-4 outline-none focus:outline-none select-none  text-gray-400 hover:text-gray-50 cursor-pointer hover:scale-125' />
                                    </a>
                                    <a target='_blank' href={"https://twitter.com/lazycodebaker"}>
                                          <FaTwitter size={32} className='mx-4 outline-none focus:outline-none select-none  text-gray-400 hover:text-gray-50 cursor-pointer hover:scale-125' />
                                    </a>
                                    <a target='_blank' href={"https://discord.gg/"}>
                                          <FaDiscord size={32} className='mx-4 outline-none focus:outline-none select-none  text-gray-400 hover:text-gray-50 cursor-pointer hover:scale-125' />
                                    </a>
                              </div>
                        </div>

                        <div className="w-full flex flex-col sm:mt-0 mt-6">
                              <h1 className="text-gray-50 sm:text-3xl text-[23px] text-center self-center">Vote Before the <span className="text-gradient">time</span> runs out</h1>

                              <div className="flex items-center justify-center space-x-4 py-12">

                                    <div className='flex text-gray-50 flex-col sm:w-[96px] sm:h-[124px] w-[64px] h-[96px] items-center justify-center'>
                                          <div className=' flex items-center rounded-2xl justify-center timer w-full h-[96px]'>
                                                <h1 className='sm:text-5xl text-3xl'>{daysLeft}</h1>
                                          </div>
                                          <h1 className='w-full h-[28px] text-center self-center py-2 text-xs sm:text-sm'>DAYS</h1>
                                    </div>

                                    <div className='flex text-gray-50 flex-col sm:w-[96px] sm:h-[124px] w-[64px] h-[96px] items-center justify-center'>
                                          <div className=' flex items-center rounded-2xl justify-center timer w-full h-[96px]'>
                                                <h1 className='sm:text-5xl text-3xl'>{hoursLeft}</h1>
                                          </div>
                                          <h1 className='w-full h-[28px] text-center self-center py-2 text-xs sm:text-sm'>HOURS</h1>
                                    </div>

                                    <div className='flex text-gray-50 flex-col sm:w-[96px] sm:h-[124px] w-[64px] h-[96px] items-center justify-center'>
                                          <div className=' flex items-center rounded-2xl justify-center timer w-full h-[96px]'>
                                                <h1 className='sm:text-5xl text-3xl'>{minutesLeft}</h1>
                                          </div>
                                          <h1 className='w-full h-[28px] text-center self-center py-2 text-xs sm:text-sm'>MINUTES</h1>
                                    </div>

                                    <div className='flex text-gray-50 flex-col sm:w-[96px] sm:h-[124px] w-[64px] h-[96px] items-center justify-center'>
                                          <div className=' flex items-center rounded-2xl justify-center timer w-full h-[96px]'>
                                                <h1 className='sm:text-5xl text-3xl'>{secondsLeft}</h1>
                                          </div>
                                          <h1 className='w-full h-[28px] text-center self-center py-2 text-xs sm:text-sm'>SECONDS</h1>
                                    </div>

                              </div>

                        </div>
                  </div>
            </div>
      )
}

export default Landing