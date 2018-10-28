import React from 'react';
import ReactDOM from 'react-dom';
import Bigcalendar from './components/bigcalendar.jsx';



class App extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
        
    render() {
        return (
            <div>
                <Bigcalendar />
                
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