import { Component } from "react";
import * as ReactDOM from 'react-dom';
import { Form, Pagination, Table } from "react-bootstrap";
import './Table.css'
const $ = require('jquery');
$.DataTable = require('datatables.net');

const column = [
    { title: 'Check', data: 'id' },
    { title: 'Fee Type Code', data: 'id' },
    { title: 'Fee Type Name', data: 'name' },
    { title: 'Description', data: 'description' },
    { title: 'Status', data: 'status' }
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
            activePage: 1,
            data: [
                {
                    id: "1",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "2",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "3",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "4",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "5",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "6",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "7",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "8",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "9",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "10",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "11",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "12",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "13",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "14",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "15",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "16",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "17",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "18",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "19",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "20",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "21",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "22",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "23",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "24",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "25",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "26",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "27",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "28",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "29",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "30",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "31",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "32",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "33",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "34",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "35",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "36",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
                {
                    id: "37",
                    name: 'Service Fee',
                    description: 'Ea officia aliqua incididunt adipisicing amet duis qui non qui ad.',
                    status: 'active',
                },
            ]
        }
    }
    componentDidMount() {
        $(this.tableRef).DataTable({
            dom: 't',
            columns: column,
            data: this.state.data,
            columnDefs: [
                {
                    target: [0],
                    width: '30px',
                    createdCell: (td) => {
                        ReactDOM.render(
                            <div className="flex justify-center">
                                <Form.Check />
                            </div>, td
                        )
                    },

                }
            ],
            destroy: true
        })
        let table = $(this.tableRef).DataTable()
        let info = table.page.info();
        this.setState({
            totalPage: Math.ceil(this.state.data.length / info.length)
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
            totalPage: Math.ceil(this.state.data.length / value),
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
                    <Table
                        ref={this.setTableRef}
                        striped
                        bordered
                    />
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