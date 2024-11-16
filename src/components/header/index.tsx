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

export function Header() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b">
			<div className="container mx-auto px-4 py-4 relative flex items-center">
				<h1 className="text-2xl font-bold">Mikael Bernardes</h1>
				<Button
					variant="outline"
					className="absolute left-1/2 transform -translate-x-1/2"
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
							<CommandItem>Calendar</CommandItem>
							<CommandItem>Search Emoji</CommandItem>
							<CommandItem>Calculator</CommandItem>
						</CommandGroup>
					</CommandList>
				</CommandDialog>
			</div>
		</header>
	);
}
