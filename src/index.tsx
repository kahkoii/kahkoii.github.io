import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Routes'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	initialColorMode: `light`,
	useSystemColorMode: false,
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
)
