export interface CardProjectsProps {
    id: number,
    name: string,
    initDate: string,
    finishDate: string,
    principalLanguage: React.ElementType[],
    description: string
}

export interface ProjectPageProps {
    [id: number]: {
        title: string,
        desktopImage?: string,
        mobileImage?: string,
        languages: string[],
        description: string,
        colaborators?: string,
        link?: string,
        githubLink?: string
    }
}