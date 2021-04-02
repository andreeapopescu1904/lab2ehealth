import React from 'react';
import axios from 'axios';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import './Home.css';

const pagination = paginationFactory({
  page: 1,
  sizePerPage: 8,
  hideSizePerPage: true
});

const columnFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <a
        href={`/persoana/${row.id}`}
        onClick={() => {
          console.log("clicked row", rowIndex);
        }}
      >
        Afla mai multe detalii
      </a>
    );
  
};

class Home extends React.Component {
    state = {
        persons: [],
        columns: [{
            dataField: 'email',
            text: 'E-Mail'
          }, {
            dataField: 'first_name',
            text: 'First Name'
          }, {
            dataField: 'last_name',
            text: 'Last Name'
          }, {
            dataField: 'detalii',
            text: "Detalii",
            formatter: columnFormatter
          }
        ]
    }
    
    componentDidMount() {
    axios.get(`https://alexgr.ro/ehealth/patients.json`)
        .then(res => {
        const persons = res.data;
        this.setState({ persons });
        })
    }

    render() {
      return (
          <div className="container">
              <BootstrapTable 
                keyField='id'
                data={ this.state.persons }
                columns={ this.state.columns }
                hover={ true }
                pagination={ pagination }
                wrapperClasses="table-responsive table-bordered"
                classes="table-hover table-borderless"
                headerClasses="header-class"
              />
          </div>
      )
    }
}

export default Home;