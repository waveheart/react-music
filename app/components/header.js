import React from 'react'
import './header.less'

function Header(props) {
	return (
		<div className="component-header row">
			<img src="../../static/images/logo.png" alt="logo" width="40" className="-col-auto"/>
			<h1 className="caption">React Music Player</h1>
		</div>
	)
}

export default Header