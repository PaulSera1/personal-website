import {
  Layout,
  Background,
  Projects,
  About
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
