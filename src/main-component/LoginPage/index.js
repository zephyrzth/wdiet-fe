import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

import Navbar from '../../components/Navbar'

import './style.scss';

const LoginPage = () => {
    const push = useNavigate()
    const [value, setValue] = useState({
        email: 'lagi@lagi.com',
        password: 'dhana123',
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const onSubmitLogin = async () => {
        const res = await axios.post('http://localhost:8080/login', value);
        console.log(res, 'res')
        sessionStorage.setItem("id", res.data.id);
    }

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
            });
            validator.hideMessages();

            const userRegex = /^user+.*/gm;
            const email = value.email;

            if (email.match(userRegex)) {
                sessionStorage.setItem("email", email);
                toast.success('successfully Login on Wediet!');
            }
            await onSubmitLogin();
            push('/home');
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };

    return (
        <>
            <Navbar hclass={'wpo-site-header-s1'} />
            <Grid className="loginWrapper">
                <Grid className="loginForm">
                    <h2>Sign In</h2>
                    <p>Sign in to your account</p>
                    <form onSubmit={submitForm}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    className="inputOutline"
                                    fullWidth
                                    placeholder="Email"
                                    value={value.email}
                                    variant="outlined"
                                    name="email"
                                    label="Email"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                />
                                {validator.message('email', value.email, 'required|email')}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className="inputOutline"
                                    fullWidth
                                    placeholder="Password"
                                    value={value.password}
                                    variant="outlined"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                />
                                {validator.message('password', value.password, 'required')}
                            </Grid>
                            <Grid item xs={12}>
                                <Grid className="formFooter">
                                    <Button fullWidth className="cBtnTheme" type="submit">Login</Button>
                                </Grid>
                                <Grid className="loginWithSocial">
                                    <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                    <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                    <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                                </Grid>
                                <p className="noteHelp">Don't have an account? <Link to="/register">Create free account</Link>
                                </p>
                            </Grid>
                        </Grid>
                    </form>
                    <div className="shape-img">
                        <i className="fi flaticon-honeycomb"></i>
                    </div>
                </Grid>
            </Grid>
        </>
    )
};

export default LoginPage;