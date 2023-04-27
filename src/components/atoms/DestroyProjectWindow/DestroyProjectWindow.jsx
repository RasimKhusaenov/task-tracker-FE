import React from "react";
import ModalWindow from "../ModalWindow";
import Button from "../Button";

const DestroyProjectWindow = ({ isOpen = true, setIsOpen = () => {}, projectName }) => {
  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      Вы уверены, что хотите удалить проект "{projectName}"?
      <Button onClick={() => setIsOpen(false)} label="Нет" />
    </ModalWindow>
  );
};

export default DestroyProjectWindow;
