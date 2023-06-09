import FormBox from "../../Components/BoxDetailEdit/FormBox";

function EditFeeType({ selectedData, handleCancel }) {

    return (
        <div>
            <span className="breadcrumb gap-2 flex items-center">
                Master Data Management
                <img src="/Assets/Images/right.svg" alt="suitcase" />
                Fee Type
                <img src="/Assets/Images/right.svg" alt="suitcase" />
                <span className="color-selected flex items-center">Edit Fee Type</span>
            </span>
            <h3>Edit Fee Type</h3>
            <div className="my-4">
                <FormBox type='edit' selectedData={selectedData} handleCancel={handleCancel} />
            </div>
        </div>
    );
}

export default EditFeeType;