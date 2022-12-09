import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0db89ea87f1c4af89fe5857d5eec63c5', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;