import { Formik } from "formik";
import { Col, Form, Row } from "react-bootstrap";

function FormBox() {
    return (
        <div className="formbox-main">
            <Formik initialValues={{
                feeTypeName: '',
                description: ''
            }}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Row>
                                <Col xs='6'>
                                    <Form.Label>Fee Type Name</Form.Label>
                                </Col>
                                <Col xs='5'>
                                    <Form.Control type="text" />
                                </Col>
                            </Row>
                            <Row className="my-2">
                                <Col xs='6'>
                                    <Form.Label>Description</Form.Label>
                                </Col>
                                <Col xs='6'>
                                    <Form.Control as='textarea' />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                    <Col className="col">

                    </Col>
                </Row>
            </Formik>
        </div>
    );
}

export default FormBox;