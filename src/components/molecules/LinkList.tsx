import * as React from 'react';
import LinkLabel from '../atoms/LinkLabel';

const LinkList = () => {
    const links = [
        {title:'POHOTOS', src:'/photos'},
        {title:'ABOUT', src:'/about'},
        {title:'CONTACT', src:'/contact'},
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