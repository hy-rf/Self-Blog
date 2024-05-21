import { api } from '@/api';
import { useEffect, useState } from 'react';
import './chatroompreview.css';
import Proptypes from 'prop-types';
function ChatroomPreview({ chatroomid }) {
  const [preview, setpreview] = useState([]);
  useEffect(() => {
    (async () => {
      api
        .getChatroomMember(chatroomid)
        .then((ret) => {
          setpreview(ret.payload);
        })
        .then(() => {
          document
            .querySelectorAll('.hide')
            .forEach((ele) => ele.classList.add('show'));
        });
    })();
  }, []);
  return (
    <>
      <div className="hide" id="chatRoomMemberAvatars">
        {preview.map((ele, index) => {
          return (
            <div
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
            </div>
          );
        })}
      </div>
    </>
  );
}
ChatroomPreview.propTypes = {
  chatroomid: Proptypes.number,
};
export default ChatroomPreview;
