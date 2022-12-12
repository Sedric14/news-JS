import AppController from '../controller/controller';
import { AppView, DataSource } from '../view/appView';

class App {
    controller: AppController
    view: AppView
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const source = document.querySelector('.sources');
        if (source !== null) {
            source.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data as DataSource)));
        this.controller.getSources((data) => this.view.drawSources(data as AppView));
        }
        }
}

export {App}
