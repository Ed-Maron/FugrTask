import React from 'react'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        // this.findUser = this.props.findUser.bind(this);
    }
    render(){
        return(
            <div>
                <form action="#" className="search-form">
                    <input id="findName" className="search-input" type="text" placeholder="FirstName"/>
                    <button onClick={(e) => {
                        e.preventDefault();
                        let name = document.getElementById('findName').value;
                        this.props.findUser.call(this, name)
                    }}>Search</button>
                </form>
            </div>
        )
    }
}