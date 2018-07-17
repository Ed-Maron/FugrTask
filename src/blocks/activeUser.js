import React from 'react';

export default class ActiveUser extends React.Component {
    render() {
        const { activeUser } = this.props;
        return (

            <div className="user-info">

                <div className="selected-user">
                    <h3>Выбран пользователь: <i>{activeUser.firstName} {activeUser.lastName}</i></h3>

                    <textarea>
                        {activeUser.description}
                    </textarea>
                        <table>
                            <tbody>
                                <tr>
                                    <td><b>Адрес проживания: </b></td>
                                    <td>{activeUser.address.streetAddress}</td>
                                </tr>
                                <tr>
                                    <td><b>Город:</b></td>
                                    <td>{activeUser.address.city}</td>
                                </tr>
                                <tr>
                                    <td><b>Провинция/штат:</b></td>
                                    <td>{activeUser.address.state}</td>
                                </tr>
                                <tr>
                                    <td><b>Индекс:</b></td>
                                    <td>{activeUser.address.zip}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        );
    };
}