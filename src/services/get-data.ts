import { hygraphClient } from "../../lib/hygraph-client";

const experienceQuery = `
    query {
        experiences(last: 100) {
            company
            role
            startDate
            endDate
            paragraphs
            skills
            order
        }
    }
`;

export type Experience = {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    paragraphs: string[];
    skills: string[];
    order: number;
};

export const getExperience = async (): Promise<Experience[]> => {
    const { experiences } = await hygraphClient(experienceQuery);
    const result = experiences.sort((a: Experience, b: Experience) => a.order - b.order);   
    return result;
};