import styledComponents from "styled-components"

export const Container = styledComponents.div `
    display: flex;
    width: 20.62rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Avatar = styledComponents.div `
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 10rem;
        width: 15rem;
    }

    @media (max-width: 450px ) {
        img {
            width: 8rem;
        }
    }

`

export const ContainerTitleAndImage = styledComponents.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Description = styledComponents.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 2rem;
`

export const MailingList = styledComponents.div `
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const GithubContainer = styledComponents.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
`

export const IconsAtBottom = styledComponents.div `
    width: 5rem;
`
