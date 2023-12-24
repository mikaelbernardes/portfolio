import { navLinks } from '@/shared/data/navigationLinksData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMenu, IoClose } from 'react-icons/io5';

interface HamburguerMenuProps {
    onClick: () => void,
    menuOpen: boolean
}

function HamburguerMenu({ onClick, menuOpen }: HamburguerMenuProps) {

	const pathname = usePathname();

	return(
		<>
			<div 
				className="text-T300 fixed z-50 top-5 right-2 cursor-pointer" 
				onClick={onClick}
			>
				{
					menuOpen ?
						<IoClose size={25} />
						:
						<IoMenu size={25} />
				}
			</div>
			<ul className={`${menuOpen? 'flex w-1/2' : 'hidden'} transition-all absolute z-40 bg-B200 h-screen top-0 right-0 flex-col items-center py-20 gap-4`}>
				{
					navLinks.map((link, index) => (
						<li 
							key={index} 
							className={`${ link.route === pathname ? 'text-P100' : 'text-T100'} hover:text-T300 cursor-pointer w-full px-10`}
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
		</>
	);
}

export { HamburguerMenu };