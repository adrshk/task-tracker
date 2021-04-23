import React, { useEffect, useState } from 'react'
import Filters from './Filters'

const Schedule = (props) => {
  
  const [eventData, setEventData] = useState(undefined)
  const [filteredData, serFilteredData] = useState(undefined)
  const [selectedFilters, setSelectedFilters] = useState([])
  
  useEffect(() => {
    fetch('./MOCK_DATA.json')
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setEventData(response)
        serFilteredData(response)
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
  
  const handleFilters = (event) => {
    const index = selectedFilters?.indexOf(event.target.value)
    if (index !== -1) {
      setSelectedFilters(selectedFilters => selectedFilters.filter((item) => item !== event.target.value))
    } else {
      setSelectedFilters(selectedFilters => [...selectedFilters, event.target.value])
    }
  }
  
  return (
    <div className="columns">
      <div className="column is-2">
        <h1 className="subtitle "><strong>Johnny</strong></h1>
        <Filters handleFilters={handleFilters}/>
      </div>
      <div className="column is-10 pr-2 event-container">
        <button className="tag is-success is-large mx-1">Editing</button>
        <button className="tag is-warning is-large mx-1">Researching</button>
        <hr></hr>
        <div className="scrolling-wrapper">
          <div className="row">
            <div className="columns" align="center">
              {
                filteredData && Object.keys(filteredData)?.map((month) => {
                  return (
                    <>
                      <div className="column is-one-quarter" key={month.toLowerCase()}>
                        <h3 className="title box is-capitalize " style={{
                          whiteSpace: 'nowrap'
                        }}>{month}</h3>
                        
                        <div>
                          {
                            filteredData[month?.toLowerCase()]?.map((element) => {
                              return (
                                <div
                                  key={element.id}
                                  className={`is-one-fifth box ${selectedFilters.length > 0 && !selectedFilters.includes(element.tag1) && !selectedFilters.includes(element.tag2) ? 'hide-event' : ''}`}
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