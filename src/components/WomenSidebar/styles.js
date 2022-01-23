import styledComponents from "styled-components"

export const Container = styledComponents.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40.62rem;
    margin-left: 3rem;
`

export const Avatar = styledComponents.div `
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        border-radius: 10rem;
        width: 12rem;
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

export const Title = styledComponents.div `
    font-size: 1.85rem;
    font-weight: 500;
    margin-left: 1rem;
    line-height: 1.7rem;
`

export const Description = styledComponents.div `
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-top: 1rem;
    margin-bottom: 2rem;
`

export const LinkToTheirPage = styledComponents.div `
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`