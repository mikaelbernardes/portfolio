interface NotionDatabaseResponse {
	object: string;
	results: Result[];
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	next_cursor: any;
	has_more: boolean;
	type: string;
	page_or_database: PageOrDatabase;
}

interface Result {
	object: string;
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: CreatedBy;
	last_edited_by: LastEditedBy;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	cover: any;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	icon: any;
	parent: Parent;
	archived: boolean;
	properties: Properties;
	url: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	public_url: any;
}

interface CreatedBy {
	object: string;
	id: string;
}

interface LastEditedBy {
	object: string;
	id: string;
}

interface Parent {
	type: string;
	database_id: string;
}

interface Properties {
	tags: Tags;
	slug: Slug;
	title: Title;
	description: Descriptions;
	isBlog: IsBlog;
}

interface IsBlog {
	checkbox: boolean;
	id: string;
	type: string;
}

interface Tags {
	id: string;
	type: string;
	multi_select: MultiSelect[];
}

interface RichTextDescription {
	type: string;
	text: object;
	annotations: object;
	plain_text: string;
	href: string | null;
}

interface Descriptions {
	id: string;
	type: string;
	rich_text: RichTextDescription[];
}

interface MultiSelect {
	id: string;
	name: string;
	color: string;
}

interface Slug {
	id: string;
	type: string;
	rich_text: RichText[];
}

interface RichText {
	type: string;
	text: Text;
	annotations: Annotations;
	plain_text: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	href: any;
}

interface Text {
	content: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	link: any;
}

interface Annotations {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: string;
}

interface Title {
	id: string;
	type: string;
	title: Title2[];
}

interface Title2 {
	type: string;
	text: Text2;
	annotations: Annotations2;
	plain_text: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	href: any;
}

interface Text2 {
	content: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	link: any;
}

interface Annotations2 {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: string;
}

// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
interface PageOrDatabase {}
