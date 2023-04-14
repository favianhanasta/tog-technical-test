import './FeeType.css';
import { useState } from "react";
import { dataFeeType } from '../../Services/DummyData'
import FeetypeMain from "./FeeType";
import EditFeeType from './EditFeeType';
import DetailFeeType from './DetailFeeType';
import CreateFeeType from './CreateFeeType';
import DeleteFeeType from './DeleteFeeType';
import { Alert } from 'react-bootstrap';



function FeeType() {
    const [data, setData] = useState(dataFeeType);
    const [selectedData, setSelectedData] = useState(null);
    const [route, setRoute] = useState('feeType'); // route simulation
    const [showAlert, setShowAlert] = useState(false);

    const handleClickActions = ({ data, route }) => {
        setRoute(route);
        setSelectedData(data)
    }

    const handleCancel = () => {
        setSelectedData(null);
        setRoute('feeType');
    }

    return (
        <div>
            {
                route === 'feeType' ?
                    <FeetypeMain data={data} handleClickActions={handleClickActions} />
                    :
                    route === 'edit' ?
                        <EditFeeType selectedData={selectedData} handleCancel={handleCancel} />
                        :
                        route === 'detail' ?
                            <DetailFeeType selectedData={selectedData} handleCancel={handleCancel} />
                            :
                            route === 'create' ?
                                <CreateFeeType selectedData={selectedData} handleCancel={handleCancel} />
                                :
                                route === 'delete' ?
                                    <DeleteFeeType selectedData={selectedData} handleCancel={handleCancel} />
                                    : null
            }
        </div>
    );
}

export default FeeType;