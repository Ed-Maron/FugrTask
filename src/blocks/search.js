import React from 'react'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

     userSearch(e) {
        e.preventDefault();
        const name = document.getElementById('findName').value;
        if (name === "" ) {
            this.props.updateData({
                isSearch: false
            });
            return
        }

        const filter = this.props.users.filter(user => {
            return user.firstName.includes(name);
        });

         this.props.updateData({
             searchUser: filter,
             isSearch: true
        });

    };

    render(){
        return(
            <div>
                <form action="#" className="search-form">
                    <input id="findName" className="search-input" type="text" placeholder="FirstName"/>
                    <button onClick={this.userSearch.bind(this)}>Search</button>
                </form>
            </div>
        )
    }
}