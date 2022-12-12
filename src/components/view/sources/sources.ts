import { type } from 'os';
import './sources.css';

type Srcs = {
    id: string | null;
  name: string;
}

class Sources {
  draw(data: Srcs[]) {
      const fragment = document.createDocumentFragment();
      const sourceItemTemp = document.querySelector('#sourceItemTemp');

      data.forEach((item) => {
          if (sourceItemTemp !== null) {
            const sourceClone = document.createElement('template');
            const sourceItem = document.createElement("div")
            sourceItem.className = 'source__item';
            sourceClone.append(sourceItem);
            const sourceItemName = document.createElement("span")
            sourceItemName.className = 'source__item-name';
            sourceItem.append(sourceItemName);
            sourceItemName.textContent = item.name;
            if (item.id !== null) {
              sourceItem.setAttribute('data-source-id', item.id)
            }
            // sourceClone.querySelector('.source__item-name').textContent = item.name;
            // sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
           }
            
      });
      const source = document.querySelector('.sources');
      if (source !== null) {
          source.append(fragment);
      }

        
  }
  
}

export default Sources;
export {Srcs}