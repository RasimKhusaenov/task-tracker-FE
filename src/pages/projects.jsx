import Table from "../components/atoms/Table";
import Th from "../components/atoms/Th";
import { useProjects } from "../lib/hooks/states/projects";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectTableRow from "../components/molecules/ProjectTableRow";

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
          {projects.map((project) => (
            <ProjectTableRow project={project} />
          ))}
        </tbody>
      </Table>
    </DefaultTemplate>
  );
};

export default ProjectsPage;
