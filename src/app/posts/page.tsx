"use client";
import { PostCard } from "@/components/post-card";
import { useEffect, useState } from "react";

export default function Page() {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("/api/post", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();
			setPosts(data);
		};
		fetchData();
	}, []);

	return (
		<div className="container mx-auto px-4 py-8 flex flex-col gap-4 items-center">
			{posts
				.filter((post) => post.isBlog)
				.map((post) => (
					<PostCard
						post={post}
						key={post.id}
					/>
				))}
		</div>
	);
}
