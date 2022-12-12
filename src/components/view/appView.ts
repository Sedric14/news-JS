import News, { NewsData } from './news/news';
import Sources, { Srcs } from './sources/sources';


type DataSource = {
    status: string;
    totalResults: number;
    articles: NewsData[]
}

class AppView {
    news: News
    sources: Sources
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataSource) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:AppView) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values as Srcs[]);
    }
}

export { AppView };
export { DataSource };