import DefaultTemplate from "./components/DefaultTemplate";
import List from "./components/List";

const App = () => {
  return (
    <DefaultTemplate>
        <List>
          <li>Рубист</li>
          <li>Работаю в компании больше года</li>
          <li>Хочу понять фронтенд</li>
        </List>
    </DefaultTemplate>
  );
};

export default App;
