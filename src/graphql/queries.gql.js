import { gql } from "@apollo/client";

const getSelectionGQL = gql(`
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

export default getSelectionGQL;
