import { useContext } from "react";
import PropTypes from "prop-types";
import AppContext from "../data/AppContext";

const FlexContainer=({element:Element})=>{
  const context = useContext(AppContext);
  const items = context.items;
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