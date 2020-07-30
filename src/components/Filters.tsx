import React, { useState } from 'react'
import Checkbox from './Checkbox'

interface FiltersProps {}
const Filters = (props: FiltersProps) => {
  const [checked, setChecked] = useState(false)
  console.log(checked)
  const handleCheckboxChange = (event:any) => {
    setChecked( event.target.checked )
  }
  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <span>Label Text</span>
      </label>
    </div>
  )
}

export default Filters
