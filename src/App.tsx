import {
  Layout,
  Background,
  About,
  Projects
} from './components';

function App(): JSX.Element {

  return (
    <Layout>
      <Background />
      <About />
      <Projects />
    </Layout>
  );
}

export default App;
