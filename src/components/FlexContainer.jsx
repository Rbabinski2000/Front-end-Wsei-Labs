import PropTypes from "prop-types";
import data from "./useData";

const FlexContainer=({element:Element})=>{
  const items = data();
    return(
      <div className="d-flex flex-wrap">
        {items.map((item,index) =>(
            <div key={index} className="flex-ite p-2">
                <Element person={item}/>
            </div>
        ))}
      </div>
    );
}
FlexContainer.propTypes={
    element:PropTypes.elementType.isRequired,
}

export default FlexContainer