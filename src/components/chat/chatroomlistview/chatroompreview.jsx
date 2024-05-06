import api from '@/api';
import { useEffect, useState } from 'react';
import './chatroompreview.css';
import Proptypes from 'prop-types';
// eslint-disable-next-line react/prop-types
function ChatroomPreview({ chatroomid }) {
  const [preview, setpreview] = useState([]);
  useEffect(() => {
    (async () => {
      api.getChatroomMember(chatroomid).then((ret) => {
        setpreview(ret.payload);
      });
    })();
  }, []);
  return (
    <>
      <ul id="chatRoomMemberAvatars">
        {preview.map((ele, index) => {
          return (
            <li
              key={index}
              style={{
                left: -12 * index,
                zIndex: 99 - index,
              }}
            >
              <img
                src={`data:image/png;base64, ${ele.user.avatar}`}
                width={25}
                height={25}
              ></img>
            </li>
          );
        })}
      </ul>
    </>
  );
}
ChatroomPreview.propTypes = {
  chatroomid: Proptypes.number,
};
export default ChatroomPreview;
