import DefaultTemplate from "./components/templates/DefaultTemplate";
import List from "./components/atoms/List";
import Button from "./components/atoms/Button";

const App = () => {
  return (
    <DefaultTemplate>
      <List>
        <li>Рубист</li>
        <li>Работаю в компании больше года</li>
        <li>Хочу понять фронтенд</li>
      </List>
      <Button label={"OK"} />
    </DefaultTemplate>
  );
};

export default App;
