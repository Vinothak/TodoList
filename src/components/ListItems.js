import React from 'react';
import '../ListItemsstyle.css';
import FlipMove from 'react-flip-move'
import DeleteIcon from '@material-ui/icons/Delete';

function ListItems(props){
    const items = props.items;
    const show=props.showItem;
    const val=(show==false)?'hidden':'visible';
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text}
         onChange={(e)=> props.setUpdate(e.target.value,item.key)} />
     
        <DeleteIcon style={{visibility:`${val}`}} onClick={()=> props.deleteItem(item.key)}  type="submit"/>
       
     </p>
    
    </div>})

    return <div>
      <FlipMove duration={300} easing="ease-in-out">
      {listItems}
      </FlipMove>
  
    </div>;
  }

  export default ListItems;