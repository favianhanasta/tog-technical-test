import './FeeType.css';
import { useState } from "react";
import { dataFeeType } from '../../Services/DummyData'
import FeetypeMain from "./FeeType";
import EditFeeType from './EditFeeType';



function FeeType() {
    const [data, setData] = useState(dataFeeType);
    const [route, setRoute] = useState('edit'); // route simulation

    return (
        <div>
            <span className="breadcrumb gap-2 flex items-center">
                Master Data Management
                <img src="/Assets/Images/right.svg" alt="suitcase" />
                <span className="color-selected flex items-center">FeeType</span>
            </span>
            {
                route === 'feeType' ?
                    <FeetypeMain data={data} />
                    :
                    route === 'edit' ?
                        <EditFeeType />
                        : null
            }
        </div>
    );
}

export default FeeType;