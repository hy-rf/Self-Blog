import Proptypes from 'prop-types';

function ChatRoomMemberList(props) {
  return (
    <>
      <button
        onClick={() => {
          props.setchatlocation(['messagelist', props.id]);
        }}
      >
        back
      </button>
      <p>members {props.id}</p>
    </>
  );
}
ChatRoomMemberList.propTypes = {
  setchatlocation: Proptypes.func,
  id: Proptypes.number,
};
export default ChatRoomMemberList;
