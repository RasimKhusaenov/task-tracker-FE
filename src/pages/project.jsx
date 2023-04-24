import {useParams} from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import Button from "../components/atoms/Button";
import Table from "../components/atoms/Table";
import Th from "../components/atoms/Th";
import Td from "../components/atoms/Td";
import { useProject } from "../lib/hooks/states/project";

const ProjectPage = () => {
  const { id } = useParams();
  const { tasks } = useProject({ id });

  return (
    <DefaultTemplate>
      <h1>Tasks</h1>
      <Table>
        <thead>
          <tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Created At</Th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(({ title, description, createdAt }) => (
            <tr>
              <Td>{title}</Td>
              <Td>{description}</Td>
              <Td>{createdAt}</Td>
              <Td>
                <Button label="Comments" />
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

export default ProjectPage;
