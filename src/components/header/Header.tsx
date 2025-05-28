import './Header.css';
import ReactLogo from '../../assets/react.svg';

function Header() {
    return(
        <header className='bg-gray-700 py-[10px]'>
            <div className='flex justify-between wrapper'>
                <a href='' className="flex gap-3">
                    <img src={ReactLogo} alt="logo" className='w-[50px]'/>
                    <span className='text-[32px] font-bold text-white'>
                        React
                    </span>
                </a>
                <span className="text-[32px] font-bold cursor-pointer">Playground</span>
            </div>
        </header>
    )
}

export default Header