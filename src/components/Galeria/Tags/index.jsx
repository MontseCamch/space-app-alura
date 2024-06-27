import styled from "styled-components"
import tags from "./tags.json"

const TagContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    color: #D9D9D9;
    font-size: 24px;
    margin: 0px;
`

const TagButton = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    height: 52px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 10px 8px;
    border-radius: 10px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
        border-color: #C98CF1;
    }
`
const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tag = ({ setTag }) => {
    return <>
        <TagContainer>
            <p>Buscar por tags:</p>
            <Div>
                {tags.map(tag => <TagButton key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</TagButton>
                )}
            </Div>
        </TagContainer>

    </>
}

export default Tag