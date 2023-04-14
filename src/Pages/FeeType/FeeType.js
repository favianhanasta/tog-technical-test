import { Formik } from "formik";
import { Button, Collapse, Form, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import './FeeType.css';
import * as Yup from 'yup';
import { useState } from "react";
import TableFee from "../../Components/Table/TableFee";

function FeetypeMain({ data }) {
    const [openAdvOption, setOpenAdvOption] = useState(false);

    const searchSchema = Yup.object().shape({
        search: Yup.string()
            .min(0, 'Please fill the form')
            .max(256, 'Max 256 Words')
    })

    return (
        <div>
            <h3>Fee Type</h3>
            <div className="flex justify-between body-feetype">
                <div className="flex left-side">
                    <div className="search-box">
                        <Formik
                            initialValues={{
                                search: ''
                            }}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                            validationSchema={searchSchema}
                        >
                            {
                                (props) => {
                                    return (
                                        <>
                                            <InputGroup size="sm" style={{ width: '250px' }}>
                                                <Form.Control
                                                    placeholder="Search..."
                                                    onChange={props.handleChange}
                                                    name='search'
                                                />
                                                <Button
                                                    onClick={props.handleSubmit}
                                                    style={{ background: 'white', borderWidth: '1px 1px 1px 0px', borderColor: '#CED4DA' }}
                                                >
                                                    <img src="Assets/Images/search.svg" alt="search-btn" />
                                                </Button>
                                            </InputGroup>
                                            {props.errors.search ? <p style={{ fontSize: '12px', color: 'red' }}>Too long!</p> : null}
                                        </>
                                    )
                                }
                            }
                        </Formik>
                    </div>
                    <button className="bold flex gap-2 pointer btn-adv" onClick={() => setOpenAdvOption(!openAdvOption)}>
                        Advanced Options
                        <span>
                            <img src={`Assets/Images/double-${openAdvOption ? 'up' : 'down'}.svg`} alt="double-down" />
                        </span>
                    </button>
                </div>
                <div className="right-side">
                    <OverlayTrigger
                        placement="top"
                        overlay={(props) => (
                            <Tooltip {...props}>
                                Click to Download
                            </Tooltip>
                        )}
                    >
                        <button className="btn-grey">
                            <img src="Assets/Images/download.svg" alt="download" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={(props) => (
                            <Tooltip {...props}>
                                Click to Print
                            </Tooltip>
                        )}
                    >
                        <button className="btn-grey">
                            <img src="Assets/Images/printer.svg" alt="printer" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={(props) => (
                            <Tooltip {...props}>
                                Click to Create
                            </Tooltip>
                        )}
                    >
                        <Button style={{ gap: '1rem', display: 'flex', alignItems: 'center', background: '#F3C244', color: '#5E5E5E', border: 'none' }}>
                            <img src="Assets/Images/file-plus.svg" alt='file-plus' />
                            Create New
                        </Button>
                    </OverlayTrigger>
                </div>
            </div>
            <Collapse in={openAdvOption}>
                <div className="advanced-option-box flex justify-between" style={{ margin: '1.5rem 0' }}>
                    <div>
                        <Formik
                            initialValues={{
                                status: false
                            }}
                        >
                            <Form.Group controlId="status">
                                <Form.Label>Status</Form.Label>
                                <Form.Select size="sm">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </Form.Select>
                            </Form.Group>
                        </Formik>
                    </div>
                    <div className="refresh-icon">
                        <img src="Assets/Images/refresh.svg" alt="refresh" className="img-full" />
                    </div>
                </div>
            </Collapse>
            <TableFee data={data} />
        </div>
    );
}

export default FeetypeMain;