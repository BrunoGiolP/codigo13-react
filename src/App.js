// El primer paso para definir un componente es el nombre
// El nombre de un componente siempre debe iniciar en mayuscula
// ahora el componente basicamente es una funcion, por ende podemos crearlo
// usando fucntion o arrow function

const PrimerComponente = () => {
  // esta funcion lo que hara es retonrar una vista
  // en react usamos return () para indicar lo que este dentro de los
  // parentesis sera el objeto visual que vamos a restornar
  // algo importante es que react solo puede retornar un componente a la vez
  // retorna solo un div
  return(
    <div>
      <h1>Hola Mundo</h1>
      <div>
        <h4>Hola</h4>
      </div>
    </div>
  );
};

export default PrimerComponente;