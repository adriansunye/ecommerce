import GetProducts from '../functions/GetProducts';

const Grid = (props) => {
    return (
        <GetProducts query={props.query}/>
    );
  };

export default Grid;