import React from 'react';


// progress component
const Progress = ({done, type}) => {
	// create an empty object to use later see in style
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
				opacity: 1,
				width: `${done}%`
		}
		setStyle(newStyle);
	}, 1000);
	
	return (
		<div class="progress">
  		<div class="progress-done" style={style}>
				{type}
  		</div>
		</div>
	)
};
export default Progress;