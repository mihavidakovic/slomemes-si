import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Header() {
    return (
        <>
            <header class="header fixed w-full top-0 left-0 bg-primary px-4 py-4 flex flex-row justify-between items-center z-10">
                <span className="text-white font-bold text-lg">Slovenian Memes</span>
                <div className="flex flex-row">
                    <a href="#" className="text-white text-xl mr-4">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-white text-xl">
                        <FaFacebook />
                    </a>
                </div>
            </header>
        </>
    )
}
