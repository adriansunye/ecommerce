import GetProducts from '../functions/GetProducts';

function Grid(props) {
    return (
        <GetProducts query={props.query}/>
    );
  };

export default Grid;