import React from 'react';

function IconLink(props) {
   const {link, title, icon} = props;
   return (
      <a href={link} target={"_blank"} >
         <i className={icon}/> {title}
      </a>
   );
}

export default IconLink;