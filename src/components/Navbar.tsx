
import WALLETPNG from '../assets/pngs/wallet.png'
import { Props } from '../interface'

const Navbar : React.FC<Props> = ({connect,address,isConnected,disconnect}) => {
      return(
            <div className="w-screen top-0 left-0 bg-transparent h-28 flex items-center justify-between px-16">
                  <h1 className="text-gradient text-2xl">MemeBallot</h1>
                  <div 
                        onClick={()=> isConnected ? disconnect() : connect()}
                        className="flex fixed z-50 top-6 right-10 hover:scale-105 items-center cursor-pointer text-sm shadow-button justify-center text-gray-50 bg-[#0C8C5E] w-[180px] h-[48px] rounded-full">
                        <img src={WALLETPNG} alt="wallet" className="w-5 h-5 mr-2"/>
                        <h1 className=''>
                              {isConnected ? address?.substring(0,7) + '...' : 'Connect Wallet'}
                        </h1>
                  </div>
            </div>
      )
}

export default Navbar