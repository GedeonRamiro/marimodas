import Link from 'next/link';
import { GiMoneyStack } from 'react-icons/gi';
import { BsCreditCardFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import LogoPix from '/public/images/logo-pix.png';
import Image from 'next/image';

const Footer = () => {
    const menuArray = [
        { href: '/feminino', pathname: '/feminino', name: 'Feminino' },
        { href: '/masculino', pathname: '/masculino', name: 'Masculino' },
        { href: '/outrosprodutos', pathname: '/outrosprodutos', name: 'Outros produtos' },
        { href: '/tupperware', pathname: '/tupperware', name: 'Tupperware' },
    ];

    const openWhatsapp = () => {
        window.open(
            `https://api.whatsapp.com/send?phone=${+5586988424781}&text=${'Olá, gostaria de saber como posso comprar o produto de vocês.'}`
        );
    };

    const openInstagram = () => {
        window.open('https://www.instagram.com/joiadecorpo/');
    };

    const openFaceBook = () => {
        window.open('https://www.facebook.com/marineusa.bastos.5');
    };

    return (
        <footer className='footer p-10 bg-base-200 text-base-content lg:justify-evenly'>
            <div>
                <span className='footer-title'>Categorias</span>

                {menuArray.map((menu, index) => (
                    <Link href={menu.href} key={index}>
                        <a className='link link-hover'>{menu.name}</a>
                    </Link>
                ))}
            </div>
            <div>
                <span className='footer-title'>Formas de pagamento</span>
                <p className='flex items-center'>
                    <Image src={LogoPix} alt='Logo' width={22} height={22} />
                    <span className='ml-1'>Pix</span>
                </p>
                <p className='flex items-center'>
                    <BsCreditCardFill className='text-lg text-blue-800' />
                    <span className='ml-1'>Cartão de crédito</span>
                </p>
                <p className='flex items-center'>
                    <GiMoneyStack className='text-[23px] text-green-700' />
                    <span className='ml-1'>Dinheiro</span>
                </p>
            </div>
            <div>
                <span className='footer-title'>Social</span>
                <div className='grid grid-flow-col gap-4 text-gray-600'>
                    <AiFillInstagram
                        onClick={openInstagram}
                        className='text-[32px] cursor-pointer'
                    />
                    <AiFillFacebook onClick={openFaceBook} className='cursor-pointer text-3xl' />
                    <IoLogoWhatsapp onClick={openWhatsapp} className='cursor-pointer text-3xl' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
