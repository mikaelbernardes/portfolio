import Image from 'next/image';
import MenuHamburguer from '@public/menuhamburguer.svg';

function Header() {

	return(
		<header className="w-screen h-16 px-3 flex items-center justify-between bg-B100 border-b-2 border-P100 shadow-lg">
			<h1 className="text-T300 font-bold text-sm">Mikael Bernardes</h1>
			<Image 
				src={MenuHamburguer}
				alt='Ícone de menu em formato de hamburguer'
			/>
		</header>
	);
}

export { Header };