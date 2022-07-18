import blankAvatar from '../images/logo.png'

const AvatarDisplay = ({ticket}) => {
  return (
    <div className='avatar-container'>
      <div className="img-container">
        <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'photos of ' + ticket.owner} />
      </div>
    </div>
  )
}

export default AvatarDisplay