/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp   } from 'react-icons/fa';

interface SocialLinksDataProps {
    img: any,
    alt: string,
    link: string
}

export const socialLinksData: SocialLinksDataProps[] = [
	{
		img: FaGithub,
		alt: 'Ícone do Github',
		link: 'https://github.com/mikaelbernardes'
	},
	{
		img: FaLinkedin,
		alt: 'Ícone do Linkedin',
		link: 'https://www.linkedin.com/in/bernardesmikael/'
	},
	{
		img: FaInstagram,
		alt: 'Ícone do Instragram',
		link: ''
	},
	{
		img: FaWhatsapp,
		alt: 'Ícone do Whatsapp',
		link: 'https://www.linkedin.com/in/bernardesmikael/'
	}
];