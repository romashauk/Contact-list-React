import React, { Component } from 'react';
var CONTACTS = [
  {
      id: 1,
      name: 'Darth Vader',
      phoneNumber: '+250966666666',
      image: 'img/darth.png'
  }, {
      id: 2,
      name: 'Princess Leia',
      phoneNumber: '+250966344466',
      image: 'img/leia.png'
  }, {
      id: 3,
      name: 'Luke Skywalker',
      phoneNumber: '+250976654433',
      image: 'img/luke.png'
  }, {
      id: 4,
      name: 'Chewbacca',
      phoneNumber: '+250456784935',
      image: 'img/chewbacca.png'
  }
];

class Contact extends Component{
  render(){
    return(
      <li className="contact">
        <img className="contact-image" alt='' src={this.props.image}/>
        <div className="contact-info">
          <div className="contact-name"> {this.props.name} </div>
          <div className="contact-number"> {this.props.phoneNumber} </div>
        </div>
      </li>
    )
  }
}
class ContactLIst extends Component{
  constructor() {
    super();

    this.state = {
      displayedContacts: CONTACTS
    };
}
  handleSearch=(event)=>{
    var searchQuery = event.target.value.toLowerCase();
    const displayedContacts = CONTACTS.filter(function(el) {
      var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
  });
  this.setState({
    displayedContacts: displayedContacts
    });
  }
  render(){
    return(
      <div className="contacts">
      <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
      <ul className="contacts-list">
          {
             this.state.displayedContacts.map(function(el) {
                  return <Contact
                      key={el.id}
                      name={el.name}
                      phoneNumber={el.phoneNumber}
                      image={el.image}
                  />;
             })
          }
      </ul>
  </div>
    )
  }

}
export{
    ContactLIst
}

