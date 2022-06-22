import PropTypes from 'prop-types'
import s from './Profile.module.css'

function Profile({username,tag,location,avatar,stats}) {
    return <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt={username}
        className={s.avatar}
      />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  
    <ul className={s.stats}>
      <li className={s.listEl}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.listEl}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.listEl}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
}
export default Profile


Profile.propTypes={
    username:PropTypes.string,
    tag:PropTypes.string,
    location:PropTypes.string,
    avatar:PropTypes.string,
    stats:PropTypes.objectOf(PropTypes.number),
}
