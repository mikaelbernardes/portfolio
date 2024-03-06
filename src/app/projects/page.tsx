import { ProjectCard } from './components/ProjectCard';
import { ProjectData } from './projectData';


export default function Projects() {

    

	return(
		<main className='px-12'>
			{
				ProjectData.map(project => (
					<ProjectCard
						id={project.id}
						name={project.name}
						description={project.description}
						initDate={project.initDate}
						finishDate={project.finishDate}
						principalLanguage={project.principalLanguage}
						key={project.id}
					/>
				))
			}
		</main>
	);
}