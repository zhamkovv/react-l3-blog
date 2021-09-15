import React from 'react';


const Feed = ({ image,title,desc }) => {
return <div className='News'>
<img src={image} alt={title} />
<div><h2>{title}</h2>
  <p>{desc}</p>
</div>
</div>
}

export default Feed;
