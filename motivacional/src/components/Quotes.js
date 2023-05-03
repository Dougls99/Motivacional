import { useState, useEffect } from 'react'

import whatsapppIcon from '../assets/whatsapp.svg'
import twitterIcon from '../assets/twitter.svg'

const Quotes = () => {
  const [texto, setTexto] = useState('title')
  const [autor, setAutor] = useState('')

  useEffect(() => {
    getQuote()
  }, [])

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
  
  const handleSubmit = () => {
    const phone = "5521968294305";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
};

  const getQuote = () => {
    let url = `https://pensador-api.vercel.app/?term=Jesus+Cristo&max=150`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.frases
        let randomNum = Math.floor(Math.random() * dataQuotes.length)
        let randomQuote = dataQuotes[randomNum]

        setTexto(randomQuote.texto)
        setAutor(randomQuote.autor)
      })
  }


  return ( 
<>
    <nav>
      <div className="navbar">
        <img src="logo-big.png" alt='Logo' width="250" height="150" href="#" />
      </div>
    </nav>

    <div id="quote-box">
      <h1>Motivacional do Dia</h1>
      <div id="text">
        <p>{texto}</p>
      </div>
      <div id="authosr">
        <p>{autor}</p>
      </div>

      <div id="buttons">
        <div className="social-media">
          <a
            href={`https://twitter.com/intent/tweet?text=${autor}:   ${texto}`}
            id="twet-quote"
            target="blank"
            rel="noopener noreferrer"
            > Compartilhar
            <img src={twitterIcon} />
          </a>
        </div>
        <div className="social-media">
        <a
            href={`https://api.whatsapp.com/send?text=${autor}:   ${texto}`}
            id="whats-quote"
            target="blank"
            rel="noopener noreferrer"
            > Compartilhar
            <img src={whatsapppIcon} />
          </a>
        </div>
      </div>
    </div>


    <div className='div-form' >
      <a>Orações</a>
      <form 
        className='form'
        onSubmit={handleSubmit}>
        <label>
        Nome:
        <input
          className='input-name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>
        <label>
        Pedido de Oração:
        <textarea
          className='input-text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua oração..."
        />
        </label>
        <button className='btn-submit' type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
    

    <div className='div-form' >
      <a>Contatos</a>
      <li><p1>Estrada do Cafundá, 2 - Jacarepaguá, Rio de Janeiro - RJ, 22730-540</p1></li>
      <li><p1>videirario.jacarepagua@gmail.com</p1></li>
    </div>
</>
  )
}

export default Quotes
