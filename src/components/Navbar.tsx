
import WALLETPNG from '../assets/pngs/wallet.png'
import { Props } from '../interface'

const Navbar: React.FC<Props> = ({ connect, address, isConnected, disconnect }) => {
      return (
            <div className="w-screen top-0 left-0 bg-transparent h-28 flex items-center justify-center  px-0  sm:px-12 sm:justify-between ">
                  <h1 className="text-gradient text-2xl">MemeBallot</h1>
                  <div
                        onClick={() => isConnected ? disconnect() : connect()}
                        className="flex fixed z-50 sm:top-6 top-10 right-10 hover:scale-105 items-center cursor-pointer text-sm shadow-button justify-center text-gray-50 bg-[#0C8C5E] sm:w-[180px] sm:h-[48px] w-[56px] h-[32px] rounded-full">
                        <img src={WALLETPNG} alt="wallet" className="w-5 h-5 sm:mr-2" />
                        <h1 className='sm:block hidden'>
                              {isConnected ? address?.substring(0, 7) + '...' : 'Connect Wallet'}
                        </h1>
                  </div>
            </div>
      )
}

export default Navbar