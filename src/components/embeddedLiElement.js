import { checkForChildren } from "./headMenu";


export function EmbeddedLiElement({ data, id, selectedRow, swichViewRow }) {

  let arrForParents = [];

  function setDescendants(data, parentId) {
    if (!arrForParents.includes(id)) arrForParents.push(parentId);
    return data.filter(el => el.head === parentId)
  }

  return (
    setDescendants(data, id)
      .map(listEl => {
        return (
          < ul >
            <li key={listEl.id}
              onClick={(e) => {
                e.stopPropagation();
                swichViewRow(listEl.id);
              }}>
              {(checkForChildren(data, listEl.id) > 1)
                ? (!selectedRow.includes(listEl.id))
                  ? <span className="plus"> </span>
                  : <span className="minus"> </span>
                : <span className="space"> </span>
              }
              &nbsp;
              {listEl.name}

              {(listEl.node === 0)
                ? <span> <span>( </span>
                  {listEl.price}
                  <span>$ )</span> </span>
                : <span></span>
              }
              {
                (selectedRow.includes(listEl.id))
                &&
                <EmbeddedLiElement
                  data={data}
                  id={listEl.id}
                  selectedRow={selectedRow}
                  swichViewRow={swichViewRow}
                />
              }
            </li>
          </ul>
        )
      })
  )
}
