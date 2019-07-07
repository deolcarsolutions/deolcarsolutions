/*
To produce library for  car makes and models.
Starting from Japanese Cars.
Source: https://en.wikipedia.org/wiki/Automotive_industry_in_Japan
 */
import React, {Component} from 'react';

class Cars extends Component{
    state = {
        japaneseMakes: ['Toyota', 'Nissan', 'Honda', 'Suzuki', 'Mazda', 'Daihatsu', 'Subaru', 'Mitsubishi'],
        selectedMake: 'Toyota'

    }


    render() {
        return (
            <div>
                <h3>Dropdown list for cars.</h3>
               <select value={this.state.selectedMake} onChange={e=> this.setState({selectedMake: e.value})}>
                   {this.state.japaneseMakes.map(make => {
                       return <option key={make}>{make}</option>
                   })}
               </select>
            </div>
        );
    }
}

export default Cars;

