import { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components' 
import { ReactComponent as Svg_video } from '../svgs/video.svg';
import { ReactComponent as Svg_box } from '../svgs/box.svg';
import { ReactComponent as Svg_medal } from '../svgs/medal.svg';
import { ReactComponent as Svg_video_bold } from '../svgs/video_bold.svg';
import { ReactComponent as Svg_box_bold } from '../svgs/box_bold.svg';
import { ReactComponent as Svg_medal_bold } from '../svgs/medal_bold.svg';
import { ReactComponent as Svg_profile } from '../svgs/profile.svg';
import { ReactComponent as Svg_more } from '../svgs/more.svg';
import { ReactComponent as Svg_thumbnail } from '../svgs/thumbnail.svg';
import { ReactComponent as Svg_thumbnail_bold } from '../svgs/thumbnail_bold.svg';

function Navbar() {
  const [page,setPage] = useState(window.location.pathname)
  const IconStyle = {width:16,height:16,fill:"#DDE5F1",style:{marginRight:6}}
  return (
    <Container>
      <Top>
        <Title>Weditor</Title>
        <div style={{display:'flex',alignItems:'center'}}>
          <Svg_profile width={28} height={28} style={{margin:4,padding:2}}/>
          <Svg_more width={20} height={20} fill="#DDE5F1" style={{padding:6,display:'flex'}} />
        </div>
      </Top>
      <Nav>
        <NavBtn onClick={()=>{setPage("/")}} to={"/"} page={`${page==="/"}`}>
          {
            page === '/'
            ? <Svg_video_bold {...IconStyle} />
            : <Svg_video {...IconStyle} />
          }
          <h2>편집각</h2>
        </NavBtn>
        <NavBtn onClick={()=>{setPage("/save")}} to={"/save"} page={`${page==="/save"}`}>
          {
            page === '/save'
            ? <Svg_box_bold {...IconStyle} />
            : <Svg_box {...IconStyle} />
          }
          <h2>찜목록</h2>
        </NavBtn>
        <NavBtn onClick={()=>{setPage("/result")}} to={"/result"} page={`${page==="/result"}`}>
          {
            page === '/result'
            ? <Svg_medal_bold {...IconStyle} />
            : <Svg_medal {...IconStyle} />
          }
          <h2>내성과</h2>
        </NavBtn>
        <NavBtn onClick={()=>{setPage("/thumbnail")}} to={"/thumbnail"} page={`${page==="/thumbnail"}`}>
          {
            page === '/thumbnail'
            ? <Svg_thumbnail_bold {...IconStyle} />
            : <Svg_thumbnail {...IconStyle} />
          }
          <h2>썸네일</h2>
        </NavBtn>
      </Nav>
    </Container>
  )
}

const Container = styled.div`
  background-color: #323741;
`
const Top = styled.div`
  width:calc(100% - 2rem);
  padding: 1rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h1`
  font-size: 20px;
  padding: 4px;
`
const Profile = styled.span`
  width:28px;
  height:28px;
  margin: 4px;
  border-radius: 100px;
  background-color:#DDE5F1;
`
const Nav = styled.div`
  padding: 1rem;
  display:flex;
  overflow-x: auto;
  width:calc(100vw - 2rem);
  align-items: center;
`
const NavBtn = styled(Link)<{page:string}>`
  padding: 6px;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 10px;
  margin-left: 2px;
  display:flex;
  align-items: center;
  box-shadow: ${(props)=>props.page === "true" ? "0px 3px" : "0px"};
  opacity:${(props)=>props.page === "true" ? "1" : "0.7"};
  h2{
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
  }
`

export default Navbar