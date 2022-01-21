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

const AllBooks = () => {
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
                "selectedYear": year,
                "searchString": authors,
                "subjectAlias": lesson,
            }
        }
    });

    if (loading || load || loadingAllBooks) return <div>Loading...</div>;

    const allBooks = dataAllBooks.getTextbooks.textbooks.map((book) => (
        <React.Fragment key={ book.id }><CardPath
            book={ book }
        />
        </React.Fragment>
    ));

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

    const seeState = authors.trim().length === 0 && year.length === 0 && lesson.length === 0;

    const handleChangeYear = (e) => {
        setYear(e.target.value);
    };
    const handleChangeBooks = (e) => {
        setLesson(e.target.value);
    };

    const allClear = () => {
        setLesson("");
        setYear("");
        setAuthors("");
    };

    const handleAplly = () => {
        console.log({ authors, alias: lesson, year });
    };

    return (
        <div className={ classes.gridContainer }>
            <div className={ classes.head }>Все книги</div>
            <aside className={ classes.aside }>
                <Aside />
            </aside>
            <main className={ classes.main }>
                <div className={ classes.rightWrapper }>
                    <div className={ classes.ceil }>
                        <div>
                            <p className={ classes.text }>Фильтры</p>
                        </div>
                        <div>
                            <div className={ style.btnContainer }>
                                <Button
                                    disabled={ seeState && true }
                                    variant={ seeState ? "outlined" : "contained" }
                                    startIcon={ (
                                        <FilterOff
                                            width={ 16 }
                                            height={ 16 }
                                            fill={ seeState ? "#C5D7E0" : "white" }
                                        />
                                    ) }
                                    onClick={ allClear }
                                >Очистить
                                </Button>
                                <Button
                                    onClick={ handleAplly }
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
                            <TextField
                                fullWidth
                                value={ authors }
                                onChange={ (e) => setAuthors(e.target.value) }
                                placeholder="Название, автор"
                            />
                        </div>
                        <div className={ style.inputFooter }>
                            <Select
                                value={ lesson }
                                onChange={ handleChangeBooks }
                                placeholder="Предмет"
                            >
                                { books }
                            </Select>
                            <Select
                                value={ year }
                                onChange={ handleChangeYear }
                                placeholder="Год выпуска"
                            >
                                { itemYear }
                            </Select>
                        </div>
                    </div>
                </div>
                <div className={ classes.content }>
                    <div className={ classes.allBooksWrapper }>
                        { allBooks }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AllBooks;
