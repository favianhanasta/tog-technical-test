import FormBox from "../../Components/BoxDetailEdit/FormBox";

function DetailFeeType({
    selectedData,
    handleCancel
}) {
    return (
        <div>
            <span className="breadcrumb gap-2 flex items-center">
                Master Data Management
                <img src="/Assets/Images/right.svg" alt="suitcase" />
                Fee Type
                <img src="/Assets/Images/right.svg" alt="suitcase" />
                <span className="color-selected flex items-center">Detail Fee Type</span>
            </span>
            <h3>Detail Fee Type</h3>
            <div className="my-4">
                <FormBox type='detail' selectedData={selectedData} handleCancel={handleCancel} />
            </div>
        </div>
    );
}

export default DetailFeeType;