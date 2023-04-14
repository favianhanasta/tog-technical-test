import { Formik } from "formik";
import { useState } from "react";
import { Button, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import * as Yup from 'yup';

function FormBox({ type, selectedData, handleCancel }) {

    const [activeKey, setActiveKey] = useState('indonesia');

    const validationSchema = Yup.object().shape({
        feeTypeName: Yup.string()
            .min(1, 'please fill the form')
            .max(256, 'Too long')
            .required('Fee type name is required'),
        description: Yup.string()
            .min(1, 'please fill the form')
            .max(4000, 'Too long')
            .required('please fill the form'),
        feeTypeCode: Yup.string()
            .min(1, 'please fill the form')
            .max(36, 'Too long')
            .required('Fee type code is required')
    })

    return (
        <div>
            <div className="formbox-main">
                <Formik initialValues={{
                    feeTypeName: type !== 'create' ? selectedData?.name ?? '' : '',
                    description: type !== 'create' ? selectedData?.description ?? '' : '',
                    feeTypeCode: type !== 'create' ? selectedData?.id ?? '' : ''
                }}
                    validationSchema={validationSchema}
                >
                    {
                        (props) => (
                            <div>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Row>
                                                <Col xs='6'>
                                                    <Form.Label>Fee Type Name<span style={{ color: 'red' }}>*</span></Form.Label>
                                                </Col>
                                                <Col xs='5'>
                                                    <Form.Control disabled={type === 'detail'} type="text" name="feeTypeName" value={props.values.feeTypeName} onChange={props.handleChange} />
                                                </Col>
                                            </Row>
                                            <Row className="my-2">
                                                <Col xs='6'>
                                                    <Form.Label>Description</Form.Label>
                                                </Col>
                                                <Col xs='6'>
                                                    <Form.Control disabled={type === 'detail'} as='textarea' rows={4} name="description" value={props.values.description} onChange={props.handleChange} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col style={{ padding: '0rem 2.5rem' }}>
                                        <div style={{ background: '#F3F4F4', padding: '2rem', borderRadius: '10px' }}>
                                            <h5>For Interface Purpose</h5>
                                            <Form.Group className="my-4">
                                                <Row>
                                                    <Col xs='6'>
                                                        <Form.Label className="flex gap-1">Fee Type Code<span style={{ color: 'red' }}>*</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                        </svg></Form.Label>
                                                    </Col>
                                                    <Col xs='6'>
                                                        <Form.Control disabled={type === 'detail'} type="text" name="feeTypeCode" value={props.values.feeTypeCode} onChange={props.handleChange} />
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        </div>
                                    </Col>
                                </Row>
                                <div style={{ marginTop: '10rem' }}>
                                    <h3>Translation</h3>
                                    <hr />
                                    <Tab.Container defaultActiveKey={'indonesia'}>
                                        <Row className="py-4">
                                            <Col sm='2' style={{ paddingRight: 0 }}>
                                                <Nav className="flex-column" style={{ textDecoration: 'none' }}>
                                                    <Nav.Item
                                                        className={`${activeKey === 'indonesia' ? 'selected-menu' : 'unselected-menu'}`}
                                                        onClick={() => setActiveKey('indonesia')}>
                                                        <Nav.Link eventKey="indonesia" style={{ color: 'black' }}>Indonesia</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item
                                                        className={`${activeKey === 'chinese' ? 'selected-menu' : 'unselected-menu'} my-2`}
                                                        onClick={() => setActiveKey('chinese')}
                                                    >
                                                        <Nav.Link eventKey="chinese" style={{ color: 'black' }}>China Simplified</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                            <Col sm='10' className="languange-box">
                                                <Tab.Content style={{ paddingLeft: '3rem' }}>
                                                    <Tab.Pane eventKey="indonesia">
                                                        <Form.Group>
                                                            <Row>
                                                                <Col xs='3'>
                                                                    <Form.Label>Fee Type Name</Form.Label>
                                                                </Col>
                                                                <Col xs='5'>
                                                                    <Form.Control type="text" />
                                                                </Col>
                                                            </Row>
                                                            <Row className="my-2">
                                                                <Col xs='3'>
                                                                    <Form.Label>Description</Form.Label>
                                                                </Col>
                                                                <Col xs='6'>
                                                                    <Form.Control as='textarea' rows={4} />
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="chinese">
                                                        <Form.Group>
                                                            <Row>
                                                                <Col xs='3'>
                                                                    <Form.Label>Fee Type Name</Form.Label>
                                                                </Col>
                                                                <Col xs='5'>
                                                                    <Form.Control type="text" />
                                                                </Col>
                                                            </Row>
                                                            <Row className="my-2">
                                                                <Col xs='3'>
                                                                    <Form.Label>Description</Form.Label>
                                                                </Col>
                                                                <Col xs='6'>
                                                                    <Form.Control as='textarea' rows={4} />
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </div>
                            </div>
                        )
                    }
                </Formik>

            </div>
            <div className="flex gap-2 my-3">
                {
                    type !== 'detail' ?
                        <Button className="btn-save" style={{ background: '#027F71', border: 'none' }} onClick={handleCancel}>
                            Save
                        </Button>
                        : null
                }
                <Button onClick={handleCancel} className="btn-cancel" style={{ background: 'white', border: '1px solid #707070', color: 'black' }}>
                    {type === 'detail' ? 'Back' : 'Cancel'}
                </Button>
            </div>
        </div>
    );
}

export default FormBox;