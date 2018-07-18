import React from 'react';
import UserList from './userList'
import ActiveUser from  './activeUser'
import Search from  './search'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeUser:[],
            users: [],
            searchUser: [],
            isSearch: false,
            isDataFetch: true,
            isErrorLoad: false,
            errorDescription: ""
        };
    }

    setActiveUser(key){
        this.setState({
            activeUser: this.state.users.find(item => item.id === key)
        })
    }

    updateData(config) {
        this.setState(config);
    }

    async componentDidMount() {
        try {
            this.setState({dataFetch: true, isErrorLoad: false});
            let response = await fetch("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D");
            let resJSON = await response.json();
            this.setState({users: resJSON, isDataFetch: false});
        } catch (e) {
            this.setState({isErrorLoad: true, isDataFetch: false, errorDescription: e+''});
            console.log(e);
        }
    }

    render() {
        let { users, searchUser, isSearch }= this.state;
        return (
            <div>
                <Search users={this.state.users} updateData={this.updateData.bind(this)}/>
                <div className='main-page'>
                    <UserList searchUser={searchUser} isSearch={isSearch} users={users} isDataFetch={this.state.isDataFetch} setActiveUser={this.setActiveUser.bind(this)} updateData={this.updateData.bind(this)}/>
                    {this.state.activeUser.id ? (<ActiveUser activeUser={this.state.activeUser}/>) : false}
                </div>
            </div>
        )
    }
}

export default App