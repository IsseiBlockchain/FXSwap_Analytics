import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://testnet-graph-node.functionx.io/subgraphs/name/FXSwapAnalytics', // Added by - Issei
    //uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2', // Commented out - Issei
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://testnet-graph-node.functionx.io/index-node/graphql', // Added by - Issei
    //uri: 'https://api.thegraph.com/index-node/graphql', // Commented out - Issei
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://testnet-graph-node.functionx.io/subgraphs/name/FX-EVM-Blocklytics', // Added by - Issei
    //uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks', // Commented out - Issei
  }),
  cache: new InMemoryCache(),
})
