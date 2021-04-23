import './App.css';
import React from 'react';


const link = {
  color:'#fff',
  textDecoration:'underline',
};

const phoneNumberStyle = {marginTop:'0px',marginBottom:'0px'}

let errorTextStyle = {
  display:'none',
  fontSize:'0.7em',
  marginBottom:'5px'
}

let phoneNumber = React.createRef();
let errorText = React.createRef();

const handleClick = () => {
  let n = phoneNumber.current.value;
  if(n === '') {
    errorText.current.style.display = 'block';
    errorText.current.innerHTML = 'Phone number is Empty!';
    phoneNumber.current.style.marginBottom = '0px';
  } else if (n.length < 11) {
    errorText.current.style.display = 'block';
    errorText.current.innerHTML = 'At least number is 11 digits!';
    phoneNumber.current.style.marginBottom = '0px';
  } else {
    errorText.current.style.display = 'none';
    phoneNumber.current.style.marginBottom = '10px';
    window.open("https://wa.me/" + n,'_blank');
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + 'logo.png'} width="60px" alt="Whatsapp Quick" />
        <h1 style={{marginBottom:0}}>Whatsapp Quick</h1>
        <h5 style={{marginTop:'0px'}}>By <a href="https://imtoor.com" style={link} target="_blank" rel="noreferrer">imtoor</a></h5>
          <p></p>
          <div className="row">
            <div className="small-12 medium-12 large-12 columns end">
              <input ref={phoneNumber} type="number" id="phoneNumber" style={phoneNumberStyle} placeholder="Masukkan Nomor Handphone"/>
              <span ref={errorText} style={errorTextStyle}>Enter phone number first!!</span>
              <button type="button" className="success button expanded" onClick={handleClick} style={{marginTop:'10px'}}>Chat Now!</button>
            </div>
          </div>

      </header>
    </div>
  );
}

export default App;
