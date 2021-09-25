import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
// import { KeyCodeUtils, LanguageUtils } from "../utils";

// import userIcon from '../../src/assets/images/user.svg';
// import passIcon from '../../src/assets/images/pass.svg';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

// import adminService from '../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wp-login">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-center">Login</div>
                        <div className="col-12 form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="col-12">
                        <button>Login</button>
                        </div>
                        <div className="col-12">
                            <span>Forgot your password?</span>
                        </div>
                        <div className="col-12">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);