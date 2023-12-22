'use client';
import Image from 'next/image';
import MenuHamburguer from '@public/menuhamburguer.svg';
import CloseMenu from '@public/menuclose.svg';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface navLinksProps {
	name: string,
	route: string
}

const navLinks: navLinksProps[] = [
	{
		name: 'Home',
		route: '/'
	},
	{
		name: 'Blog',
		route: '/posts'
	},
	{
		name: 'About me',
		route: '/about'
	},
	{
		name: 'Projects',
		route: '/projects'
	}
];

function Header() {

	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	function handleToggleMenu() {
		setMenuOpen(!menuOpen);
	}

	const pathname = usePathname();

	return (
		<header className='w-full h-16 px-3 flex items-center justify-between bg-B100 border-b-2 border-P100 shadow-lg transition-all'>
			<h1 className='text-T300 font-bold text-sm md:text-lg'>Mikael Bernardes</h1>
			<div className="cursor-pointer md:hidden">
				{
					menuOpen ?
						<Image
							src={MenuHamburguer}
							alt='Ícone de menu em formato de hamburguer'
							onClick={handleToggleMenu}
						/>
						:
						<Image
							src={CloseMenu}
							alt='Ícone de menu em formato de X para fechar o menu'
							onClick={handleToggleMenu}
						/>
				}
			</div>
			<nav className="hidden md:flex">
				<ul className="list-none flex gap-8 font-light">
					{
						navLinks.map((link, index) => (
							<li 
								key={index} 
								className={`${ link.route === pathname ? 'text-P100' : 'text-T100'} hover:text-T300 cursor-pointer`}
							>
								<Link
									href={link.route}
									className=''
								>
									{link.name}
								</Link>
							</li>
						))
					}
				</ul>
			</nav>
		</header>
	);
}

export { Header };