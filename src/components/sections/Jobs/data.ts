interface Experience {
    title: string;
    company: string;
    location: string;
    range: [string, string];
    things: Array<string>;
}

const experiences: Array<Experience> = [
    {
        title: 'Full Stack Engineer',
        company: 'Excellerent Technology Solutions',
        location: 'Addis Ababa, Ethiopia',
        range: ['Apr,2021', ' - Present'],
        things: [
            'Developed and shipped highly performant Loan decision API for security finance',
            'Developing and Maintaining different Restful APIs for different applications and clients for security finance',
        ]
    },
    {
        title: 'Full Stack Engineer',
        company: 'Birrbet PLC',
        location: 'Addis Ababa, Ethiopia',
        range: ['Jun,2019', ' - Apr,2021'],
        things: [
            'Developed and shipped highly interactive sport wagering web application for Birrbet',
            'Built and shipped mirco services with federated Graphql API for Birrbet sport betting application',
            'Architected and implemented sport wagering application',
            'Built CI/CD pipeline and deployed on AWS cloud'
        ]
    },
    {
        title: 'Backend Engineer',
        company: 'I-cog Labs',
        location: 'Addis Ababa, Ethiopia',
        range: ['Dec,2020', ' - Mar,2021'],
        things: [
            'Developed and shipped performant Restful API for Japanese Kids E-learning platform',
            'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
            'Designed and Architected Database Tables',
        ]
    },
    {
        title: 'Full Stack Engineer',
        company: 'ICT4Dev Consulting PLC',
        location: 'Addis Ababa, Ethiopia',
        range: ['Jan,2017', ' - May,2019'],
        things: [
            'Developed and shipped highly interactive Web based monitoring and evaluation system for VITA (irish aided NGO)',
            'Developed and shipped highly interactive web supply and demand agricultural input aggregation platform local farm centers',
            'Developed and shipped highly interactive ecommerce application called malladdis ',
        ]
    },
    {
        title: 'Full stack Mobile Developer',
        company: 'Roulette6',
        location: 'Mumbai, India',
        range: ['Mar,2016', ' - Dec,2017'],
        things: [
            'Developed and shipped highly interactive android based mobile casino multiplier game',
            'Designed and Architected Database Tables, APIs and so on',
        ]
    },
    {
        title: 'Full stack Mobile Developer',
        company: 'NuExchange',
        location: 'Addis Ababa, Ethiopia',
        range: ['May,2015', ' - Aug,2015'],
        things: [
            'Developed and shipped highly interactive web based livestock auction amd sales trading platform',
            'Designed and Architected Database Tables, APIs and so on',
        ]
    },
];


export default experiences;
