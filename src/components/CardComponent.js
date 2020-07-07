import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import ListItems from './ListItems'
import AddIcon from '@material-ui/icons/Add';
import '../ListItemsstyle.css';
export default class CardComponent extends React.Component{
  constructor(props){
    super()
    this.state = {
      Allitems:[],
      Active:[],
      deletedItems:[],
      items:[],
      currentItem:{
        text:'',
        key:''
      },
      show:true
      
    }
  }

addItem=(e)=>{
 
 e.preventDefault();
  const newItem = this.state.currentItem;
  const temp=[...this.state.Allitems,newItem];
  if(newItem.text !==""){
    const items = [...this.state.items, newItem];
  this.setState({
    items: items,
    currentItem:{
         text:'',
         key:Date.now
    },
    Allitems:temp,
    Active:items
  })
  }else{
    alert('Enter a todo here!!')
  }
}

handleInput=(e)=>{
  this.setState({
    currentItem:{
      text: e.target.value,
      key: Date.now()
    }
  })
}
deleteItem=(key)=>{
  const filteredItems= this.state.items.filter(item =>
    item.key!==key);
    const completed= this.state.items.filter(item =>
      item.key===key);
      const deleted=[...this.state.deletedItems,...completed]
      console.log(`Deleted elements is ${deleted}`);
  this.setState({
    items: filteredItems,
    deletedItems:deleted,
    Active:filteredItems
  })

} 

setUpdate=(text,value)=>{
const items=this.state.items
items.map(item=>{
if(item.key==value){
  item.text=text;
}
this.setState({
  items:items
})
})
}



showActive=()=>{
  this.setState({
    items:this.state.Active,
    show:true
  })
}
showAll=()=>{
  this.setState({
    items:this.state.Allitems,
    show:false
  })
  
}

completedItems=()=>{
  this.setState({
    items:this.state.deletedItems,
    show:false
  })
}

    render(){
        return (
            <div>
            
              <Card>
                <CardHeader style={{border: 'ridge' }}> <header>
     
     <form id="todo" onSubmit={this.addItem}>
       <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
       <span>
       <AddIcon onClick={this.addItem}></AddIcon>
       </span>
       
     </form>
     <p onChange={this.edit}>{this.state.items.text}</p>

   </header></CardHeader>
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText><ListItems 
                  setUpdate={this.setUpdate}
                  deleteItem={this.deleteItem}
                  showItem={this.state.show}
                  items={this.state.items}></ListItems></CardText>
                </CardBody>
        <CardFooter style={{border: 'ridge',color:'white' }}>{`${this.state.items.length} items left`}<span ><Button style={{marginLeft:'30px'}} onClick={this.completedItems}>Completed</Button></span><span><Button onClick={this.showAll} style={{marginLeft:'30px'}}>All</Button></span><span><Button style={{marginLeft:'30px'}} onClick={this.showActive}>Active</Button></span></CardFooter>
              </Card>
            </div>
          );
    }

}