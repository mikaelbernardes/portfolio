export interface ClientPostsProps {
	items: {
		title: string;
		content: React.ReactNode;
		tags: string[];
	}[];
};