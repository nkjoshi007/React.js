
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
export default function Profile(){
    return(
        <>
        <h1>{user.name}</h1>
        <img 
        className='avatar'
        src={user.imageUrl}
        alt={'this is the pic of '+ user.name}
        style={{
            height: user.imageSize,
            width: user.imageSize
        }}
        />
        </>
    );
}

