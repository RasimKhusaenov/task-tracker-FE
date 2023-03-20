import styled from "styled-components";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import Button from "../components/atoms/Button";

const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  vertical-align: top;
  border-color: black;
  background: black;
  color: white;
`;
const StyledTh = styled.th`
  padding: 0.5rem;
`;
const StyledTd = styled.td`
  padding: 0.5rem;
`;

const ProjectsPage = () => {
  return (
    <DefaultTemplate>
      <h1>Projects</h1>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Name</StyledTh>
            <StyledTh>Description</StyledTh>
            <StyledTh>Created At</StyledTh>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledTd>Mocked Project</StyledTd>
            <StyledTd>This project is mocked</StyledTd>
            <StyledTd>about 1 month ago</StyledTd>
            <StyledTd>
              <Button label="Tasks" />
            </StyledTd>
            <StyledTd>
              <Button label="Edit" />
            </StyledTd>
            <StyledTd>
              <Button label="Destroy" />
            </StyledTd>
          </tr>
        </tbody>
      </StyledTable>
    </DefaultTemplate>
  );
};

export default ProjectsPage;
