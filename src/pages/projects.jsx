import Link from "../components/atoms/Link";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import Button from "../components/atoms/Button";
import Table from "../components/atoms/Table";
import Th from "../components/atoms/Th";
import Td from "../components/atoms/Td";
import { useProjects } from "../lib/hooks/states/projects";

const ProjectsPage = () => {
  const { projects } = useProjects();

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
          {projects.map(({ id, name, description, createdAt }) => (
            <tr>
              <Td>{name}</Td>
              <Td>{description}</Td>
              <Td>{createdAt}</Td>
              <Td>
                <Link to={`/projects/${id}`}>Tasks</Link>
              </Td>
              <Td>
                <Button label="Edit" />
              </Td>
              <Td>
                <Button label="Destroy" />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DefaultTemplate>
  );
};

export default ProjectsPage;
