import React from 'react';
import ReactDOM from 'react-dom';
import Loginform from './components/loginform.jsx';



class App extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    
        
    render() {
        return (
            <div>
                <Loginform />
                
            </div>
            
        )
    }
}
    

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});