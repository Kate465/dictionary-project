
import logo from './assets/logo.jpg'
import './App.css'
import Dictionary from "./Dictionary"

export default  function App() {
 

  return (
    
    <div className= "App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" img="fluid"/>
        </header>
        <main>
        <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Keamogetse and is < a href ="https://github.com/Kate465/dictionary-project" target="_blank"> open sourced on Github </a> {" "}
          and hosted on <a href="https://jovial-sawine-ea4970.netlify.app/" target="_blank">Netlify</a> </small> </footer>
     </div>
            </div>    
  )         
           
}


