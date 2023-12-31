import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
  uri : 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),

})
client.query({
  query:gql`query GetLocations{
    locations{
      id
      name
      description
      photo
    }
  }`,
}).then((result)=>{
  console.log("result",result);
})
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
