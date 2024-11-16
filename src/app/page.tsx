"use client";
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
						<h3 className="text-2xl font-semibold">Key Projects</h3>
						<Button>See all</Button>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Global Payment Processing Platform</CardTitle>
								<CardDescription>
									Architected a system handling 10,000+ transactions per second
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="mb-2">Technical highlights:</p>
								<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
									<li>Microservices architecture using Go and gRPC</li>
									<li>Distributed caching with Redis Cluster</li>
									<li>Real-time fraud detection using machine learning</li>
									<li>Multi-region deployment on AWS for high availability</li>
									<li>Achieved 99.999% uptime and sub-100ms response times</li>
								</ul>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>IoT Data Processing Pipeline</CardTitle>
								<CardDescription>
									Built a system ingesting and processing 1TB+ of data daily
									from millions of IoT devices
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="mb-2">Technical highlights:</p>
								<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
									<li>Kafka Streams for real-time data processing</li>
									<li>ClickHouse for high-speed analytics queries</li>
									<li>Kubernetes for orchestrating 100+ microservices</li>
									<li>
										Implemented a custom sharding solution for horizontal
										scaling
									</li>
									<li>
										Reduced data processing latency from minutes to seconds
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				<section
					id="experience"
					className="space-y-4">
					<h3 className="text-2xl font-semibold">Professional Experience</h3>
					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>Principal Backend Engineer</CardTitle>
								<CardDescription>
									TechGiant Corp. | 2018 - Present
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
									<li>
										Lead architect for the company's core distributed systems
									</li>
									<li>
										Implemented a service mesh architecture, improving system
										reliability and observability
									</li>
									<li>
										Reduced infrastructure costs by 40% through cloud
										optimization and serverless adoption
									</li>
									<li>
										Mentored senior engineers and established backend
										development best practices
									</li>
								</ul>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Senior Software Engineer</CardTitle>
								<CardDescription>
									FinTech Innovations | 2014 - 2018
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
									<li>
										Designed and implemented a high-frequency trading system
										processing 100,000+ orders per second
									</li>
									<li>
										Optimized database queries, resulting in a 70% reduction in
										average query time
									</li>
									<li>
										Led the migration from monolith to microservices
										architecture
									</li>
									<li>
										Implemented robust security measures, ensuring SOC 2 and PCI
										DSS compliance
									</li>
								</ul>
							</CardContent>
						</Card>
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
						<Button variant="outline">
							<Mail className="mr-2 h-4 w-4" />
							Email
						</Button>
						<Button variant="outline">
							<Linkedin className="mr-2 h-4 w-4" />
							LinkedIn
						</Button>
						<Button variant="outline">
							<Github className="mr-2 h-4 w-4" />
							GitHub
						</Button>
					</div>
				</section>
			</main>

			<footer className="border-t">
				<div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
					© 2023 Mikael Bernardes. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
