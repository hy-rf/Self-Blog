import Proptypes from 'prop-types';
function MessageList(props) {
  return (
    <>
      <button
        onClick={() => {
          props.setchatlocation(['roomlist', null]);
        }}
      >
        back
      </button>
      <button
        onClick={() => {
          props.setchatlocation(['chatroommemberlist', props.id]);
        }}
      >
        members
      </button>
      <p>yout are in chat room {props.id}</p>
    </>
  );
}
MessageList.propTypes = {
  setchatlocation: Proptypes.func,
  id: Proptypes.number,
};
export default MessageList;
