function List(props){
    
    const itemList = props.items;
    const listCategory = props.category;

    const listItems = itemList.map(items => <li key = {items.id}> {items.name}: &nbsp; <b> {items.calories}</b></li>);
    
    return (
        <>
            <h3>{listCategory}</h3>
            <ol>{listItems}</ol>
        </>
    );


}
export default List