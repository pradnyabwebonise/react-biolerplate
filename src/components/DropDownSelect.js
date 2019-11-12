import React from 'react'
const DropDownSelect = ({name,placeholder,val,required,handleChange}) => (
	<div>
		<label>{placeholder}</label>
		<select name={name} required={required} onChange={handleChange}>
			<option value="">select an option</option>
			{val.map(values => <option value={values} key={values}>{values}</option>)}
			</select>
		</div>
)
export default DropDownSelect;

