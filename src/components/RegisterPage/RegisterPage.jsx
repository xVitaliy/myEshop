/* eslint-disable */
import React, { memo } from "react";
import {
    Box, Button, FormControl, Modal, TextField,
} from "@mui/material";
import { Field, Form } from "formik";
import classes from "./RegisterPage.module.css";
import { ReactComponent as CloseIcon } from "../../assets/icons/eva_close-outline.svg";
import * as yup from "yup"
import { Formik } from "formik";
import { useRegisterStyle } from "./useLoginStyle";

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
}

const RegisterPage = ({ open, closeWindow }) => {
    const validationSchema = yup.object().shape({
        firstName: yup.string().typeError().required('required field'),
        surName: yup.string().typeError().required('required field'),
        telephone: yup.string().typeError().required('required field'),
        email: yup.string().typeError().required('required field'),
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
                            <Form>
                                <Box className={ styleField.name }>
                                    < CreateField2 errors={ errors } touched={ touched } name={ "firstName" }
                                                   placeholder={ 'Имя' } styleField={ styleField } />
                                    < CreateField2 errors={ errors } touched={ touched } name={ "surName" }
                                                   placeholder={ 'Фамилия' } styleField={ styleField } />
                                </Box>
                                < CreateField2 errors={ errors } touched={ touched } name={ "telephone" }
                                               placeholder={ 'Номер телефона' } styleField={ styleField } />

                                < CreateField2 errors={ errors } touched={ touched } name={ "email" }
                                               placeholder={ 'Email адрес' } styleField={ styleField } />
                                <hr />

                                < CreateField2 errors={ errors } touched={ touched } name={ "password" }
                                               placeholder={ 'Пароль' } styleField={ styleField } />

                                < CreateField2 errors={ errors } touched={ touched } name={ "confirmPassword" }
                                               placeholder={ 'Подтвердить пароль' } styleField={ styleField } />
                            </Form>
                        ) }
                    </Formik>
                </Box>
            </Box>
        </Modal>
    );
};

export default RegisterPage;

const CreateField2 = memo(({
                               errors, touched, type = "text", placeholder = '', name
                           }) => {

    return (
        <Box>
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
                    placeholder={ placeholder }
                />
            </FormControl>
        </Box>
    );
});
