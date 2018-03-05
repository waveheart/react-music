// 需要在此处引入这个模块，否则汇报必须先引入hot-loader错误
import 'react-hot-loader/patch'

import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Root from './root.js'

render(
	<AppContainer>
		<Root></Root>
	</AppContainer>,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./root.js', () => {
		const NewRoot = require('./root.js').default
		render(
			<AppContainer>
				<NewRoot></NewRoot>
			</AppContainer>,
			document.getElementById('root')
		)
	})
}