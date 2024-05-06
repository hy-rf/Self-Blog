function ChatRoomMemberList(props) {
  return (
    <>
    <button onClick={()=>{props.setchatlocation(['messagelist',props.id])}}>back</button>
      <p>members {props.id}</p>
    </>
  );
}
export default ChatRoomMemberList;
