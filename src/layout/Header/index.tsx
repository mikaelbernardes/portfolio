'use client';
import Image from 'next/image';
import MenuHamburguer from '@public/menuhamburguer.svg';
import CloseMenu from '@public/menuclose.svg';
import { useState } from 'react';

function Header() {

	const [ menuOpen, setMenuOpen ] = useState<boolean>(false);

	function handleToggleMenu() {
		setMenuOpen(!menuOpen);
	}

	return(
		<header className='w-full h-16 px-3 flex items-center justify-between bg-B100 border-b-2 border-P100 shadow-lg transition-all'>
			<h1 className='text-T300 font-bold text-sm md:text-lg'>Mikael Bernardes</h1>
			<div className="cursor-pointer">
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
		</header>
	);
}

export { Header };