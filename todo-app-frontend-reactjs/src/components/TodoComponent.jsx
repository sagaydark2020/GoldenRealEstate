import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoListServices from '../service/TodoListServices';

class TodoComponent extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: ''
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

        TodoListServices.retrieveTodo(this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        return errors

    }

    onSubmit(values) {

        let todo = {
            id: this.state.id,
            name: values.name,
            description: values.description
        }

        if (this.state.id === -1) {
            TodoListServices.createTodo(todo)
                .then(() => this.props.history.push('/todo'))
        } else {
            TodoListServices.updateTodo(this.state.id, todo)
                .then(() => this.props.history.push('/todo'))
        }

        console.log(values);
    }

    render() {

        let { description, id } = this.state

        return (
            <div>
                <h3> TODO </h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, description }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="id" hidden />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Todo</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
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

export default TodoComponent