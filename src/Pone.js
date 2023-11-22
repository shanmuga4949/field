import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Banner from './Banner.jpg'
import styled from 'styled-components'
import Image1 from './Image1.png'
import ComplexFertilizer from './ComplexFertilizer'
import Image2 from './Image2.png'
import Dap from './Dap'
import Image3 from './Image3.png'
import BarathaUrea from './BarathaUrea'
import Image4 from './Image4.jpg'
import Potash from './Potash'
import Image5 from './Image5.jpg'
import Keerthi from './Keerthi'
import './Pone.css'
import './Product.json'



class Pone extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
           count1: 0,
           count2: 0,
           count3: 0,
           count4: 0,
           count5: 0
           
      }
      this.increment1 = this.increment1.bind(this)
      this.decrement1 = this.decrement1.bind(this)

      this.increment2 = this.increment2.bind(this)
      this.decrement2 = this.decrement2.bind(this)
      
      this.increment3 = this.increment3.bind(this)
      this.decrement3 = this.decrement3.bind(this)

      this.increment4 = this.increment4.bind(this)
      this.decrement4 = this.decrement4.bind(this)
      
      this.increment5 = this.increment5.bind(this)
      this.decrement5 = this.decrement5.bind(this)
    }
    
  

    increment1(){
        this.setState({
          count1 : this.state.count1 + 1
        })
    }

    decrement1(){
      this.setState({
          count1 : this.state.count1 - 1 
      })
    }

    increment2(){
      this.setState({
        count2 : this.state.count2 + 1
      })
  }

  decrement2(){
    this.setState({
        count2 : this.state.count2 - 1
    })
  }
  increment3(){
    this.setState({
      count3 : this.state.count3 + 1
    })
}

decrement3(){
  this.setState({
      count3 : this.state.count3 - 1
  })
}

increment4(){
  this.setState({
    count4 : this.state.count4 + 1

  })
}

decrement4(){
this.setState({
    count4 : this.state.count4 - 1
})
}
increment5(){
  this.setState({
    count5 : this.state.count5 + 1
  })
}

decrement5(){
this.setState({
    count5 : this.state.count5 - 1
})
}
   

  render() {
    const bannerStyle = {
      width: '841px',
      height: '120px'
    
    }
    const headStyle = {
      color: 'Darkgreen',
      textAlign: 'left'
    }

    const image = {
      width : '100px',
      height : '100px'
      

    }



    return (
      <div style={{backgroundColor: 'lightgreen'}}>
        <div>
        <img src={Banner} style={bannerStyle} />
        </div>
        <h1 style={headStyle}>Shri Shanmuga Agencies </h1>
        <Router>
        
        <div className='Container'>
        <div className='Container1'><img src={Image1} style={image} />
          <span><h5>Complex Fertilizer</h5>
        
          <Link to="/ComplexFertilizer">Detail</Link>
          <Link to="/"> ^ </Link>
          <Routes>
          <Route path='/ComplexFertilizer' element={<ComplexFertilizer />}></Route>
          </Routes> <br />
          <button onClick={this.decrement1}>-</button><span> {this.state.count1} </span>
            <button onClick={this.increment1}>+</button>
          </span>                           
        </div>
        
        <div className='Container2'><img src={Image2} style={image} />
          <span><h5>D A P</h5>
          <Link to="/Dap">Detail</Link>
          <Link to="/"> ^ </Link>
          <Routes>
          <Route path='/Dap' element={<Dap />}></Route>
          </Routes> <br />
          <button onClick={this.decrement2}>-</button><span> {this.state.count2} </span>
            <button onClick={this.increment2}>+</button>
          </span>         
        </div>

        <div className='Container3'><img src={Image3} style={image} />
          <span><h5>Bharat Urea</h5>
          <Link to="/BarathaUrea">Detail</Link>
          <Link to="/"> ^ </Link>
          <Routes>
          <Route path='/BarathaUrea' element={<BarathaUrea />}></Route>
          </Routes> <br />
          <button onClick={this.decrement3}>-</button><span> {this.state.count3} </span>
            <button onClick={this.increment3}>+</button>
          </span>
        </div>

        <div className='Container4'><img src={Image4} style={image} />
          <span><h5>Muriate Of Potash M.O.P</h5>
          <Link to="/Potash">Detail</Link>
          <Link to="/"> ^ </Link>
          <Routes>
          <Route path='/Potash' element={<Potash />}></Route>
          </Routes> <br />
          <button onClick={this.decrement4}>-</button><span> {this.state.count4} </span>
            <button onClick={this.increment4}>+</button>
          
          </span>
        </div>

        <div className='Container5'><img src={Image5} style={image} />
          <span><h5>Keerthi Granulated Soil Conditioner</h5>
           <Link to="/Keerthi">Detail</Link>
           <Link to="/"> ^ </Link>
           <Routes>
           <Route path='/Keerthi' element={<Keerthi />}></Route>
           </Routes> <br />
           <button onClick={this.decrement5}>-</button><span> {this.state.count5} </span>
            <button onClick={this.increment5}>+</button>
          
          </span>
        </div>



        </div>
       
          
        
        </Router>
        
        

        
      </div>
      
    )
  }
}

export default Pone