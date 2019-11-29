import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Stateslide from './stateslide';
import '../bg.css';
import Statesfirst from './statesfirst';
class States extends Component
{
    render()
    {
        return (
            <div>
            {this.props.tour.map((tour,key) => {
                return <Statesfirst tour={tour} key={tour.id}/>
            })}            
            </div>
        )
    }
}
export default States;