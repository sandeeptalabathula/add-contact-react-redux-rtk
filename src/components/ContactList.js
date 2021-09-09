import { useEffect, useState } from 'react';
import ContactItem from "./ContactItem";

export default function ContactList() {
  const [loading, setLoading] = useState(true);
  const [publicContacts, setPublicContacts] = useState([])

  useEffect(() => {
     console.log("useEffect in ContactList");
     setPublicContacts([
      {id:1, name:"test1", phone: "9820831"},
      {id:2, name:"test2", phone: "9820832"},
      {id:3, name:"test3", phone: "9820833"},
      {id:4, name:"test4", phone: "9820834"},
      {id:5, name:"test5", phone: "9820835"},
      {id:6, name:"test6", phone: "9820836"},
      {id:7, name:"test7", phone: "9820837"},
    ]);
     setLoading(false);
    return () => {
    };
  });
 
  return (
    <div className="contacts-wrapper">
      {publicContacts?.length > 0 ? (
        publicContacts.map((contact) => (
          <div key={contact.id} className="contact-card group ">
             <ContactItem {...contact}/>
          </div>
        ))
      ) : publicContacts ? (
        <p>You have no contacts yet</p>
      ) : loading ? (
        <p>Loading..</p>
      ) : null}
    </div>
  )
}
