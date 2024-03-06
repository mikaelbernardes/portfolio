import { CardProjectsProps } from './ProjectsProps';
import { BiAlarm } from 'react-icons/bi';
import { BiLogoTypescript, BiLogoTailwindCss } from 'react-icons/bi';
import { SiNextdotjs, SiCypress } from 'react-icons/si';

export const ProjectData: CardProjectsProps[] = [
	{
		id: 1,
		name: 'Software Cartsys',
		initDate: '08/23/2023',
		finishDate: 'in progress',
		principalLanguage: [BiLogoTypescript, SiNextdotjs, BiLogoTailwindCss, SiCypress],
		description: 'trabalhei na cartsys durante tanto tempo em um projeto relacionado a software para cartorios, onde tinhamos 3 principais projetos sendo eles para cartorio de notas, cartorio de imoveis e cartorio de protesto, usando nextjs como ferramenta, atuei como forntend'
	},
	{
		id: 2,
		name: 'TodoList',
		initDate: '01/10/2023',
		finishDate: 'in progress',
		principalLanguage: [BiAlarm],
		description: 'trabalhei na cartsys durante tanto tempo em um projeto relacionado a software para cartorios, onde tinhamos 3 principais projetos sendo eles para cartorio de notas, cartorio de imoveis e cartorio de protesto, usando nextjs como ferramenta, atuei como forntend'
	}
];