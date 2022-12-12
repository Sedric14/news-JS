import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: <T>(d? : T)=> void) {
        super.getResp(
            {
            endpoint: 'sources',
              options: {}
            },
            callback
        );
    }

    getNews(e: Event, callback: <T>(d? : T)=> void) {
        let target = e.target as Element;
        const newsContainer = e.currentTarget as Element;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId as string);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as Element;
        }
    }
}

export default AppController;