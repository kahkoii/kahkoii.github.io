import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Posts from './Posts/Posts'
import Error from './Error/Error'

const App: React.FC = () => (
	<HashRouter>
		<Routes>
			{/* Public Pages */}
			<Route path="/" element={<Home />} />
			<Route path="/posts" element={<Posts />} />
			<Route path="/*" element={<Error />} />
		</Routes>
	</HashRouter>
)

export default App
