import noSortedData from '../ipBirukov.json';
import { EmbeddedLiElement } from './embeddedLiElement';

function HeadMenu({ selectedRow, setSelectedRow }) {

  function swichViewRow(numHead) {

    if (numHead !== null && selectedRow.includes(numHead)) {
      setSelectedRow(selectedRow.filter(li => li !== numHead))
    } else {
      setSelectedRow([...selectedRow, numHead])
    }
  }

  const data = [...noSortedData.services];
  data.sort((a, b) => a.sorthead - b.sorthead);


  return (<div>
    <ul>
      {
        data
          .map(li => {
            return (
              li.head === null
              &&
              <li key={li.id}
                onClick={(e) => {
                  e.stopPropagation();
                  swichViewRow(li.id)
                }}>
                {console.log(checkForChildren(data, li.id))}
                {checkForChildren(data, li.id)
                  && !selectedRow.includes(li.id)
                  ? <span className="plus"> </span>
                  : <span className="minus"> </span>}
                &nbsp;
                {li.name}
                {(li.node === 0) 
                ?<span> <span>( </span> 
                    {li.price}
                    <span>$ )</span> </span>
                    : <span></span>
          }
                {
                  selectedRow.includes(li.id) &&
                  <EmbeddedLiElement
                    data={data}
                    id={li.id}
                    selectedRow={selectedRow}
                    swichViewRow={swichViewRow}
                  />
                }
              </li>
            )
          })
      }
    </ul>
  </div >
  )
}

function checkForChildren(data, id) {
  return data.filter(el => el.head === id).length;
}

export { checkForChildren, HeadMenu };