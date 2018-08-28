import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from "./contact-list";
import fetchContacts from "../reducers/cart-reducer";

class contactpage extends Component {
    componentDidMount() {
        this.props.fetchContacts()
    }
    render() {
        return (
            <div>
                <h1>
                    list of
                </h1>
                <ContactList contacts={this.props.contacts}></ContactList>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        contacts: state.shopping.reducer
    }
}
export default connect(mapStateToProps,{fetchContacts})(contactpage);