/* eslint-disable */
import React, { useState } from "react";
import {
    Button, MenuItem, Select, TextField
} from "@mui/material";
import { useQuery } from "@apollo/client";
import classes from "./AllBook.module.css";
import { ReactComponent as Filter } from "../../assets/icons/ci_filter.svg";
import { ReactComponent as FilterOff } from "../../assets/icons/ci_filter-off.svg";
import useStyle from "./allTextBooks";
import Aside from "./Aside";
import { getAllTextBooks, getListTextBooksGQL, getSelectingsYearGQL } from "../../graphql/queries.gql";
import CardPath from "../MyHome/Horizontal/CardPath";
import BooksTitle from "./BooksTitle";
import { Form, Formik, Field } from "formik";


const AllBooks = () => {
    console.log('render')
    const style = useStyle();
    const [ year, setYear ] = useState("");
    const [ lesson, setLesson ] = useState("");
    const [ authors, setAuthors ] = useState("");

    const { loading, data } = useQuery(getSelectingsYearGQL);
    const { loading: load, data: dataBooks } = useQuery(getListTextBooksGQL);

    const { loading: loadingAllBooks, data: dataAllBooks } = useQuery(getAllTextBooks, {
        fetchPolicy: "network-only",
        variables: {
            options: {
                // "selectedYear": year,
                // "searchString": authors,
                // "subjectAlias": lesson,
            }
        }
    });

    if (loading || load || loadingAllBooks) return <div>Loading...</div>;


    const itemYear = data.selectingsList.years
        .map((y) => (
            <MenuItem
                value={ y }
                key={ Math.random() }
            >{ y }
            </MenuItem>
        ));
    const books = dataBooks.selectingsList.subjects.map(({ id, name, alias }) => (
        <MenuItem
            key={ id }
            value={ alias }
        >{ name }
        </MenuItem>
    ));

    const observerState = authors.trim().length === 0 && year.length === 0 && lesson.length === 0;

    const handleChangeYear = (e) => {
        setYear(e.target.value);
    };
    const handleChangeBooks = (e) => {
        setLesson(e.target.value);
    };

    function handleAplly() {
        const newObj = {
            authors,
            alias: lesson,
            year
        }
        console.log(newObj);
        return newObj
    }

    const allClear = () => {
        setLesson("");
        setYear("");
        setAuthors("");
    };

    const handleSubmit = (value) => {
        console.log(value)
        useQuery(getAllTextBooks)
    }

    return (
        <div className={ classes.gridContainer }>
            <div className={ classes.head }>Все книги</div>
            <aside className={ classes.aside }>
                <Aside />
            </aside>
            <main className={ classes.main }>
                <div className={ classes.rightWrapper }>
                    <Formik initialValues={ { searchString: "", subject: "", publishYear: "" } }
                            onSubmit={ handleSubmit }>
                        { ({ values, handleChange }) => (<Form>
                            <div className={ classes.ceil }>
                                <div>
                                    <p className={ classes.text }>Фильтры</p>
                                </div>
                                <div>
                                    <div className={ style.btnContainer }>
                                        <Button
                                            disabled={ observerState && true }
                                            variant={ observerState ? "outlined" : "contained" }
                                            startIcon={ (
                                                <FilterOff
                                                    width={ 16 }
                                                    height={ 16 }
                                                    fill={ observerState ? "#C5D7E0" : "white" }
                                                />
                                            ) }
                                            onClick={ allClear }
                                            type={ "reset" }
                                        >Очистить
                                        </Button>
                                        <Button
                                            type={ "submit" }
                                            variant="contained"
                                            startIcon={ <Filter fill="#FFFFFF" width={ 16 } height={ 16 } /> }
                                        >Применить
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <hr className={ classes.hr } />
                            <div className={ style.inputBlock }>
                                <div className={ style.inputHeader }>
                                    <Field
                                        as={ TextField }
                                        fullWidth
                                        name="searchString"
                                        placeholder="Название, автор"
                                        value={ values.searchString }
                                        onChange={ handleChange }
                                    />
                                </div>
                                <div className={ style.inputFooter }>
                                    <Select
                                        name="subject"
                                        // onChange={ handleChangeBooks }
                                        placeholder="Предмет"
                                    >
                                        { books }
                                    </Select>
                                    <Select
                                        value={ year }
                                        name="publishYear"
                                        onChange={ handleChangeYear }
                                    >
                                        { itemYear }
                                    </Select>
                                </div>
                            </div>
                        </Form>) }
                    </Formik>
                </div>
                <div className={ classes.content }>
                    <BooksTitle data={ dataAllBooks } />
                </div>
            </main>
        </div>
    );
};

export default AllBooks;


// <div className={ classes.ceil }>
//     <div>
//         <p className={ classes.text }>Фильтры</p>
//     </div>
//     <div>
//         <div className={ style.btnContainer }>
//             <Button
//                 disabled={ seeState && true }
//                 variant={ seeState ? "outlined" : "contained" }
//                 startIcon={ (
//                     <FilterOff
//                         width={ 16 }
//                         height={ 16 }
//                         fill={ seeState ? "#C5D7E0" : "white" }
//                     />
//                 ) }
//                 onClick={ allClear }
//             >Очистить
//             </Button>
//             <Button
//                 onClick={ handleAplly }
//                 variant="contained"
//                 startIcon={ <Filter fill="#FFFFFF" width={ 16 } height={ 16 } /> }
//             >Применить
//             </Button>
//         </div>
//     </div>
// </div>
// <hr className={ classes.hr } />
// <div className={ style.inputBlock }>
//     <div className={ style.inputHeader }>
//         <TextField
//             fullWidth
//             value={ authors }
//             onChange={ (e) => setAuthors(e.target.value) }
//             placeholder="Название, автор"
//         />
//     </div>
//     <div className={ style.inputFooter }>
//         <Select
//             value={ lesson }
//             onChange={ handleChangeBooks }
//             placeholder="Предмет"
//         >
//             { books }
//         </Select>
//         <Select
//             value={ year }
//             onChange={ handleChangeYear }
//             placeholder="Год выпуска"
//         >
//             { itemYear }
//         </Select>
//     </div>
// </div>
