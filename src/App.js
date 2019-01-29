import React, { Component} from 'react';
import PropTypes from 'prop-types';
var CONTACTS = [
  {
      id: 1,
      name: 'Darth Vader',
      phoneNumber: '+250966666666',
      image: 'img/darth.png',
      address: 'Kiev, Lvivska street '
  }, {
      id: 2,
      name: 'Princess Leia',
      phoneNumber: '+250966344466',
      image: 'img/leia.png',
      address: 'Kiev, Lvivska street '
  }, {
      id: 3,
      name: 'Luke Skywalker',
      phoneNumber: '+250976654433',
      image: 'img/luke.png',
      address: 'Kiev, Lvivska street '
  }, {
      id: 4,
      name: 'Chewbacca',
      phoneNumber: '+250456784935',
      image: 'img/chewbacca.png',
      address: 'Kiev, Lvivska street '
  },
  {
    id: 5,
    name: 'John',
    phoneNumber: '+250456784935',
    image: 'img/leia.png',
    address: 'Kiev, Lvivska street '
},
{
  id: 6,
  name: 'Roman',
  phoneNumber: '+250456784935',
  image: 'img/chewbacca.png',
  address: 'Kiev, Lvivska street '
},
{
  id: 7,
  name: 'Serhii',
  phoneNumber: '+250456784935',
  image: 'img/chewbacca.png',
  address: 'Kiev, Lvivska street '
},{
  id: 8,
  name: 'Alina',
  phoneNumber: '+250456784935',
  image: 'img/luke.png',
  address: 'Kiev, Lvivska street '
},{
  id: 9,
  name: 'Liza',
  phoneNumber: '+250456784935',
  image: 'img/darth.png',
  address: 'Kiev, Lvivska street '
}
];

class Hello extends Component{
  handleClick= e =>{
    let parentTag = e.target.parentNode.tagName;
    if(parentTag!=='DIV'){
     e.target.parentNode.classList.toggle('transformer')
     e.target.parentNode.lastChild.classList.toggle('show')
    }
    else{
      e.target.classList.toggle('transformer')
      console.dir(e.target)
    }
    
  }
  render(){
    return(
      <li className='contact__item' onClick={this.handleClick} >
        <img className = 'contact__img' src={this.props.image}/>
        <div className='contact__name'>{this.props.name}</div>
        <div className='contact__number'>{this.props.phoneNumber}</div>
        <div className='contact__address'>Address : {this.props.address}</div>
      </li>
    )
  }
}
class ContactList extends Component{
 state={
    displayedContacts: CONTACTS,
 }

handleChange = e=>{
  const searchQuery = e.target.value.toLowerCase();
  const displayedContacts = CONTACTS.filter(function(el){
    const searchValue = el.name.toLowerCase();
    return searchValue.indexOf(searchQuery)!==-1;
  })
  this.setState({
    displayedContacts : displayedContacts,
  })
}

render(){
  return(
    <div className='contact'> 
      <h3>ContactList</h3>      
      <input type='text' placeholder='Search...' onChange={this.handleChange}/>
        {this.state.displayedContacts.map(function(el){
          return <Hello
            key={el.id}
            name={el.name}
            phoneNumber = {el.phoneNumber}
            image = {el.image}
            address ={el.address} />
        })}
    </div>
  )
}
}

export default ContactList;