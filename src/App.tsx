import Saludador from './ReactFC';
import { Product } from './Products';

function App() {
  return (
    <>
      <Saludador name="Marcelo">
        <h2>Holis, soy el componente hijo</h2>
      </Saludador>
      <Product
        title="Product 1"
        description="Description 1"
        price={10}
        images={[
          'https://img.remediosdigitales.com/78b24d/commonwealth_q524n577r_image_access_800/1366_2000.jpeg',
        ]}
      />
    </>
  );
}

export default App;
