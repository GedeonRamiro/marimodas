import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';
import Logo from '/public/images/logo.png';

type Props = {
    children: React.ReactNode;
};

const Header = ({ children }: Props) => {
    const menuArray = [
        { href: '/', pathname: '/', name: 'Home' },
        { href: '/feminino', pathname: '/feminino', name: 'Feminino' },
        { href: '/masculino', pathname: '/masculino', name: 'Masculino' },
        { href: '/acessorios', pathname: '/acessorios', name: 'Acessórios' },
        { href: '/tupperware', pathname: '/tupperware', name: 'Tupperware' },
        { href: '/sobre', pathname: '/sobre', name: 'Quem somos?' },
    ];

    return (
        <div className='drawer h-screen'>
            <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />

            <div className='drawer-content flex flex-col  justify-between'>
                <div>
                    {/*  <!-- Navbar --> */}
                    <div className='w-full navbar bg-base-200'>
                        <div className='flex-none lg:hidden'>
                            <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    className='inline-block w-6 h-6 stroke-current'
                                >
                                    <path
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke-width='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className='container flex justify-center'>
                            <div className='flex-1 lg:flex-none px-2 mx-2 cursor-pointer'>
                                <Link href='/'>
                                    <Image src={Logo} alt='Logo' width={30} height={30} />
                                </Link>
                            </div>
                            <div className='flex-none hidden lg:block'>
                                <ul className='menu menu-horizontal font-normal text-gray-600'>
                                    {/*   <!-- Navbar menu content here --> */}
                                    {menuArray.map((menu) => (
                                        <li>
                                            <Link href={menu.href}>
                                                <a className='btn btn-link font-medium capitalize'>
                                                    {menu.name}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*  <!-- Page content here --> */}
                    <div className='container mx-auto'>{children}</div>
                </div>

                <div className='inset-x-0 bottom-0  '>
                    <Footer />
                </div>
            </div>

            <div className='drawer-side'>
                <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
                <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-sm'>
                    {menuArray.map((menu) => (
                        <li>
                            <Link href={menu.href}>
                                <a className='btn btn-link font-medium capitalize'>{menu.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
