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
            <div className=' ml-4 text-sm'>
                {this.state.date}
            </div>
        );
    }
}
export default Calander


{/*
date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

date = (today.getDate() + 1) + '-' + (today.getMonth() + 1) + '-' +  today.getFullYear();

*/}