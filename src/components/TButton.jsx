import { Dropdown } from "react-bootstrap"

const TButton=({handleSort,part})=>{
    const temp=part.toLowerCase().slice(0,4)
    return(
        <Dropdown>
            <Dropdown.Toggle split variant="success" id="dropdown-user">
                {part}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={()=>handleSort("asc",temp)}>Ascending Order</Dropdown.Item>
                <Dropdown.Item onClick={()=>handleSort("dsc",temp)}>Descending Order</Dropdown.Item>
                <Dropdown.Item onClick={()=>handleSort("natural")}>Natural Order</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default TButton