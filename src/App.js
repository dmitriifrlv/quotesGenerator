import React, { Component } from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faRandom, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

class App extends Component{
  state={
    quote: [
      {
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison"
      }
    ],
    index: 0
  }
  
  componentDidMount (){
    fetch('https://type.fit/api/quotes')
    .then(response=>response.json())
    .then(response=>this.setState({quote:response}, this.getRandomIdx))
  }

  getRandomIdx = () => {
    const { quote } = this.state;
    const index = Math.floor(Math.random()*quote.length);
    this.setState({
      index:index
    })
  }

  render() {
    const element = <FontAwesomeIcon icon={faTwitter} />
    const randIcon = <FontAwesomeIcon icon={faRandom} />
    const quoteLeft = <FontAwesomeIcon icon={faQuoteLeft} />
    const quoteRight = <FontAwesomeIcon icon={faQuoteRight} />
    const { quote, index } = this.state;
    const text = quote[index];
    const tweetURL = `https://twitter.com/intent/tweet?text=${text.text}-${text.author}`;
    return (
      <div className='d-flex align-items-center justify-content-center vh-100'>
        <div className='col-6 box p-4 rounded card-body' id="quote-box">
            {
              text && (
                <div className='blockquote mb-4'>
                  <p id="text"><div id="icon">{quoteLeft}</div>  {text.text} <div id="icon2">{quoteRight}</div> </p>
                  <cite className='d-block text-right blockquote-footer' id="author">{text.author}</cite>
                </div>
              )
            }
            
            <div className="d-flex justify-content-between">
              <a class="btn btn-sm btn-primary" target='_blank' href={tweetURL} id="tweet-quote">{element} Tweet</a>
              <button class="btn btn-sm btn-primary" onClick={this.getRandomIdx} id="new-quote"> {randIcon} Get Quote</button>
            </div>
        </div>
      </div>
      
    )
  }
}

export default App;
