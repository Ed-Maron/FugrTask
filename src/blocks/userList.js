import React from 'react';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users
        };
        this.sortedColumn = { firstName: true, lastName: true };
        this.sortColumn = this.sortColumn.bind(this);
    }

     sortColumn(type) {
         const {  users } = this.state;
         const isSorted = this.sortedColumn[type];
         let direction = isSorted ? 1 : -1;
         const sorted = users.slice().sort((a, b) => {
             if (a[type] === b[type]) { return 0; }
             return a[type] > b[type] ? direction : direction * -1;
         });
         this.sortedColumn[type] = !isSorted;
         this.setState({users: sorted})
    }

    render() {
        let users = this.state.users.map( item =>
            <tr key={item.id.toString()} onClick={ () => {this.props.setActiveUser(item.id)} }>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>

        );
        return (
            <table className="data-table">
                <thead className="data-table__head">
                    <tr>
                        <th>Id</th>
                        <th className='sortElem' onClick={() => this.sortColumn('firstName')}>FirstName {this.sortedColumn['firstName'] ? (<span>&#9660;</span>) : (<span>&#9650;</span>)}</th>
                        <th className='sortElem' onClick={() => this.sortColumn('lastName')}>LastName {this.sortedColumn['lastName'] ? (<span>&#9660;</span>) : (<span>&#9650;</span>)}</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody className="data-table__body">
                    {users}
                </tbody>
            </table>
        )
    }
}

export default UserList