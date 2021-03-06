import React, {Component} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
// import styled from 'styled-components'


import TextInput from '../Form/TextInput'


class AddUserForm extends Component {



    render() {
        return (
            <Formik 
                initialValues={{
                    firstName: 'Lee',
                    lastName: 'Neenan',
                    email: 'lee+monthly@studio.com',
                }} 
                validationSchema= {Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                })} 
                onSubmit={(values, { setSubmitting}) => {
                    this.props.addHandler(values);
                }}
                onReset={() => {
                    this.props.closeHandler();
                }}
            >

                {formik => (
                    <Form>
                        <TextInput 
                            onClick={this.handleClick} 
                            label="First Name" 
                            name="firstName" 
                        />

                        <TextInput 
                            onClick={this.handleClick} 
                            label="Last Name" 
                            name="lastName" 
                        />

                        <TextInput 
                            onClick={this.handleClick} 
                            label="Email Address" 
                            name="email" 
                            type="email" 
                        />


                        <button type="submit" onClick={formik.handleSubmit}>Save</button>
                        <button type="submit" onClick={formik.handleReset}>Cancel</button>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default AddUserForm;
