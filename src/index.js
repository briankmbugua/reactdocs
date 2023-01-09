import React from 'react'
import * as ReactDOM from 'react-dom/client';

//The select Tag
/*
in html select creates a dropdown list
<select>
<option value="grapefruit">GrapeFruit</option>
<option selected value="coconut">coconut</option>
</select> 

the coconut option is initially selected, coz of the selected attribute
React, instead of using this selected attribute, uses a value attribute
on the root select tag. This is more convinient in a controlled component because you only need to
update it in one place
*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render()