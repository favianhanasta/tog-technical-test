import { Button } from "react-bootstrap";

function DeleteFeeType({
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
                <span className="color-selected flex items-center">Delete Fee Type</span>
            </span>
            <h3>Delete Fee Type</h3>
            <div className="text-center py-10">
                <span>Are you sure you want to delete <b>{selectedData?.name}</b> ?</span>
            </div>
            <div>
                <div className="flex justify-center">
                    <div className="flex gap-2 my-3 ">
                        <Button onClick={handleCancel} className="btn-save" style={{ background: '#027F71', border: 'none' }}>
                            Delete
                        </Button>
                        <Button onClick={handleCancel} className="btn-cancel" style={{ background: 'white', border: '1px solid #707070', color: 'black' }}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteFeeType;