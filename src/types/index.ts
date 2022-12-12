interface Data {
    status: string;
    totalResults: number;
    articles: Articles[];
}

interface Articles {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface Source{
    id: string | null;
    name: string;
}

export {Data, Articles, Source}