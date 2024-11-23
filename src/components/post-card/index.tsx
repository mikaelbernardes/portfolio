import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

interface Props {
	post: Post;
}

export function PostCard({ post }: Props) {
	let month = "";

	switch (new Date(post.createdAt).getMonth()) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
		default:
			month = "";
			break;
	}

	const { push } = useRouter();

	return (
		<Card
			className="w-full max-w-[46rem] cursor-pointer"
			onClick={() => push(`/posts/${post.slug}`)}>
			<CardHeader>
				<CardTitle>{post.title}</CardTitle>
				<CardDescription>
					{new Date(post.createdAt).getDate()} de {month},{" "}
					{new Date(post.createdAt).getFullYear()}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<p className="text-sm text-muted-foreground">
					{post.description.substring(0, 200)}
				</p>
				<div className="flex gap-2">
					{post.tags.map((t) => (
						<Badge
							className="capitalize"
							key={t}>
							{t}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
