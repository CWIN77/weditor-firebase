import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { ReactComponent as Svg_arrow } from '../svgs/arrow.svg';
import { ReactComponent as Svg_menu } from '../svgs/menu.svg';
import { ReactComponent as Svg_money } from '../svgs/money.svg';
import { ReactComponent as Svg_tag } from '../svgs/tag.svg';
import { ReactComponent as Svg_ratio } from '../svgs/ratio.svg';
import { ReactComponent as Svg_subtitle } from '../svgs/subtitle.svg';
import { ReactComponent as Svg_clock } from '../svgs/clock.svg';
import { ReactComponent as Svg_play } from '../svgs/play.svg';
import { ReactComponent as Svg_download } from '../svgs/download.svg';
import { ReactComponent as Svg_upload } from '../svgs/upload.svg';
import { ReactComponent as Svg_box } from '../svgs/box.svg';

function Detail() {
  const topIconStyle = {fill:"#C8D4E6",width:20,height:20,style:{padding:"0.5rem",cursor:'pointer'}}
  const mainIconStyle = {fill:"#C8D4E6",width:17,height:17}
  const navIconStyle = {fill:"#C8D4E6",width:20,height:20,stroke:"#C8D4E6"}
  const {id} = useParams();
  useEffect(()=>{
    console.log(id)
  },[])
  return (
    <Container>
      <TopBar>
        <Svg_arrow onClick={()=>{window.history.back()}} {...topIconStyle} />
        <div style={{display:'flex',alignItems:'center'}}>
          <Svg_money width={20} height={20} />
          <h1 style={{fontSize:17,marginLeft:6}}>최소 60,000원 지급</h1>
        </div>
        <Svg_menu {...topIconStyle} />
      </TopBar>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Main>
          <Guide>
            <div>
              <Svg_tag {...mainIconStyle} />
              <h2>게임 / 자막</h2>
            </div>
            <div style={{justifyContent:'center'}}>
              <Svg_ratio {...mainIconStyle} />
              <h2>16 : 9 비율</h2>
            </div>
            <div style={{justifyContent: "space-between"}}>
              <div>
                <Svg_clock {...mainIconStyle} />
                <h2>8분 이내</h2>
              </div>
              <div>
                <Svg_subtitle {...mainIconStyle} />
                <h2>자막 필수</h2> {/* 자막 불필요 */}
              </div>
            </div>
          </Guide>
          <MainText>
            <Title>간단한 컷편집 해주세요 간단한 컷 편집을 부탁드립니다해주세요!</Title>
            <Information>
              <img src='https://static-cdn.jtvnw.net/jtv_user_pictures/f37d5675-c11a-4564-9d8a-c8b2fca47f2d-profile_image-70x70.png'></img>
              <h2>CWIN77</h2>
              <span/>
              <h2>2022년 6월 2일</h2>
            </Information>
            <Explane>
              <h2>영상에 맞게 재미있는 자막과 컷편집을 해주세요</h2>
              <h2>그리고밑에 적는 하이라이트 부분은</h2>
              <h2>꼭 넣어주세요 2:35 하이라이트영상에 맞게 재미있는 자막과 컷편집을 해주세요</h2>
              <h2>그리고 밑에 적는 하이라이트 부분은</h2>
              <h2>영상에 맞게 재미있는 자막과 컷편집을 해주세요</h2>
              <h2>그리고밑에 적는 하이라이트 부분은</h2>
              <h2>꼭 넣어주세요 2:35 하이라이트영상에 맞게 재미있는 자막과 컷편집을 해주세요</h2>
              <h2>그리고 밑에 적는 하이라이트 부분은</h2>
              <h2>영상에 맞게 재미있는 자막과 컷편집을 해주세요</h2>
              <h2>그리고밑에 적는 하이라이트 부분은</h2>
              {/* 작성시 엔터마다 ^를 넣고 후에 폰트를 ^에 따라 배열로 변환하여 */}
            </Explane>
          </MainText>
        </Main>
      </div>
      <Nav>
        <NavIconWrapper>
          <NavIcon>
            <Svg_play {...navIconStyle} />
            <h2>플레이</h2>
          </NavIcon>
          <NavIcon>
            <Svg_download {...navIconStyle} />
            <h2>다운받기</h2>
          </NavIcon>
          <NavIcon>
            <Svg_box {...navIconStyle} />
            <h2>찜하기</h2>
          </NavIcon>
          <NavIcon>
            <Svg_upload {...navIconStyle} />
            <h2>제작완료</h2>
          </NavIcon>
        </NavIconWrapper>
      </Nav>
    </Container>
  )
}

const Nav = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:calc(100% - 5rem);
  margin: 2.5rem;
  margin-top: 1.5rem;
`
const NavIconWrapper = styled.div`
  display:flex;
  background-color:#272b35;
  border-radius:8px;
  padding:6px;
`
const NavIcon = styled.span`
  display:flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:10px;
  margin: 0px 2px;
  width:50px;
  h2{
    user-select: none;
    font-size: 11px;
    margin-top: 4px;
  }
`
const Explane = styled.div`
  h2{
    font-size: 16px;
    margin-top: 1.5px;
    letter-spacing: 0.75px;
  }
  width:95%;
`
const MainText = styled.div`
  margin: 8px;
`
const Title = styled.h1`
  font-size: 21px;
  word-wrap: break-word;
`
const Information = styled.div`
  display:flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 12px;
  h2{
    font-size: 14px;
  }
  span{
    width:3px;
    height:3px;
    background-color: #C8D4E6;
    margin: 8px;
  }
  img{
    width:18px;
    height:18px;
    border-radius: 100px;
    padding:2px;
    margin-right: 4px;
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
const Main = styled.div`
  margin:1rem;
  display:flex;
  flex-direction: column; 
`
const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
`
const TopBar = styled.div`
  display:flex;
  align-items: center;
  justify-content:space-between;
  margin: 1rem;
`

export default Detail
