import { Data, Source } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Data) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: this) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values as Source[]);
    }
}

export default AppView;