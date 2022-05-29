import styled from 'styled-components' 
import { ReactComponent as Svg_clock } from '../svgs/clock.svg';
import { ReactComponent as Svg_money } from '../svgs/money.svg';
import { ReactComponent as Svg_play } from '../svgs/play.svg';

const Container = styled.div`
  width:calc(100% - 2rem - 1.8rem);
  padding: 0.9rem;
  margin: 1rem;
  background-color: #262A31;
  border-radius: 4px;
`
const UserImg = styled.img`
  width:24px;
  height:24px;
  border-radius: 100px;
`
const Title = styled.h1`
  font-size: 18px;
  margin-left: 6px;
  font-weight: bold;
`
const Informate = styled.div`
  display:flex;
  align-items: center;
  margin:1rem 0px;
  opacity: 0.7;
  margin-right: 1rem;
`
const Tag = styled.div`
  padding:6px 12px;
  margin-right: 12px;
  background-color: #1B1E24;
  font-size: 12px;
  border-radius: 4px;
  color:#DAE4F2;
`
const PlayBtn = styled.a`
  display:flex;
  align-items: center;
  padding:6px 8px;
  border-radius: 4px;
  background-color: #DAE4F2;
  h2{
    color:#4D4D4D;
    font-weight: bold;
    margin-left: 6px;
  }
`

function Request() {
  const iconStyle = {width:20,height:20,style:{marginRight:6}}
  return (
    <Container>
      <div style={{display:'flex',alignItems:'center'}}>
        <UserImg src="https://lh3.googleusercontent.com/a-/AOh14GhBIpwktw4iDwX7_dafbrn64O2wNRJbx1hivycj5A=s96-c"></UserImg>
        <Title>간단하게 컷편집 해주세요!</Title>
      </div>
      <div style={{display:'flex',alignItems:'center',marginTop:2}}>
        <Informate>
          <Svg_clock {...iconStyle} />
          <h2>8분이내</h2>
        </Informate>
        <Informate>
          <Svg_money {...iconStyle} />
          <h2>50,000원</h2>
        </Informate>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:"space-between",marginTop:2}}>
        <div style={{display:'flex'}}>
          <Tag>자막</Tag>
          <Tag>게임</Tag>
        </div>
        <PlayBtn href="https://youtu.be/3Wex4qJJN-s">
          <Svg_play />
          <h2>영상보기</h2>
        </PlayBtn>
        
      </div>
    </Container>
  )
}

export default Request
