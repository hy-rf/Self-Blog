import Proptypes from 'prop-types';
import styles from './messageunit.module.css';
function MessageUnit(props) {
  return (
    <div className={styles.container} key={props.id}>
      <p className={styles.sender}>{props.username}</p>
      <p className={styles.content}>{props.message}</p>
      <p className={styles.created}>
        {
          new Date(props.created)
            .toLocaleString('en-US', {
              timeZoneName: 'short',
            })
            .split('GMT')[0]
        }
      </p>
    </div>
  );
}
MessageUnit.propTypes = {
  id: Proptypes.number,
  username: Proptypes.string,
  created: Proptypes.string,
  message: Proptypes.string,
};
export default MessageUnit;
