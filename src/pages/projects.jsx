import DefaultTemplate from "../components/templates/DefaultTemplate";
import Button from "../components/atoms/Button";
import Table from "../components/atoms/Table";
import Th from "../components/atoms/Th";
import Td from "../components/atoms/Td";

const ProjectsPage = () => {
  return (
    <DefaultTemplate>
      <h1>Projects</h1>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Created At</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Mocked Project</Td>
            <Td>This project is mocked</Td>
            <Td>about 1 month ago</Td>
            <Td>
              <Button label="Tasks" />
            </Td>
            <Td>
              <Button label="Edit" />
            </Td>
            <Td>
              <Button label="Destroy" />
            </Td>
          </tr>
        </tbody>
      </Table>
    </DefaultTemplate>
  );
};

export default ProjectsPage;
