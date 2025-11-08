import { ModeToggle } from '@/components/mode-toggle'
import logo from '../assets/pickpawz.png'
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-sky-100 h-screen flex flex-col justify-center items-center pt-16'>
        <div className='fixed top-0 right-0 p-4 z-50'>
            <ModeToggle/>
        </div>


        <div className='bg-amber-100 h-100 w-150 flex flex-col justify-center items-center' >
           <img src={logo} alt="PickPawz Logo" height={100} width={100} />

           <div className='p-10 gap-10 flex'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer' onClick={() => navigate('/adopt/signup')}> Adopter</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer' > Have a Pet</button>
           </div>
        </div>
    </div>
  )
}

export default LandingPage
