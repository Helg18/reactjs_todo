import React, {Component} from 'react';


class Header extends Component {
    render() {
        return (
            <nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <label className="title"><i className="fa fa-sticky-note"/> Tasks</label>
                    </li>
                </ul>
            </nav>
        );
    };
}

export default Header;