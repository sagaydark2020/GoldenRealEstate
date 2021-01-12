import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BuildingListServices from '../../service/BuildingListServices';

class BuildingComponent extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            buildingName: '' ,
            buildingLocation: ''
        }
        
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        BuildingListServices.retrieveBuilding(this.state.id)
            .then(response => this.setState({
                buildingName: response.data.buildingName,
                buildingLocation: response.data.buildingLocation
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.buildingName) {
            errors.buildingName = 'Enter valid building Name'
        } else if (!values.buildingLocation ) {
            errors.buildingLocation = 'Enter a valid building location'
        } 

        return errors

    }

    onSubmit(values) {

        let buildings = {
            id: this.state.id,
            buildingName: values.buildingName,
            buildingLocation: values.buildingLocation
        }

        if (this.state.id === -1) {
            BuildingListServices.createBuilding(buildings)
                .then(() => this.props.history.push('/buildings/-1'))
        } else {
            BuildingListServices.updateBuilding(this.state.id, buildings)
                .then(() => this.props.history.push('/buildings'))
        }

        console.log(values);
    }

    render() {

        let { buildingName, buildingLocation, id } = this.state
        console.log(this.state)
       
        return (
            <div>
                <h3> Add New Building  </h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, buildingName, buildingLocation }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                           
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="id" hidden />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Building Name</label>
                                        <Field className="form-control" type="text" name="buildingName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Building Location</label>
                                        <Field className="form-control" type="text" name="buildingLocation" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }       
}

export default BuildingComponent