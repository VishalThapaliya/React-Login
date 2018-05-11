import React, { Component } from 'react';
import './index.css'
//import './App.css';
import Modal from 'react-modal';


class App extends Component {
  constructor(){
    super()

    this.state = {
      signUp: false,
      forgotPassword: false
    }
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  togglePasswordModal = () => {
    this.setState({
      forgotPassword: !this.state.forgotPassword
    })
  }

  toggleSignUpModal = () => {
    this.setState({
      signUp: !this.state.signUp
    })
  }


  render() {
    return (

      <div className="container">
        <div className="loginContainer">
          <div className="loginWrapper">
            <form className="loginForm">
              <span className="formTitle p-b-20">
                Come, Let&#39;s get In! <br/>
              </span>
              <img className="profile-img"  alt=""/>
              <br/>
              <div className="input_container" >
                <input className="input" type="text" name="email" placeholder="Enter Username" required/>
                <span className="input_border"></span>
              </div>

              <div className="input_container">
                <input  className="input" type="password" name="pass" placeholder="Enter password" required />
                <span className="input_border"></span>
              </div>

              <div className="formBtn">
                <button className="loginBtn"> Sign in </button>
              </div>

              <div className="centerText p-t-46 p-b-20">
                <span className="text">
                  <a href="#" onClick={this.togglePasswordModal}>Forgot Password?</a>
                </span>
              </div>

              <div className="centerText p-t-46 p-b-20">
                <span className="text">
                  Don&#39;t have account, <a href="#" onClick={this.toggleSignUpModal}>Sign Up</a>
                </span>
              </div>
            </form>

            <div className="leftScreen">
              <div className="leftText p-t-25 p-b-15">
                <span className="leftText"> <i className="fa fa-search"> </i> </span>
                  Follow your interests.
              </div>

              <div className="leftText p-t-25 p-b-15">
                <span className="leftText"> <i className="fa fa-users"> </i> </span>
                  Hear what people are taliking about.
              </div>

              <div className="leftText p-t-25 p-b-15">
                <span className="leftText"><i className="fa fa-comments">  </i>  </span>
                Join the conversation.
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={this.state.forgotPassword} onRequestClose={this.togglePasswordModal}>
          <span className="close" title="Close Modal" onClick={this.togglePasswordModal}>×</span>

          <form className="formModal" action="/">
            <h1>Forgot Password</h1><hr/><br/><br/>

            <label><b>Email</b></label><br/>
            <input type="email" placeholder="Enter Email" name="email" required /><br/>

            <div className="clearfix">
              <button type="button" className="cancelbtn" onClick={this.togglePasswordModal}>Cancel</button>
              <button type="submit" className="signupbtn">Send</button>
            </div>
            <br/><br/><br/><br/>


          </form>
        </Modal>

        <Modal isOpen={this.state.signUp} onRequestClose={this.toggleSignUpModal}>
          <span className="close" title="Close Modal" onClick={this.toggleSignUpModal}>×</span>
          <form className="formModal" action="/">
            <h1>Join Stylbum Today</h1><hr/><br/><br/>

            <label><b>Email or Username</b></label><br/>
            <input type="text" placeholder="Enter Email or Username" name="email" required /><br/>

            <label><b>Password</b></label><br/>
            <input type="password" placeholder="Enter Password" name="password" required /><br/>

            <label><b>Repeat Password</b></label><br/>
            <input type="password" placeholder="Repeat Password" name="password-repeat" required /><br/>

            <div className="clearfix">
              <button type="button" className="cancelbtn" onClick={this.toggleSignUpModal}>Cancel</button>
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
            <br/><br/><br/><br/>


          </form>

        </Modal>

      </div>
    );
  }
}

export default App;
