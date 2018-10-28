import React from 'react';
import ReactDOM from 'react-dom';


class Loginform extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    };
    
    
  
    
    
    
    render(){
       
        
        return (
            <div id="container">
		        <form>		
                    <input type="text" placeholder="login"></input>	
                    <input type="password" placeholder="password" onFocus="this.placeholder" onBlur="this.placeholder" id="passwordInput"></input>		
			        <progress id="passwordStrength" value="0"></progress>
                    <input type="submit" value="Sign In"></input>			
		        </form>		
	        </div>
        )
    }
    
};
export default Loginform;


