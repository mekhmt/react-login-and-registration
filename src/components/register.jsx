import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import LoginComponent from './login'
import './register.css'
class Register extends Component{


    render(){
        const styles ={
            backgroundColor :'rgba(0,0,0,.5)',
            borderRadius:'10px',
            color:'white',
            marginTop:'20%',
            padding:'10px'

        }
        return(

    <div className="container">
    <div className="row">
        <div className="panel panel-primary" style={styles}>
            <div class="panel-body">
                <form method="POST" action="#" role="form">
                    <div className="form-group">
                        <h2>Create account</h2>
                    </div>
                    <div className="form-group">
                        <label class="control-label" for="signupName">Your name</label>
                        <input id="signupName" type="text" maxlength="50" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label className="control-label" for="signupEmail">Email</label>
                        <input id="signupEmail" type="email" maxlength="50" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label className="control-label" for="signupEmailagain">Email again</label>
                        <input id="signupEmailagain" type="email" maxlength="50" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label className="control-label" for="signupPassword">Password</label>
                        <input id="signupPassword" type="password" maxlength="25" class="form-control" placeholder="at least 6 characters" length="40"/>
                    </div>
                    <div class="form-group">
                        <label className="control-label" for="signupPasswordagain">Password again</label>
                        <input id="signupPasswordagain" type="password" maxlength="25" class="form-control"/>
                    </div>
                    <div className="form-group">
                        <button id="signupSubmit" type="submit" class="btn btn-info btn-block">Create your account</button>
                    </div>
                    <p className="form-group">By creating an account, you agree to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>.</p>
                    <hr/>
                    <p>Already have an account? <Link to='/'>Sign in</Link></p>
                    
                </form>
            </div>
        </div>
    </div>
</div>
        )
    }
}


export default Register
