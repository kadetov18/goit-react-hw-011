import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <div className={s.profContainer}>
        <div className={s.profile}>
          <img className={s.profImg} src={image} alt="User avatar" />
          <p className={s.profName}>{name}</p>
          <p className={s.profText}>@{tag}</p>
          <p className={s.profText}>{location}</p>
        </div>

        <ul className={s.proList}>
          <li className={s.profItem}>
            <span className={s.profTitle}>Followers</span>
            <span className={s.profStats}>{followers}</span>
          </li>
          <li className={s.profItem}>
            <span className={s.profTitle}>Views</span>
            <span className={s.profStats}>{views}</span>
          </li>
          <li className={s.profItem}>
            <span className={s.profTitle}>Likes</span>
            <span className={s.profStats}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
