import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from "react-big-calendar";
import moment from "moment";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import logo from "./logo.svg";


const localizer = Calendar.momentLocalizer(moment);

class Bigcalendar extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            events: [
                {
                    start: new Date(),
                    end: new Date(moment().add(1, "days")),
                    title: "Some title"
                }
            ]
        }
    };
    
    render(){
        
        return (
            <div id="container">
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={this.state.events}
                    style={{ height: "100vh" }}
                />
	        </div>
        )
    }
    
};
export default Bigcalendar;


