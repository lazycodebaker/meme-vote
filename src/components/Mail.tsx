
import { BsSend } from 'react-icons/bs';

const Mail: React.FC = () => {
      return (
            <div className="w-full sm:px-16 px-6 flex flex-col text-gray-50 relative items-center justify-center">
                  <h1 className="text-center self-center text-4xl sm:text-6xl py-10">Results</h1>

                  <div className="text-center text-2xl">
                        <h1>You can view results after the voting ends on the site</h1>
                        <h1>Or</h1>
                        <h1>Get the results automatically on your mail </h1>
                  </div>
                  <div className='py-10 flex items-center justify-center bg-transparent'>
                        <div className="flex items-center flex-col justify-center w-[280px] h-[48px] ">
                              <div className="buttonborder buttonbordercustom w-[280px] flex items-center justify-center text-input h-[210px]">
                                    <input type="text" className="w-[240px] outline-none focus:outline-none h-[48px] text-input text-gray-50/80 bg-black/50" placeholder="Enter your email" />
                              </div>
                        </div>
                        <div className='h-[50px] px-4 flex cursor-pointer items-center bg-black/50 justify-center buttonborder buttonbordercustom send'>
                              <BsSend className=" text-xl hover:scale-110 text-gray-50/80" />
                        </div>
                  </div>
            </div>
      )
}

export default Mail