import { DataSource } from "../view/appView";

interface IA {
    endpoint: string;
    options: object;
}

class Loader {
    baseLink: string;
    options: object;
    
    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    

    getResp(
        { endpoint, options = {} }: IA,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    // errorHandler(res) {
    //     if (!res.ok) {
    //         if (res.status === 401 || res.status === 404)
    //             console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
    //         throw Error(res.statusText);
    //     }

    //     return res;
    // }

    makeUrl(options: object, endpoint:string) {
        const urlOptions: { [key:string]:string} = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            // url += key + urlOptions[key]
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback:()=>void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(res => {
                if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
                }
              return res.json() as Promise<DataSource>
            })
            // .then(res => res.json())
            .then(data => callback())
            .catch(err => console.error(err));
    }
}

export default Loader;