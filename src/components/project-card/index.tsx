import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

interface Props {
	project: Post;
}

export function ProjectCard({ project }: Props) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{project.title}</CardTitle>
				<CardDescription>{project.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="mb-2">Technical highlights:</p>
				<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
					{project.tags.map((i) => (
						<li key={i}>{i}</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}
