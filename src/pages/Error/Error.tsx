import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Error: React.FC = () => {
	return (
		<Flex
			height="100vh"
			flexDir="column"
			alignItems="center"
			paddingTop="40px"
		>
			<Text>Invalid URL, go back to home: </Text>
			<Link to="/">Home</Link>
		</Flex>
	)
}

export default Error
