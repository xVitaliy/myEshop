import { gql } from "@apollo/client";

export const getSelectionGQL = gql(`
    query getSelection($page: SelectionPages) {
        getSelection(page: $page) {
            id
            title
            style
            page
            mainTextbookId
            showingStatus
            sliderAutoScroling
            order
            slider {
                alt
                url
            }
            textbooks {
                id
                title
                authors
                issueYear
                subject {
                    name
                    alias
                }
                creatorId
                subjectId
                cover
                price
            }
        }
    }
`);

export const getNewsGQL = gql(`
    query getNews($limit: Int!, $offset: Int!, $sortType: String!) {
        getNews(limit: $limit, offset: $offset, sortType: $sortType) {
            news {
                id
                title
                description
                content
                image
                imageAlt
                visible
                viewsCount
                createdAt
                updatedAt
            }
            count
        }
    }
`);

export const getListTextBooksGQL = gql(`
{
 selectingsList{
  subjects{
    id
    name
    alias
  }
}
}
`);

export const getSelectingsYearGQL = gql(`
{
 selectingsList{
  years
  }
}
`);

export const getAllTextBooks = gql(`
query ($options: optionsGettingTextbooks) {
    getTextbooks(options: $options) {
    textbooks {
            id
            cover
            title
            authors
            issueYear
            price
            title
            subject {
                name
                alias
            }
        }
      count
    }
}
`);
