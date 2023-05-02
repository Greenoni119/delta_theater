import React from 'react';
export class Calander extends React.Component {
    constructor() {
        super();
        var today = new Date(),
        date = today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' +  today.getFullYear();
        this.state = {
            date: date
        };
    }
    render() {
        return (
            <div className=' ml-4 text-lg'>
                {this.state.date}
            </div>
        );
    }
}
export default Calander

