import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";

import {
    updateFirstNameInputBox, updateLastNameInputBox, updateCreatePasswordInputPage,
    updateCreateEmailInputPage, changeChoiceOnNav
} from '../actions/index.js';

class SendPasswordToEmail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            loginSuccess: false,
            pressedButton: false,
        }

    }

    pressSendEmail = () => {
        if (this.state.email === '') {
            this.setState({pressedButton: true, loginSuccess: false})
        } else {
            Accounts.forgotPassword({email: this.state.email}, (err) => {
                if (err) {
                    this.setState({loginSuccess: false, pressedButton: true})
                } else {
                    this.setState({loginSuccess: true, pressedButton: true})
                }
            })
        }
    }

    changeEmail = (event) => {
        this.setState({email: event.target.value})
    };

    redirectToLogIn = () => {
        this.props.changeChoiceOnNav('login')
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <div style={{paddingTop: 20}}>
                    <div className={"logInBorder"}>
                        <div>

                            <form noValidate>
                                <div>
                                    <Typography component="h1" variant="h4">
                                        Reset Password
                                    </Typography>
                                    <br/>
                                    <Typography component="h1" variant="h5">
                                        Please enter the email address you used to register the account
                                    </Typography>
                                </div>
                                {
                                    this.state.pressedButton && this.state.loginSuccess ?
                                        <div>
                                            <br/>
                                            <Typography component="h1" variant="h4" color={"primary"}>Please check your
                                                email!</Typography>
                                        </div>
                                        : (this.state.pressedButton && !this.state.loginSuccess) ?
                                        <div>
                                            <br/>
                                            <Typography component="h1" variant="h5" color={"error"}>Please check that
                                                your email is correct!</Typography>
                                        </div> : null
                                }
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Enter email"
                                            autoComplete="email"
                                            onChange={this.changeEmail}
                                            type="Email"

                                        />
                                    </Grid>
                                    <Grid item xs={12}></Grid>
                                </Grid>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={this.pressSendEmail}
                                >
                                    Send Email
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link variant="body2" onClick={this.redirectToLogIn}>
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fNameInput: state.fNameInput,
        lNameInput: state.lNameInput,
        createEmailInput: state.createEmailInput,
        createPasswordInput: state.createPasswordInput,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFirstNameInputBox: (text) => dispatch(updateFirstNameInputBox(text)),
        updateLastNameInputBox: (text) => dispatch(updateLastNameInputBox(text)),
        updateCreatePasswordInputPage: (text) => dispatch(updateCreatePasswordInputPage(text)),
        updateCreateEmailInputPage: (text) => dispatch(updateCreateEmailInputPage(text)),
        changeChoiceOnNav: (choice) => dispatch(changeChoiceOnNav(choice))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendPasswordToEmail);