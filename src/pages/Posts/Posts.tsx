import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Posts: React.FC = () => {
	return (
		<Flex
			height="100vh"
			flexDir="column"
			alignItems="center"
			paddingTop="40px"
		>
			<Text>Posts go here!!!!!</Text>
			<Link to="/">Home</Link>
			<Link to="posts">Posts</Link>
		</Flex>
	)
}

export default Posts
