import NavBarMenu from "./NavBarMenu";



function layout ({items}) {
  return (
    <div>
        <nav>
        <ul>
          <NavBarMenu items={items}>

          </NavBarMenu>
        </ul>
      </nav>
     
    </div>
  );
}



export default layout
