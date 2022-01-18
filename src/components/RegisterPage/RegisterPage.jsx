/* eslint-disable */
import React, { memo, useState } from "react";
import {
    Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, Link, Modal, TextField
} from "@mui/material";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import { ReactComponent as CloseIcon } from "../../assets/icons/eva_close-outline.svg";
import classes from "./RegisterPage.module.css";
import useRegisterStyle from "./useRegisterStyle";
/* eslint-disable no-unused-vars */

const style = {
    position: "absolute",
    top: "292px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    widths: "400px",
    height: "416px",
    padding: "24px"
};

const initialsValues = {
    email: "",
    password: "",
    checkboxAgree: false
};

const onSubmit = (values) => {
    console.log(values);
};

const RegisterPage = ({ open, closeWindow }) => {

    const myClass = useRegisterStyle()
    const validationSchema = yup.object().shape({
        email: yup.string().email("enter your email").required("required field"),
        password: yup.string().typeError("should be String").required("required field"),
        checkboxAgree: yup.boolean().required().isTrue(),
    });

    const handleClose = () => {
        closeWindow()
    };
    return (
        <Modal
            open={ open }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ style }
            >
                <div>
                    <div className={ classes.ceil }>
                        <div>Добро пожаловать</div>
                        <div className={ myClass.closeBtn }>
                            <Button onClick={ handleClose }
                            ><CloseIcon />
                            </Button>
                        </div>
                    </div>
                </div>
                <Box id="modal-modal-description" sx={ { mt: 2, position: "relative" } }>
                    <Formik
                        initialValues={ initialsValues }
                        onSubmit={ onSubmit }
                        validationSchema={ validationSchema }
                    >
                        { ({
                               values, errors, touched, isValid, dirty, isSubmitting
                           }) => (
                            <Form>
                                <CreateField errors={ errors } touched={ touched } type="email" name="email" />
                                <CreateField errors={ errors } touched={ touched } type="password" name="password" />
                                <div className={ classes.checkboxPass }>
                                    <FormControlLabel
                                        control={ (
                                            <Field
                                                name="checkboxAgree"
                                                type="checkbox"
                                                as={ Checkbox }
                                            />
                                        ) }
                                        label="Запомнить меня"
                                    />
                                    <Button>Забыли пароль?</Button>
                                </div>
                                <div style={ { textAlign: "center" } }>
                                    <Button
                                        startIcon={ isSubmitting && <CircularProgress size={ "1rem" } /> }
                                        className={ myClass.btn }
                                        variant={ "contained" }
                                        type={ "submit" }
                                        disabled={ isSubmitting }
                                    >Вход</Button>
                                </div>
                                <div className={ classes.flat }>
                                    <div>Ещё нет аккаунта</div>
                                    <Link onClick={ () => console.log(123) }>Зарегистрироваться</Link>
                                </div>
                            </Form>
                        ) }
                    </Formik>
                </Box>
            </Box>
        </Modal>
    );
};

export default RegisterPage;

const CreateField = memo(({
                              errors, touched, type = "text", name
                          }) => {
    const s = useRegisterStyle();
    console.log('render')

    return (
        <Box className={ s.input }
        >
            <FormControl sx={ { mt: 2, position: "relative" } }>
                <Field
                    as={ TextField }
                    name={ name }
                    type={ type }
                    error={ errors[name] && touched[name] && true }
                    helperText={ errors[name] && touched[name]
                        && (
                            <Box
                                component="span"
                                sx={ {
                                    fontSize: "12px",
                                    position: "absolute",
                                    left: 0,
                                    top: "30px"
                                } }
                            >{ errors[name] }
                            </Box>
                        ) }
                    label={ errors[name] && touched[name] && "error" }
                    placeholder={ name }
                />
            </FormControl>
        </Box>
    );
});
