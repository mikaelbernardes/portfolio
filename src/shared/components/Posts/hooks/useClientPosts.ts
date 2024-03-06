import { useState } from 'react';
import { tagColors } from '../../LinkPost/tagColors';
import { ClientPostsProps } from '../../../../types/ClientPostProps';

export function useClientPosts({items}: ClientPostsProps) {
	const [filterInput, setFilterInput] = useState('');
	const [selectedTag, setSelectedTag] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterInput(e.target.value);
	};

	const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedTag(e.target.value);
	};

	const filteredItems = items.filter((item) => {
		const titleMatch = item.title.toLowerCase().includes(filterInput.toLowerCase());
		const tagMatch = selectedTag === '' || item.tags.includes(selectedTag);
		return titleMatch && tagMatch;
	}).map((item) => item.content);

	const tagKeys: string[] = Object.keys(tagColors);

	return {
		tagKeys,
		filteredItems,
		handleTagChange,
		handleChange,
		filterInput,
		setFilterInput,
		selectedTag,
		setSelectedTag
	};
}