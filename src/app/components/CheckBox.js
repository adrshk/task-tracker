import React,{ useState, useEffect}  from 'react'
import {Checkbox, Collapse } from 'antd'

const {Panel} = Collapse
const checks = [
    {
        "id": 1,
        "tag": "M"
      }, {
        "id": 2,
        "tag": "F",
      }, {
        "id": 3,
        "tag": "true",
      }, {
        "id": 4,
        "tag": "false",
      }
]

function CheckBox(props){
    const [Checked, setChecked] = useState([])
    const handleToggle = (value)=>{
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
        if(currentIndex === -1){
            newChecked.push(value)
        } else{
            newChecked.splice(currentIndex,1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
    }
    const renderCheckboxLists = () => checks.map((value,index)=>
    (
        <React.Fragment key={index}>
        <Checkbox
        onChange={()=>handleToggle(value.id)}
        type="checkbox"
        style={{
          margin: '5px'
        }}
        checked={Checked.indexOf(value.id)=== -1 ? false : true}
        />
        <span>{value.tag}</span>
        </React.Fragment >
    ))
    return(
        <div>
            <Collapse defaultActiveKey={['0']}>
            <Panel header key="1">
                {renderCheckboxLists()}
            </Panel>
         </Collapse>
        </div>
    )
}

export default CheckBox