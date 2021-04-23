import React from 'react'

const Filters = (props) => {
  const filters = [
    {
      'id': 1,
      'tag': 'M'
    }, {
      'id': 2,
      'tag': 'F',
    }, {
      'id': 3,
      'tag': 'true',
    }, {
      'id': 4,
      'tag': 'false',
    }
  ]
  return (
    <div className={'filter-container'} key={'filterContainer'}>
      <h3> Apply Filters </h3>
      {
        filters.map((filter) => {
          return (
            <label className="checkbox" key={filter.id}>
              <input type="checkbox" value={filter.tag} onChange={props.handleFilters}/>
              {filter.tag}
            </label>
          )
        })
      }
    </div>
  )
}

export default Filters