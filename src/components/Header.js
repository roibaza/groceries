import styled from "styled-components";

const Header = ({title}) => {
    return (
        <Container className="header">{title}</Container>
    );
}

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #0a66c2;
    font-size: 16px;
    color: #fff;
    font-weight: 600;
`;