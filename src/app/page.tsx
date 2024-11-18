"use client";
import { PostCard } from "@/components/post-card";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
	BarChart,
	Cloud,
	Database,
	Github,
	Linkedin,
	Lock,
	Mail,
	Server,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const coreExpertises = [
	{
		id: 1,
		icon: Server,
		title: "Distributed Systems",
		content:
			"Design and implementation of highly available and fault-tolerant distributed systems using technologies like Apache Kafka, etcd, and Consul.",
	},
	{
		id: 2,
		icon: Database,
		title: "Database Optimization",
		content:
			"Expertise in optimizing database performance, including query optimization, indexing strategies, and data modeling for both SQL and NoSQL databases.",
	},
	{
		id: 3,
		icon: Cloud,
		title: "Cloud Architecture",
		content:
			"Extensive experience with cloud platforms (AWS, GCP, Azure), focusing on serverless architectures, containerization, and infrastructure-as-code.",
	},
	{
		id: 4,
		icon: Lock,
		title: "Security & Compliance",
		content:
			"Implementation of robust security measures, including encryption, authentication systems, and compliance with standards like GDPR and PCI-DSS.",
	},
	{
		id: 5,
		icon: Zap,
		title: "High-Performance Computing",
		content:
			"Development of high-throughput, low-latency systems capable of processing millions of transactions per second using technologies like CUDA and Apache Spark.",
	},
	{
		id: 6,
		icon: BarChart,
		title: "Data Engineering",
		content:
			"Design and implementation of data pipelines, ETL processes, and real-time analytics systems using tools like Apache Airflow and Apache Flink.",
	},
];

export default function Page() {
	const [posts, setposts] = useState<Post[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("/api/post", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();
			setposts(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	const { push } = useRouter();

	return (
		<div className="min-h-screen bg-background text-foreground scroll-auto">
			<main className="container mx-auto px-4 py-8 space-y-16">
				<section className="text-center space-y-4">
					<Avatar className="w-32 h-32 mx-auto">
						<AvatarImage
							src="https://avatars.githubusercontent.com/u/152810128?s=400&u=1ec4d99a911968ed53d2ea0db428fe2dd98e4e8b&v=4"
							alt="John Smith"
						/>
						<AvatarFallback>MB</AvatarFallback>
					</Avatar>
					<h2 className="text-4xl font-bold">Mikael Bernardes</h2>
					<p className="text-xl text-muted-foreground">
						Pleno Full Stack Developer
					</p>
					<p className="max-w-2xl mx-auto">
						With over 3 years of experience in architecting and developing
						high-performance, scalable full stack systems. Specialized in
						distributed systems, microservices, and software arquiteture.
					</p>
				</section>

				<section
					id="expertise"
					className="space-y-4">
					<h3 className="text-2xl font-semibold">Core Expertise</h3>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{coreExpertises.map((item) => (
							<Card key={item.id}>
								<CardHeader>
									<CardTitle className="flex items-center">
										<item.icon className="mr-2" />
										{item.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p>{item.content}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section
					id="projects"
					className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-2xl font-semibold">Blog</h3>
						<Button
							variant="outline"
							onClick={() => push("/posts")}>
							See all posts
						</Button>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						{loading ? (
							<div className="flex gap-6">
								<Skeleton className="min-w-[46rem] h-56" />
								<Skeleton className="min-w-[46rem] h-56" />
							</div>
						) : (
							posts
								.filter((post) => post.isBlog)
								.slice(0, 2)
								.map((post) => (
									<PostCard
										post={post}
										key={post.id}
									/>
								))
						)}
					</div>
				</section>

				<section
					id="projects"
					className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-2xl font-semibold">Key Projects</h3>
						<Button
							variant="outline"
							onClick={() => push("/projects")}>
							See all projects
						</Button>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						{loading ? (
							<div className="flex gap-6">
								<Skeleton className="min-w-[46rem] h-56" />
								<Skeleton className="min-w-[46rem] h-56" />
							</div>
						) : (
							posts
								.filter((project) => project.isProjectKey)
								.slice(-2)
								.map((project) => (
									<ProjectCard
										isProfessionalExperience={false}
										project={project}
										key={project.id}
									/>
								))
						)}
					</div>
				</section>

				<section
					id="experience"
					className="space-y-4">
					<h3 className="text-2xl font-semibold">Professional Experience</h3>
					<div className="space-y-6">
						{loading ? (
							<div className="flex gap-6">
								<Skeleton className="w-full h-56" />
							</div>
						) : (
							posts
								.filter((post) => post.isProfessionalExperience)
								.map((post) => (
									<ProjectCard
										isProfessionalExperience
										project={post}
										key={post.id}
									/>
								))
						)}
					</div>
				</section>

				<section className="space-y-4">
					<h3 className="text-2xl font-semibold">Technical Skills</h3>
					<div className="flex flex-wrap gap-2">
						<Badge variant="secondary">Java</Badge>
						<Badge variant="secondary">Node.js</Badge>
						<Badge variant="secondary">PostgreSQL</Badge>
						<Badge variant="secondary">MongoDB</Badge>
						<Badge variant="secondary">Redis</Badge>
						<Badge variant="secondary">Docker</Badge>
						<Badge variant="secondary">Kubernetes</Badge>
						<Badge variant="secondary">AWS</Badge>
						<Badge variant="secondary">GraphQL</Badge>
						<Badge variant="secondary">ReactJS</Badge>
						<Badge variant="secondary">NextJS</Badge>
						<Badge variant="secondary">Typescript</Badge>
						<Badge variant="secondary">Javascript</Badge>
						<Badge variant="secondary">Spring Boot</Badge>
						<Badge variant="secondary">C#</Badge>
						<Badge variant="secondary">ASP Net</Badge>
					</div>
				</section>

				<section
					id="contact"
					className="space-y-4">
					<h3 className="text-2xl font-semibold">Contact</h3>
					<div className="flex flex-wrap gap-4">
						<Link
							href="mailto:mikaelbernardes2022@gmail.com"
							target="_blank">
							<Button variant="outline">
								<Mail className="mr-2 h-4 w-4" />
								Email
							</Button>
						</Link>
						<Link
							href="https://www.linkedin.com/in/bernardesmikael/"
							target="_blank">
							<Button variant="outline">
								<Linkedin className="mr-2 h-4 w-4" />
								LinkedIn
							</Button>
						</Link>
						<Link
							href="https://github.com/mikaelbernardes"
							target="_blank">
							<Button variant="outline">
								<Github className="mr-2 h-4 w-4" />
								GitHub
							</Button>
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}
