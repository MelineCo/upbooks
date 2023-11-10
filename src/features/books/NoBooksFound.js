import sadCat from "../../larmes.png"

const NoBooksFound = () => {
    return (
        <>
        <p>Oops, we didn't find any books. Click on the add button to fix this!</p>
        <img src={sadCat}></img>
        </>
    );
  };
  
export default NoBooksFound;