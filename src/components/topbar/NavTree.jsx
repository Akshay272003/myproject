const NavTree = ({title}) => {
    return ( 
        <div className="nav-tree sub-title">
            <span className="bold sub-title">Dashboard</span>
            {'>'}
            <span className="bold sub-title">Settings</span>
            {'>'}
            <span className="sub-title">{title}</span>
        </div>
     );
}
 
export default NavTree;