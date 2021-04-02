import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';

//const [data, setData] = useState([]);

class Persoana extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persoana: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get("https://alexgr.ro/ehealth/patients.json").then(res => {
			const persoana = res.data.find(entry => {
				return entry.id == this.props.match.params.id
			});

			this.setState({ persoana });
            
		})
    }

    render() {
        return (
            <div className="container">
                <ul>
                    <li> Name: {this.state.persoana.first_name} {this.state.persoana.last_name} </li>
                    <li> E-Mail: {this.state.persoana.email} </li>
                    <li> Gender: {this.state.persoana.gender} </li>
                    <li> Diagnosis code: {this.state.persoana.diagnosis_code} </li>
                    <li> Diagnosis description: {this.state.persoana.diagnosis_description} </li>
                    <li> Diagnosis description detailed: {this.state.persoana.diagnosis_description_detailed} </li>
                    <li> Administered drug treatment: {this.state.persoana.administered_drug_treatment} </li>        
                </ul>     
                <button>
                    <Link to="/"> Back </Link>
                </button>          
            </div>
        )
      }
}

export default withRouter(Persoana);