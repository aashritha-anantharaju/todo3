import TodoItem from "./TodoItem";

function Items({myItems}){
    console.log(myItems)
    
    
    return(
        <>
          {myItems.map((item)=>(<TodoItem key={item.key} todoName={item.name} todoDate={item.date} ></TodoItem>))}
        </>
    );
}
export default Items;