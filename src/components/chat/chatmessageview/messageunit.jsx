import Proptypes from 'prop-types';
import './messageunit.css';
function MessageUnit(props) {
  return (
    <>
      <div className="message-unit" key={props.id}>
        <p className="message-sender">{props.username}</p>
        <p className="message-content">{props.message}</p>
        <p className="time-created">
          {
            new Date(props.created)
              .toLocaleString('en-US', {
                timeZoneName: 'short',
              })
              .split('GMT')[0]
          }
        </p>
      </div>
    </>
  );
}
MessageUnit.propTypes = {
  id: Proptypes.number,
  username: Proptypes.string,
  created: Proptypes.string,
  message: Proptypes.string,
};
export default MessageUnit;
