"use client";
import { PostCard } from "@/components/post-card";
import { useEffect, useState } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
	const [loading, setLoading] = useState<boolean>(true);
	const [posts, setPosts] = useState<Post[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const postsPerPage = 4;

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
			setLoading(false);
		};
		fetchData();
	}, []);

	const filteredPosts = posts.filter((post) => post.isBlog);
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;

	const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<div className="container mx-auto min-h-[85vh] px-4 py-8 flex flex-col gap-4 items-center">
			{loading
				? Array.from({ length: 4 }).map((_, index) => (
						<Skeleton
							key={index}
							className="min-w-[46rem] h-52"
						/>
					))
				: currentPosts.map((post) => (
						<PostCard
							post={post}
							key={post.id}
						/>
					))}
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<Button
							variant="ghost"
							onClick={() => setCurrentPage(currentPage - 1)}
							disabled={currentPage === 1}>
							<PaginationPrevious />
						</Button>
					</PaginationItem>
					{Array.from(
						{ length: Math.ceil(posts.length / postsPerPage) },
						(_, index) => (
							<PaginationItem key={index}>
								<PaginationLink
									href="#"
									onClick={() => setCurrentPage(index + 1)}
									className={currentPage === index + 1 ? "bg-secondary" : ""}>
									{index + 1}
								</PaginationLink>
							</PaginationItem>
						),
					)}
					<PaginationItem>
						<Button
							variant="ghost"
							onClick={() => setCurrentPage(currentPage + 1)}
							disabled={indexOfLastPost >= posts.length}>
							<PaginationNext />
						</Button>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
