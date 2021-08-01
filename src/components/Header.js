import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const HeaderBar = styled.header`
    height: 70px;
    width: 100%;
    background-color: #ccc;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1%;
    overflow: hidden;
    box-sizing: border-box;

    @media (max-width: 450px) {
        height: 50px;
    }
`;

const H1 = styled.h1`
  font-size: 2em;
  color: #2e2e2e
`;

const Nav = styled.nav`
    height: 100%;
   
    a {
        padding: 21% 0;
        vertical-align: middle;
        color: #2e2e2e;
        text-decoration: none;

        @media (max-width: 450px) {
        padding: 11%;
    }
    }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  height: 100%;
`;

const Li = styled.li`
  font-size: 2em;
  width: 90px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;

  @media (max-width: 450px) {
        width: 75px;
    }
`;

const NavContainer = styled.div`
    .nav-active {
        color: white;
    }
`;

const Header = () => {
    return (
        <HeaderBar>
            <H1>Covid19 Visualizer</H1>
            
            <Nav>
                <Ul>
                    <Li>
                        <NavContainer>
                            <NavLink to="/" activeClassName="nav-active" exact>
                                Map
                            </NavLink>
                        </NavContainer>
                    </Li>

                    <Li>
                    <NavContainer>
                        <NavLink to="/graph" activeClassName="nav-active" exact>
                            Graph
                        </NavLink>
                    </NavContainer>
                    </Li>
                </Ul>
            </Nav>
        </HeaderBar>
    )
}

export default Header;