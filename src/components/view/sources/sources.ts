import { Articles, Source } from '../../../types';
import './sources.css';

class Sources {
    draw(data: Source[]) {
        if (data !== null) {
            const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item: Source) => {
            const sourceClone = sourceItemTemp!.cloneNode(true) as HTMLElement;
            if (item.name !== null) {
    sourceClone.querySelector('.source__item-name')!.textContent = item.name;
}
            
            if (item.id !== null) {
                sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);
            }
            

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
        }
        
    }
}

export default Sources;