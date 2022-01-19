/* eslint-disable */
import React, { memo } from "react";
import {
    Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, Modal, TextField,
} from "@mui/material";
import { Field, Form } from "formik";
import classes from "./RegisterPage.module.css";
import { ReactComponent as CloseIcon } from "../../assets/icons/eva_close-outline.svg";
import * as yup from "yup"
import { Formik } from "formik";
import { useRegisterStyle } from "./useLoginStyle";
import CreateField from "./CreateField";

const style = {
    position: "absolute",
    top: "382px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    widths: "400px",
    height: "592px",
    padding: "24px"
};

const initialsValues = {
    firstName: '',
    surName: '',
    telephone: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkboxTerms: false,
}

const handleSubmit = (values) => {
    console.log(values)
    return new Promise(resolve => setTimeout(resolve, 2000))
}

const RegisterPage = ({ open, closeWindow, gotoEnter }) => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = yup.object().shape({
        firstName: yup.string().typeError().required('required field'),
        surName: yup.string().typeError().required('required field'),
        telephone: yup.string().typeError().matches(phoneRegExp, 'Phone number is not valid').required('required field'),
        email: yup.string().email("enter your email").required("required field"),
        password: yup.string().typeError().required('required field'),
        confirmPassword: yup.string().typeError().oneOf([ yup.ref('password') ], 'password does not match').required('required field'),
        checkboxTerms: yup.boolean().required().isTrue(),
    })
    const styleField = useRegisterStyle()

    return (
        <Modal
            open={ open }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ style }>
                <div className={ classes.ceil }>
                    <div>Регистрация</div>
                    <div className={ styleField.closeBtn }>
                        <Button onClick={ () => closeWindow() }
                        ><CloseIcon />
                        </Button>
                    </div>
                </div>
                <Box id="modal-modal-description" sx={ { mt: 2, position: "relative" } }>
                    <Formik initialValues={ initialsValues }
                            validationSchema={ validationSchema }
                            onSubmit={ handleSubmit }>
                        { ({ values, errors, touched, isValid, dirty, isSubmitting }) => (
                            <Form className={ styleField.form }>
                                <Box className={ styleField.name }>
                                    < CreateField errors={ errors } touched={ touched } name={ "firstName" }
                                                  placeholder={ 'Имя' } styleField={ styleField } />
                                    < CreateField errors={ errors } touched={ touched } name={ "surName" }
                                                  placeholder={ 'Фамилия' } styleField={ styleField } />
                                </Box>
                                < CreateField errors={ errors } touched={ touched } name={ "telephone" }
                                              placeholder={ 'Номер телефона' } styleField={ styleField } />

                                < CreateField errors={ errors } touched={ touched } name={ "email" }
                                              placeholder={ 'Email адрес' } styleField={ styleField } />
                                <hr className={ styleField.hr } />

                                < CreateField errors={ errors } touched={ touched } type={ 'password' }
                                              name={ "password" }
                                              placeholder={ 'Пароль' } styleField={ styleField } />

                                < CreateField errors={ errors } touched={ touched } type={ 'password' }
                                              name={ "confirmPassword" }
                                              placeholder={ 'Подтвердить пароль' } styleField={ styleField } />

                                <div className={ classes.checkboxRegisterPage }>
                                    <FormControlLabel
                                        control={ (
                                            <Field
                                                name="checkboxTerms"
                                                type="checkbox"
                                                as={ Checkbox }
                                            />
                                        ) }
                                        label=""
                                    />
                                    <p>Я принимаю <span>Правила и Условия</span> использования сайта</p>
                                </div>
                                <div className={ styleField.btnContainer }>
                                    <Button
                                        startIcon={ isSubmitting && <CircularProgress size={ "1rem" } /> }
                                        className={ styleField.buttonRegister }
                                        variant={ "contained" }
                                        type={ "submit" }
                                        disabled={ isSubmitting }
                                    >Зарегистрироваться</Button>
                                </div>
                                <div className={ classes.account }>Уже есть аккаунт?</div>
                                <div style={ { textAlign: "center" } }>
                                    <Button
                                        onClick={ gotoEnter }
                                        className={ styleField.buttonRegister }
                                        disabled={ isSubmitting }
                                    >Войти</Button>
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

