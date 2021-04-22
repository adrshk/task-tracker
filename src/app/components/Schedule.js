import React, { useEffect, useState } from 'react'
import CheckBox from './CheckBox'

const Schedule = (props) => {
  const [months,] = useState([
    { index: 1, name: 'January' },
    { index: 2, name: 'February' },
    { index: 3, name: 'March' },
    { index: 4, name: 'April' },
    { index: 5, name: 'May' },
    { index: 6, name: 'June' },
    { index: 7, name: 'July' },
    { index: 8, name: 'August' },
    { index: 9, name: 'September' },
    { index: 10, name: 'October' },
    { index: 11, name: 'November' },
    { index: 12, name: 'December' },
  ])
  
  const [Filters, setFilters] = useState({
    checks: []
  })
  
  const [data, setData] = useState(undefined)
  
  useEffect(() => {
    fetch('./MOCK_DATA.json')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setData(res)
      })
      .catch(console.error)
  }, [])
  
  const cardElement = (item) => (
    <>
      <p>{item.title}</p>
      <p><span className="tag is-info is-light flr">{item.date}</span></p>
      <span className="tag is-danger is-rounded">{item.tag1}</span>
      <span className="tag is-success is-rounded">{item.tag2}</span>
    </>
  )
  
  const handleFilters = (filters, sets) => {
    console.log(filters)
    const newFilters = { ...Filters }
    newFilters[sets] = filters
    if (filters[0] === 1) {
      console.log('hi')
    } else {
      console.log('hi x2')
    }
    
  }
  return (
    <div className="columns">
      <div className="column is-2">
        <h1 className="subtitle "><strong>Johnny</strong></h1>
        <CheckBox handleFilters={filters => handleFilters(filters, 'checks')}/>
      </div>
      <div className="column column is-10 pr-2">
        <button className="tag is-success is-large">Editing</button>
        <button className="tag is-warning is-large">Researching</button>
        <hr></hr>
        <div className="scrolling-wrapper">
          <div className="row">
            <div className="columns" align="center">
              {
                months?.map((month) => {
                  return (
                    <>
                      <div className="column is-one-fifth" key={month.index}>
                        <h3 className="title box" style={{
                          whiteSpace: 'nowrap'
                        }}>{month.name}</h3>
  
                        <div>
                          {
                            data && data['january']?.map((element) => {
                              return (
                                <div
                                  key={element.id}
                                  className="is-one-fifth box"
                                  id={element.id}>
                                  {cardElement(element)}
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule