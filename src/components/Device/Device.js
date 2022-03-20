import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <DeviceDetail price='13000'></DeviceDetail>
        </div>
    );
};

export default Device;