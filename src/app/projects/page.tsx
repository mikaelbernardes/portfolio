"use client";
import { useEffect } from "react";

export default function Page() {
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("/api/post", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();
			console.log(data);
		};
		fetchData();
	}, []);

	return <></>;
}
