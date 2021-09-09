import { useEffect, useState } from 'react'
import { PhoneIcon, UserIcon } from '../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { addContact } from '../store/contactSlice'

export default function ContactItem(publicContact) {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  //this line will subscribe to changes in contacts list from store.  
  //const contacts = useSelector((state) => state.contacts.contacts)

  useEffect(() => {
     console.log("useEffect in ContactItem");
    return () => {
    };
  });

  return (
    <div>
        <img
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            alt="headshot"
            className="contact-image"
        ></img>
        <div className="relative w-full p-2">
              <button
                className="add-button"
                onClick={() =>  dispatch(addContact({ name: publicContact.name, phone: publicContact.phone }))}>
                    <FontAwesomeIcon icon={faPlus} />
              </button>

              <div className="flex items-center">
                <UserIcon className="mr-2" />
                <p className="name">{publicContact.name}</p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="mr-2" />
                <p className="phone">{publicContact.phone}</p>
              </div>
            </div>
    </div>
  )
}
