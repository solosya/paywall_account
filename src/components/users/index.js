import React, {Component} from 'react'
import styled, {css}  from 'styled-components'
import User from './user'
import Divider from '../layout/divider'
import Modal from '../modals/modal'
import SectionHeader from '../SectionHeader/index'
import AddUser from './adduser'
import AddUserForm from './addUserForm'

 class Users extends Component {
    constructor() {
        super();
    
        this.searchInput = React.createRef();

        this.state = {
            deleteUser: false,
            selectedUser: null,
            addUserForm: false,
            searchUserForm: false,
            users: [
                {
                    id: 0,
                    firstname: "Andrew",
                    lastname: "Matthews",
                    email: "name@email.co.nz"
                },
                {
                    id: 1,
                    firstname: "Rebecca",
                    lastname: "Dawson",
                    email: "name@email.co.nz"
                },
                {
                    id: 2,
                    firstname: "Amy",
                    lastname: "McPherson",
                    email: "name@email.co.nz"
                },
                {
                    id: 3,
                    firstname: "Lucy",
                    lastname: "George",
                    email: "name@email.co.nz"
                }
            ]
        }
      }
    


    deleteUserModal = (e, userKey) => {
        e.preventDefault();
        // const user = this.state.users[userKey];
        this.setState({
            deleteUser: true,
            selectedUser: userKey
        });
    }

    closeUserDelete = () => {
        this.setState({
            deleteUser: false,
            selectedUser: null
        });
    }

    deleteUser= () => {
        const users = [...this.state.users];
        users.splice(this.state.selectedUser, 1);

        this.setState({
            users,
            selectedUser:null,
            deleteUser: false
        });
    }

    openSearch = () => {
        
        this.setState({
            searchUserForm: !this.state.searchUserForm
        }, ()=> {
            if (this.state.searchUserForm === true) {
                this.searchInput.current.focus();
            }
        })
    }

    addUserForm = () => {
        this.setState({
            addUserForm: !this.state.addUserForm
        })
    }

    performSearch = (e) => {
        e.preventDefault();
        alert('perfoming search');
    }

    addUser = (values) => {
        alert('creating a new user');
        this.addUserForm();
    }

    render() {
        this.searchInput = React.createRef();

        const userDelete = 
            <Modal closeHandler={this.closeUserDelete}>
                {this.state.selectedUser !== null &&
                    <div>
                        <p>Do you want to delete {this.state.users[this.state.selectedUser].firstname}?</p>
                        <button onClick={this.deleteUser}>Yes</button>
                        <button onClick={this.closeUserDelete}>No</button>
                    </div>
                }
            </Modal>

        const addUserForm = <AddUserForm addHandler={this.addUser} closeHandler={this.addUserForm}/>

        return (
            <div id="users" style={{marginTop: "85px"}}>

                <SectionHeader title="My users">
                    <AddUserContainer>
                        <SearchIcon onClick={this.openSearch} />
                        {/* {this.state.searchUserForm &&  */}
                            <Form onSubmit={this.performSearch}>
                                <SearchField 
                                    type="search" 
                                    results="5" 
                                    ref={this.searchInput} 
                                    active={this.state.searchUserForm}
                                    placeholder="Seach users..."
                                />
                            </Form>
                        {/* } */}
                        <AddUser handler={this.addUserForm} />
                    </AddUserContainer>
                </SectionHeader>



                {this.state.deleteUser ? userDelete : null}
                {this.state.addUserForm ? addUserForm : null}

                {this.state.users.map((user, i) => {
                    user.count = i;
                    return <React.Fragment key={user.id}>
                                <User key={user.id} handler={this.deleteUserModal} {...user} />
                                <Divider />
                            </React.Fragment>
                })}
            </div>
        )

    }
}

const Form = styled.form`
    height:28px;
`

const SearchField = styled.input`
    position: absolute;
    height: 28px;
    margin-left: 30px;
    width: 0;
    border: none;
    background-color: rgba(200,200,200,.2);
    opacity:0;
    font-size: 16px;
    border-radius: 15px;
    padding:0 10px 0 20px;
    &:focus {
        outline: none;
    }

    ${props => props.active && css`
        opacity: 1;
        width: 350px;
    `}

    transition: all 200ms ease;
`


const AddUserContainer = styled.div`
    display:flex;
    padding-bottom: 15px;
    align-items:center;
    margin-top:6px;
    margin-left:20px;
    flex-grow:2;
`


const SearchIcon = styled.div`
    display:block;
    height: 17px;
    width: 17px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDI2IDI2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNTk1ODU5IiBzdHJva2Utd2lkdGg9IjIiPgogICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTE4LjE3NiAxOC4xODRsNi43OTcgNi43OTgiLz4KICAgICAgICA8cGF0aCBkPSJNMjEuMTg3IDExLjA0N2MwIDUuNTMyLTQuNTIgMTAuMDE3LTEwLjA5NCAxMC4wMTdTMSAxNi41NzkgMSAxMS4wNDdDMSA1LjUxNSA1LjUxOSAxLjAzIDExLjA5MyAxLjAzYzUuNTc1IDAgMTAuMDk0IDQuNDg1IDEwLjA5NCAxMC4wMTd6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=");
    background-size:contain;
    background-repeat: no-repeat;
    cursor:pointer;
`


export default Users;