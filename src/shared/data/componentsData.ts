
interface ComponentsDataProps {
    [id: number]: {
        name: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        image: any,
        description: string,
        tags: string[]
    }
}

export const componentsData: ComponentsDataProps = {
	1:{
		name: 'Reusable Carousel',
		image: '',
		description: '',
		tags: [
			'#reusable',
			'#compositionpatterns'
		]
	},
	2: {
		name: 'Input',
		image: '',
		description: '',
		tags: [
			'#compositionpatterns'
		]
	}
};