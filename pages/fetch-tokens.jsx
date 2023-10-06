import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Input,
    SimpleGrid,
    Text,
} from '@chakra-ui/react'
import { Alchemy, Network, Utils } from 'alchemy-sdk'
import { useState } from 'react'
import styles from '../styles/buyMeACoffee.module.css'
import Header from '../components/Header'
import { AlchemyapiKey } from '../consts/parameters'

function App() {
    const [userAddress, setUserAddress] = useState('')
    const [results, setResults] = useState([])
    const [hasQueried, setHasQueried] = useState(false)
    const [tokenDataObjects, setTokenDataObjects] = useState([])

    async function getTokenBalance() {
        const config = {
            apiKey: AlchemyapiKey,
            network: Network.ETH_GOERLI,
        }

        const alchemy = new Alchemy(config)
        const data = await alchemy.core.getTokenBalances(userAddress)

        setResults(data)

        const tokenDataPromises = []

        for (let i = 0; i < data.tokenBalances.length; i++) {
            const tokenData = alchemy.core.getTokenMetadata(data.tokenBalances[i].contractAddress)
            tokenDataPromises.push(tokenData)
        }

        setTokenDataObjects(await Promise.all(tokenDataPromises))
        setHasQueried(true)
    }
    return (
        <Box w="100vw">
            <Header />
            <br />
            <br />
            <br />
            <Center>
                <Flex alignItems={'center'} justifyContent="center" flexDirection={'column'}>
                    <Heading mb={0} fontSize={36}>
                        ERC-20 Token Indexer
                    </Heading>
                    <Text>
                        Plug in an address and this website will return all of its ERC-20 token
                        balances!
                    </Text>
                </Flex>
            </Center>
            <Flex w="100%" flexDirection="column" alignItems="center" justifyContent={'center'}>
                <Heading mt={42}>Get all the ERC-20 token balances of this address:</Heading>
                <br />
                <Input
                    className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50"
                    onChange={(e) => setUserAddress(e.target.value)}
                    color="black"
                    w="600px"
                    textAlign="center"
                    p={4}
                    bgColor="white"
                    fontSize={24}
                />
                <Button className={styles.btn} fontSize={20} onClick={getTokenBalance} mt={36}>
                    Check ERC-20 Token Balances
                </Button>

                <Heading my={36}>ERC-20 token balances:</Heading>

                {hasQueried ? (
                    <SimpleGrid w={'90vw'} columns={4} spacing={24}>
                        {results.tokenBalances.map((e, i) => {
                            return (
                                <Flex
                                    flexDir={'column'}
                                    color="white"
                                    bg="blue"
                                    w={'20vw'}
                                    key={e.id}
                                >
                                    <Box>
                                        <b>Symbol:</b> ${tokenDataObjects[i].symbol}&nbsp;
                                    </Box>
                                    <Box>
                                        <b>Balance:</b>&nbsp;
                                        {Utils.formatUnits(
                                            e.tokenBalance,
                                            tokenDataObjects[i].decimals
                                        )}
                                    </Box>
                                    <Image src={tokenDataObjects[i].logo} />
                                </Flex>
                            )
                        })}
                    </SimpleGrid>
                ) : (
                    'Please make a query! This may take a few seconds...'
                )}
            </Flex>
        </Box>
    )
}

export default App
