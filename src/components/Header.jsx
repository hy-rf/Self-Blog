import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
const HeaderStyle = isMobile
  ? styled.header`
      grid-area: header;
      background: linear-gradient(
        rgba(128, 128, 128, 0.4),
        rgba(128, 128, 128, 0.2)
      );
      border-bottom: 1px solid rgba(128, 128, 128, 0.2);
      padding: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `
  : styled.header`
      grid-area: header;
      background: linear-gradient(
        rgba(128, 128, 128, 0.4),
        rgba(128, 128, 128, 0.2)
      );
      border-bottom: 1px solid rgba(128, 128, 128, 0.2);
      padding: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      display: none;
    `;
function Header() {
  return (
    <HeaderStyle>
      <p>Example Header</p>
    </HeaderStyle>
  );
}

export default Header;
