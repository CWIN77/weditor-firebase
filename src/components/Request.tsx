import { Link } from 'react-router-dom';
import styled from 'styled-components' 
import { ReactComponent as Svg_money } from '../svgs/money.svg';
import { ReactComponent as Svg_play } from '../svgs/play.svg';

function Request() {
  return (
    <Container>
      <div style={{display:"flex",alignItems:'center'}}>
        <UserImg src='https://lh3.googleusercontent.com/a-/AOh14GhBIpwktw4iDwX7_dafbrn64O2wNRJbx1hivycj5A=s96-c'/>
        <StatusText>CWIN77</StatusText>
        <span style={{width:3,height:3,backgroundColor:'rgba(218, 228, 242, 0.7)',margin:6,borderRadius:"100px"}} />
        <StatusText>3시간전</StatusText>
      </div>
      <Link to="/request/Adm1sK9W">
        <Title>간단하게 컷편집 해주세요!</Title>
        <ExplaneText>게임 플레이 영상중에서 괜찮은 장면만 적당히 골라서 컷편집으로 만들어서 올려주세요.</ExplaneText>
      </Link>
      <div style={{display:'flex',alignItems:'center',flexWrap:'wrap'}}>
        <Tag>게임</Tag>
        <Tag>무자막</Tag>
        <Tag>무자막</Tag>
      </div>
      <div style={{display:'flex',alignItems:'center',marginTop:18,marginBottom:2,justifyContent:"space-between"}}>
        <div style={{display:'flex',alignItems:'center'}}>
          <Svg_money width={22} height={22} fill="#DDE5F1" />
          <Payment>60,000원~</Payment>
        </div>
        <PlayBtn href='https://youtu.be/3Wex4qJJN-s' target='_blank'>
          <Svg_play width={13} height={13} stroke="#121212" />
          <h2>영상보기</h2>
        </PlayBtn>
      </div>
    </Container>
  )
}


const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:calc(100% - 2rem - 2rem);
  padding: 1rem;
  margin: 1rem;
  background-color: #262A31;
  border-radius: 8px;
  @media only screen and (min-width:720px) {
    margin-right:0px;
    margin-bottom: 0px;
    width: calc(50% - 3.5rem);
  }
  @media only screen and (min-width:1050px) {
    margin-right:0px;
    margin-bottom: 0px;
    width: calc((100% / 3) - 3.3rem);
  }
`
const UserImg = styled.img`
  width:14px;
  height:14px;
  border-radius: 100px;
  margin-right: 6px;
`
const Title = styled.h1`
  font-size: 16px;
  width:92%;
  margin-top:6px;
  margin-bottom: 2px;
`
const StatusText = styled.h4`
  font-size: 11px;
  color: rgba(218, 228, 242, 0.7);
`
const ExplaneText = styled.h2`
  font-size: 13px;
  width:92%;
  color: rgba(218, 228, 242, 0.7);
`
const Tag = styled.div`
  font-size: 11px;
  background-color: #181a20;
  padding:5px 11px;
  margin-right: 9px;
  margin-top: 14px;
  border-radius: 8px;
`
const Payment = styled.div`
  font-size: 17px;
  margin-left: 5px;
`
const PlayBtn = styled.a`
  display:flex;
  align-items: center;
  border-radius: 8px;
  background-color: #DDE5F1;
  padding: 6px 8px;
  margin: 1px;
  h2{
    font-size: 14px;
    margin-left: 6px;
    color:#121212;
  }
`

export default Request
