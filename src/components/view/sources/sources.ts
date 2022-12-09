import './sources.css';

class Sources {
  draw(data: object[]) {
      const fragment = document.createDocumentFragment();
      const sourceItemTemp = document.querySelector('#sourceItemTemp');

      data.forEach((item) => {
          if (sourceItemTemp !== null) {
               const sourceClone = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

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