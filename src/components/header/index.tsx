"use client";
import React, { useEffect, useState } from "react";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "../ui/command";
import { DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
	const [open, setOpen] = useState<boolean>(false);
	const [allPost, setAllPost] = useState<Post[]>([]);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);

		const fetchData = async () => {
			const response = await fetch("/api/post", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();
			setAllPost(data);
		};

		fetchData();
		return () => document.removeEventListener("keydown", down);
	}, []);

	const { push } = useRouter();

	return (
		<header className="sticky top-0 z-10 h-16 backdrop-blur-sm bg-background/80 border-b">
			<div className="container h-full mx-auto px-4 py-4 relative flex items-center">
				<Link
					href="/"
					className="text-2xl font-bold hidden sm:block">
					Mikael Bernardes
				</Link>
				<Button
					variant="outline"
					className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
					onClick={() => setOpen(true)}>
					<p className="text-sm text-muted-foreground">
						Click here or press{" "}
						<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
							<span className="text-xs">ctrl + K</span>
						</kbd>
					</p>
				</Button>
				<CommandDialog
					open={open}
					onOpenChange={setOpen}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<DialogTitle>{}</DialogTitle>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							{allPost
								.filter((post) => !post.isProfessionalExperience)
								.map((post) => {
									let tag = "";

									if (post.isBlog) {
										tag = "post";
									} else {
										tag = "project";
									}

									const link = post.isBlog
										? `/posts/${post.slug}`
										: `/projects/${post.slug}`;

									return (
										<CommandItem
											key={post.id}
											className="w-full cursor-pointer flex items-center justify-between">
											{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
											<div
												onClick={() => {
													push(link);
													setOpen(false);
												}}
												className="w-full h-fit flex items-center justify-between">
												<p>{post.title}</p>
												<p className="uppercase text-xs text-muted-foreground">
													{tag}
												</p>
											</div>
										</CommandItem>
									);
								})}
						</CommandGroup>
					</CommandList>
				</CommandDialog>
			</div>
		</header>
	);
}
