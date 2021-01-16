import React, { Component } from 'react';
import BuildingListServices from '../../service/BuildingListServices';
import { Row , Col, NavDropdown} from 'react-bootstrap'
class ListBuildingsComponent extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            buildings: [],
            message: null
        }
        this.refreshBuildings = this.refreshBuildings.bind(this)
        this.deleteBuildingClicked = this.deleteBuildingClicked.bind(this)
        this.updateBuildingClicked = this.updateBuildingClicked.bind(this)
        this.addBuildingsClickeds = this.addBuildingsClickeds.bind(this)
    }

    componentDidMount() {
        this.refreshBuildings();
    }

    refreshBuildings() {
        BuildingListServices.retrieveAllBuildings()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ buildings: response.data })
                }
            )
    }

    deleteBuildingClicked(id, name) {
        BuildingListServices.deleteBuilding(id)
            .then(
                response => {
                    this.setState({ message: `Delete of Building ${name} Successful` })
                    this.refreshBuildings()
                }
            )    
    }

    updateBuildingClicked(id) {
        this.props.history.push(`/buildings/${id}`)
    }

    addBuildingsClickeds() {
        this.props.history.push(`/buildings/-1`)
    }

    render() {
        return (
         
            <div className="container">
                   <h4> Properties </h4>
                      <div>
                        <button className="btn btn-primary" onClick={this.addBuildingsClickeds}>Add Property</button>&nbsp;
                    </div>
                    <div className="table-container">
                    <table className="table">
                    <thead>
                            <tr>
                                <th>Id</th>
                                <th>Property Name</th>
                                <th>Property Location</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.buildings.map(
                                    buildings =>
                                        <tr key={buildings.id}>
                                            <td>{buildings.id}</td>
                                            <td>{buildings.buildingName}</td>
                                            <td>{buildings.buildingLocation}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteBuildingClicked(buildings.id , buildings.buildingName)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateBuildingClicked(buildings.id)}>Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    
                </div>
              
            </div>
          
        )
    }
}

export default ListBuildingsComponent