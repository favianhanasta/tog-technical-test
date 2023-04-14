import { Component } from "react";
import * as ReactDOM from 'react-dom';
import { Form, OverlayTrigger, Pagination, Tooltip } from "react-bootstrap";
import './Table.css'
const $ = require('jquery');
$.DataTable = require('datatables.net');

const column = [
    { data: 'id' },
    { data: 'id' },
    { data: 'name' },
    { data: 'description' },
    { data: 'status' },
    { data: 'id' }
]

class TableFee extends Component {
    constructor(props) {
        super(props);
        this.tableRef = null
        this.setTableRef = (element) => {
            this.tableRef = element
        }
        this.state = {
            info: null,
            totalPage: 0,
            activePage: 1
        }
    }
    componentDidMount() {
        $(this.tableRef).DataTable({
            dom: 't',
            columns: column,
            data: this.props.data,
            orderCellsTop: true,
            columnDefs: [
                {
                    target: [0],
                    width: '75px',
                    orderable: false,
                    createdCell: (td) => {
                        ReactDOM.render(
                            <div>
                                <Form.Check />
                            </div>, td
                        )
                    },

                },
                {
                    target: [5],
                    orderable: false,
                    createdCell: (td, cellData, rowData) => {
                        ReactDOM.render(
                            <div className="flex actions">
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => (
                                        <Tooltip {...props}>
                                            Click to Edit
                                        </Tooltip>
                                    )}
                                >
                                    <button onClick={() => this.props.handleClickActions({ data: rowData, route: 'edit' })}>
                                        <img alt="edit" src="Assets/Images/pencil-square.svg" />
                                    </button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 250 }}
                                    overlay={(props) => (
                                        <Tooltip {...props}>
                                            Click to Detail
                                        </Tooltip>
                                    )}
                                >
                                    <button onClick={() => this.props.handleClickActions({ data: rowData, route: 'detail' })}>
                                        <img alt="eye" src="Assets/Images/eye.svg" />
                                    </button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={(props) => (
                                        <Tooltip {...props}>
                                            Click to Delete
                                        </Tooltip>
                                    )}
                                >
                                    <button onClick={() => this.props.handleClickActions({ data: rowData, route: 'delete' })}>
                                        <img alt="trash" src="Assets/Images/trash.svg" />
                                    </button>
                                </OverlayTrigger>
                            </div>, td
                        )
                    }
                }
            ],
            destroy: true
        })
        let table = $(this.tableRef).DataTable()
        let info = table.page.info();
        this.setState({
            totalPage: Math.ceil(this.props.data.length / info.length)
        })
        $('#info').html(
            `Showing ${info.start + 1} - ${info.end} of ${info.recordsTotal}`
        )
    }

    componentDidUpdate() {
        if (this.state.info) {
            let table = $(this.tableRef).DataTable()
            let info = table.page.info()
            $('#info').html(
                `Showing ${info.start + 1} - ${info.end} of ${info.recordsTotal}`
            )
        }
    }

    handleSelectLength = (e) => {
        let table = $(this.tableRef).DataTable();
        let value = Number(e.target.value)
        table.page.len(value).draw();
        // trigger didupdate
        this.setState({
            info: table.page.info(),
            totalPage: Math.ceil(this.props.data.length / value),
            activePage: 1
        })
    }

    handleNext = () => {
        $(this.tableRef).DataTable().page('next').draw('page');
        //trigger didupdate
        this.setState({
            info: $(this.tableRef).DataTable().page.info(),
            activePage: this.state.activePage + 1
        })
    }

    handlePrev = () => {
        $(this.tableRef).DataTable().page('previous').draw('page');
        //trigger didupdate
        this.setState({
            info: $(this.tableRef).DataTable().page.info(),
            activePage: this.state.activePage - 1
        })
    }

    handlePaginate = (i) => {
        $(this.tableRef).DataTable().page(i).draw('page')
        // trigger didupdate
        this.setState({
            info: $(this.tableRef).DataTable().page.info(),
            activePage: i + 1
        })
    }

    printPagination = () => {
        let items = []
        if (this.state.totalPage) {
            for (let i = 0; i < this.state.totalPage; i++) {
                items.push(
                    <Pagination.Item key={i} onClick={() => this.handlePaginate(i)} active={this.state.activePage === i + 1} >{i + 1}</Pagination.Item>
                )
            }
        }
        return items
    }

    render() {
        return (
            <div>
                <div>
                    <table
                        ref={this.setTableRef}
                        className='table'
                    >
                        <thead>
                            <tr>
                                <td>
                                    <Form.Check />
                                </td>
                                <td>Fee Type Code</td>
                                <td>Fee Type Name</td>
                                <td>Description</td>
                                <td>Status</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <div>
                            <Form.Select onChange={this.handleSelectLength}>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                                <option value={-1}>all</option>
                            </Form.Select>
                        </div>
                        <div className="flex">
                            <p id="info">
                                {/* Showing {this.state.info.start + 1} - {this.state.info.end} of {this.state.info.recordsTotal} */}
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <p style={{ marginTop: '4px', marginRight: '4px' }}>Page:</p>
                        <Pagination>
                            <Pagination.Prev onClick={this.handlePrev} disabled={this.state.activePage === 1} />
                            {this.printPagination()}
                            <Pagination.Next onClick={this.handleNext} disabled={this.state.activePage === this.state.totalPage} />
                        </Pagination>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableFee;