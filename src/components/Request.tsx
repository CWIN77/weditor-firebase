import { Link } from 'react-router-dom';
import styled from 'styled-components' 
import { ReactComponent as Svg_money } from '../svgs/money.svg';
import { ReactComponent as Svg_play } from '../svgs/play.svg';

function Request() {
  return (
    <Container>
      <div>
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
      </div>
      <div>
        <div style={{display:'flex',alignItems:'center',flexWrap:'wrap'}}>
          <Tag>게임</Tag>
          <Tag>무자막</Tag>
          <Tag>무자막</Tag>
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:18,marginBottom:2,justifyContent:"space-between"}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <Svg_money width={22} height={22} fill="#C8D4E6" />
            <Payment>60,000원~</Payment>
          </div>
          <PlayBtn href='https://youtu.be/3Wex4qJJN-s' target='_blank'>
            <Svg_play width={13} height={13} stroke="#121212" />
            <h2>영상보기</h2>
          </PlayBtn>
        </div>
      </div>
    </Container>
  )
}


const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:calc(100vw - 2rem - 2rem);
  height:calc((100vw - 2rem - 2rem) / 16*9);
  padding: 1rem;
  margin: 1rem;
  background-color: #272b35;
  border-radius: 8px;
  @media only screen and (min-width:780px) {
    margin-right:0px;
    margin-bottom: 0px;
    width: calc(50vw - 3.8rem);
    height:calc((50vw - 3.8rem) / 16 * 9);
  }
  @media only screen and (min-width:1200px) {
    margin-right:0px;
    margin-bottom: 0px;
    width: calc((100vw / 3) - 3.7rem);
    height:calc(((100vw / 3) - 3.7rem) / 16 * 9);
  }
  @media only screen and (min-width:1650px) {
    margin-right:0px;
    margin-bottom: 0px;
    width: calc((100vw / 4) - 3.6rem);
    height:calc(((100vw / 4) - 3.6rem) / 16 * 9);
  }
`
const Guide = styled.div<{ratio1?:string, ratio2?:string}>`
  width:calc(100vw - 2rem - 2.4rem);
  height:calc((100vw - 2rem - 2.4rem) / ${ (props)=>props.ratio1 ? props.ratio1 : 16} * ${(props)=>props.ratio2 ? props.ratio2 : 9} );
  background-color: #272b35;
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding:1.2rem;
  margin-bottom: 8px;
  max-width: calc(42.5vh / ${(props)=>props.ratio2 ? props.ratio2 : 9} * ${ (props)=>props.ratio1 ? props.ratio1 : 16});
  max-height: 42.5vh;
  div{
    display:flex;
    align-items: center;
    h2{
        font-size: 14px;
        margin-left: 6px;
      }
  }
`
const UserImg = styled.img`
  width:14px;
  height:14px;
  border-radius: 100px;
  margin-right: 6px;
`
const Title = styled.h1`
  font-size: 18px;
  width:92%;
  margin-top:6px;
  margin-bottom: 2px;
`
const StatusText = styled.h4`
  font-size: 12px;
  color: rgba(218, 228, 242, 0.7);
`
const ExplaneText = styled.h2`
  font-size: 14px;
  width:92%;
  color: rgba(218, 228, 242, 0.7);
`
const Tag = styled.div`
  font-size: 12px;
  background-color: #181a20;
  padding:6px 12px;
  margin-right: 10px;
  margin-top: 14px;
  border-radius: 8px;
`
const Payment = styled.div`
  font-size: 18px;
  margin-left: 5px;
`
const PlayBtn = styled.a`
  display:flex;
  align-items: center;
  border-radius: 8px;
  background-color: #C8D4E6;
  padding: 6px 8px;
  margin: 2px;
  h2{
    font-size: 15px;
    margin-left: 6px;
    color:#121212;
  }
`

export default Request
