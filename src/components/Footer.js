import styled from "styled-components";

const FooterStyled = styled.footer`
    position: fixed;
    bottom: 0;
    background-color: black;
    width: 100%;
    color: white;
    text-align: center;
    font-size: 1.5rem;
`;


const Footer = () => {
    return (
        <FooterStyled>
            Developed By <a href="https://www.github.com/VedantWankhade">Vedant Wankhade</a>
        </FooterStyled>
    );
}

export default Footer;