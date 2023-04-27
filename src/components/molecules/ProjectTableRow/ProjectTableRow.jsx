import { useState } from "react";
import Td from "../../atoms/Td";
import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import DestroyProjectWindow from "../../atoms/DestroyProjectWindow";

const ProjectTableRow = ({ project }) => {
  const { id, name, description, createdAt } = project;
  const [isDestroyModalOpen, setIsDestroyModalOpen] = useState(false);

  return (
    <>
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
          <Button label="Destroy" onClick={() => setIsDestroyModalOpen(true)} />
        </Td>
      </tr>
      <DestroyProjectWindow isOpen={isDestroyModalOpen} projectName={name} setIsOpen={setIsDestroyModalOpen} />
    </>
  );
};

export default ProjectTableRow;
