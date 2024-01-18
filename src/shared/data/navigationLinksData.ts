
interface navLinksProps {
	name: string,
	route: string
}

export const navLinks: navLinksProps[] = [
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
		name: 'Components',
		route: '/components'
	},
	{
		name: 'Projects',
		route: '/projects'
	}
];