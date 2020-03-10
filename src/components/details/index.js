import React, {Component} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'


import Divider from '../layout/divider'
import TextInput from '../Form/TextInput'
import SectionHeader from '../SectionHeader/index'


class Details extends Component{

    // form state is for visual representation of focus
    state = {
        disabled: true,
        form: {
            firstName: false,
            lastName: false,
            email: false,
            contact: false,
            organization: false,
            password: false
        }
    }
    
    handleClick = (e) => {
        const elem = e.target;
        const form = this.state.form;
        if (this.state.disabled) return;
        if (typeof elem.name === "undefined") return;
        if (typeof form[elem.name] === "undefined") return;

        for (let input in form) {
            form[input] = false;
        }
        form[elem.name] = true;
        this.setState({form});
    }


    handleEdit = (e) => {
        const current = this.state.disabled;
        const form = this.state.form;
        for (let input in form) {
            form[input] = false;
        }
        if (current === true) {
            form['firstName'] = true;
        }
        this.setState({disabled: !current, form});
    }

    disableForm = () => {
        const form = this.state.form;

        for (let input in form) {
            form[input] = false;
        }
        this.setState({disabled: true, form});

    }
    
    render() {
        

        return (
            <div id="details">


                <SectionHeader title="My details" />


                <Formik 
                    initialValues={{
                        firstName: 'Lee',
                        lastName: 'Neenan',
                        email: 'lee+monthly@studio.com',
                        contact: '0254877412',
                        organization: "AAP Studio"
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
                        alert(JSON.stringify(values, null, 2));
                    }}
                    onReset={() => {
                        this.disableForm();
                    }}
                >


                    

                    {formik => (
                        <>
                        <Buttons>

                            {this.state.disabled && 
                                    <Edit onClick={this.handleEdit}>Edit</Edit> 
                            }
                            {!this.state.disabled && 
                                <>
                                    <Edit onClick={formik.handleReset}>Cancel</Edit>
                                    <Edit onClick={formik.handleSubmit}>Save</Edit>
                                </>
                            }

                        </Buttons>

                        <Form>
                            <TextInput 
                                onClick={this.handleClick} 
                                label="First Name" 
                                name="firstName" 
                                disabled={this.state.disabled} 
                                active={this.state.form.firstName} 
                            />
                            <Divider />
                            <TextInput 
                                onClick={this.handleClick} 
                                label="Last Name" 
                                name="lastName" 
                                disabled={this.state.disabled}  
                                active={this.state.form.lastName}
                            />
                            <Divider />
                            <TextInput 
                                onClick={this.handleClick} 
                                label="Email Address" 
                                name="email" 
                                type="email" 
                                disabled={this.state.disabled}  
                                active={this.state.form.email}
                            />
                            <Divider />
                            <TextInput 
                                onClick={this.handleClick} 
                                label="Contact Number" 
                                name="contact" 
                                disabled={this.state.disabled} 
                                active={this.state.form.contact}
                            />
                            <Divider />
                            <TextInput 
                                onClick={this.handleClick} 
                                label="Organization Number" 
                                name="organization" 
                                disabled={this.state.disabled} 
                                active={this.state.form.organization}
                            />
                            <Divider />
                            <TextInput 
                                onClick={this.handleClick} 
                                label="Password" 
                                name="password" 
                                type="password" 
                                disabled={this.state.disabled} 
                                active={this.state.form.password}
                            />
                            <Divider />
       
                        </Form>
                        </>
                    )}
                </Formik>
            </div>
        )
    }
}


const Buttons = styled.div`
    position:absolute;
    display:flex;
    right:15px;
    top:10px;
`

const Edit = styled.div`
    font-size:16px;
    color:#4573cd;
    cursor:pointer;
`
export default Details;