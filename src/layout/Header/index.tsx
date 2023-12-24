'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HamburguerMenu } from './HamburguerMenu/page';
import { navLinks } from '@/shared/data/navigationLinksData';


function Header() {

	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	function handleToggleMenu() {
		setMenuOpen(!menuOpen);
	}

	const pathname = usePathname();

	return (
		<header className='w-full h-16 px-3 flex items-center justify-between bg-B100 border-b-2 border-P100 shadow-lg transition-all'>
			<h1 className='text-T300 font-bold text-sm md:text-lg'>Mikael Bernardes</h1>
			<div className="md:hidden">
				<HamburguerMenu 
					menuOpen={menuOpen}
					onClick={handleToggleMenu}
				/>
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
