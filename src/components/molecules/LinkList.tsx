import * as React from 'react';
import LinkLabel from '../atoms/LinkLabel';

// interface linkListInterface {
//     text: String
//     src: String
// }

const LinkList = () => {
    const links = [
        {title:'POHOTOS', src:'/photos'},
        {title:'ABOUT', src:'/about'},
        {title:'CONTACT', src:'/#'},
    ]
    return(
        <ul className='link-list'>
            {links.map((link) => {
            return(<LinkLabel src={link.src} title={link.title} />)
            })}
        </ul>
    )
}

export default LinkList;