import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

import './style.scss';

const SignUpPage = () => {
    const push = useNavigate()

    const [value, setValue] = useState({
        email: '',
        age: 22,
        weight: 65,
        height: 170,
        name: '',
        password: '',
        confirm_password: '',
        gender: 'Male',
        exercise_status: 3
    });

    const onSubmitRegister = async () => {
        await axios.post('http://localhost:8080/register', value);
    }

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));


    const submitForm = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                age: '',
                weight: '',
                height: '',
                name: '',
                password: '',
                confirm_password: '',
            });
            validator.hideMessages();
            sessionStorage.setItem("email", value.email);
            await onSubmitRegister();
            toast.success('Registration Complete successfully!');
            push('/login');
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Signup</h2>
                <p>Signup your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Full Name"
                                value={value.name}
                                variant="outlined"
                                name="name"
                                label="Name"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('full name', value.name, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Age"
                                type="number"
                                value={value.age}
                                variant="outlined"
                                name="age"
                                label="Age"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Height"
                                value={value.height}
                                variant="outlined"
                                type="number"
                                name="height"
                                label="Height (cm)"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Weight"
                                value={value.weight}
                                type="number"
                                variant="outlined"
                                name="weight"
                                label="Weight (kg)"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Gender"
                                value={value.gender}
                                variant="outlined"
                                name="gender"
                                label="Gender (Male/Female)"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('gender', value.gender, 'required')}
                        </Grid>
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
                                label="Password"
                                type="password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                value={value.confirm_password}
                                variant="outlined"
                                name="confirm_password"
                                label="Confirm Password"
                                type="password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('confirm password', value.confirm_password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Sign Up</Button>
                            </Grid>
                            <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid>
                            <p className="noteHelp">Already have an account? <Link to="/login">Return to Sign In</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div>
            </Grid>
        </Grid>
    )
};

export default SignUpPage;