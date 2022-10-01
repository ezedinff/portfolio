import { notion_api_base_url, notion_api_database_id, notion_api_token, notion_api_version } from "./config";


// fetch client to call Notion API
export const notionClient = async (path: string, body: Record<string, any>) => {
    const res = await fetch(`${notion_api_base_url}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Notion-Version': notion_api_version,
            Authorization: `Bearer ${notion_api_token}`,
        },
        body: JSON.stringify(body),
    });
    const json = await res.json();
    return json;
}

export interface NotionPage {
    id: string;
    cover: string;
    title: string;
    description: string;
    url: string;
}

// query database from Notion API
export const queryDatabase = async (): Promise<NotionPage[]> => {
    const path = `/databases/${notion_api_database_id}/query`;
    const body = {
        filter: {
            property: 'published',
            checkbox: {
                equals: true,
            }
        },
    };
    const { results } = await notionClient(path, body);
    return results.map((page: any) => {
        const { id, cover, properties, url } = page;
        const title = properties.page.title[0].plain_text;
        const description = properties.description.rich_text[0].plain_text;
        let cover_url = '';
        if (cover) {
            cover_url = cover.type === 'external' ? cover.external.url : cover.type === 'file' ? cover.file.url : '';
        }
        // https://www.notion.so/My-first-ef290f2219784d9f80df81fed691af34
        const slug = url.split('/').pop();
        console.log('slug', slug);
        return {
            id,
            cover: cover_url,
            title,
            description,
            url: slug,
        };
    });
}
