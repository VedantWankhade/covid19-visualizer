import styled from "styled-components";

const StyledSearch = styled.select`
    width: 100%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 2em;
  background-color: black;
  color: white;
`;

const Search = () => {
    return (
        <StyledSearch
            id="country"
            name="country"
        >
      <option value="world">Worldwide</option>
      <option value='india'>India</option>
    </StyledSearch>
    );
}

export default Search;