import {
  Layout,
  Background,
  Projects,
  About,
  Contact
} from './components';

function App(): JSX.Element {
  return (
    <Layout>
      <Background />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
