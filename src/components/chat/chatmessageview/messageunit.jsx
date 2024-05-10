import Proptypes from 'prop-types';
function MessageUnit(props) {
  return (
    <>
      <div className="message-unit" key={props.id}>
        <p className="message-sender">{props.username}</p>
        <p className="time-created">{props.created}</p>
        <p className="message-content">{props.message}</p>
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
