import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import './index.css'
import data from "./data.js"

const cards = data.map(card =>
  <Card 
  key={card.id}
  card = {card}
/>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <section className='exp-cards'>
      {cards}
    </section>
    
  </React.StrictMode>,
)
