import { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components' 
import { ReactComponent as Svg_video } from '../svgs/video.svg';
import { ReactComponent as Svg_box } from '../svgs/box.svg';
import { ReactComponent as Svg_medal } from '../svgs/medal.svg';
import { ReactComponent as Svg_video_fill } from '../svgs/video_fill.svg';
import { ReactComponent as Svg_box_fill } from '../svgs/box_fill.svg';
import { ReactComponent as Svg_medal_fill } from '../svgs/medal_fill.svg';
import { ReactComponent as Svg_profile } from '../svgs/profile.svg';
import { ReactComponent as Svg_menu } from '../svgs/menu.svg';

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
  background-color:#e7ebf1;
`
const Nav = styled.div`
  margin: 1rem;
  display:flex;
  align-items: center;
`
const NavBtn = styled(Link)<{page:boolean}>`
  padding: 6px;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 12px;
  display:flex;
  align-items: center;
  box-shadow: ${(props)=>props.page ? "0px 3px" : "0px"};
  opacity:${(props)=>props.page ? "1" : "0.7"};
  h2{
    font-size: 15px;
    font-weight:${(props)=>props.page ? "bold" : "400"};
  }
`

function Navbar() {
  const [page,setPage] = useState('/')
  const IconStyle = {width:16,height:16,fill:"#e7ebf1",style:{marginRight:6}}
  return (
    <Container>
      <Top>
        <Title>Weditor</Title>
        <div style={{display:'flex',alignItems:'center'}}>
          <Svg_profile width={28} height={28} style={{margin:4,padding:2}}/>
          <Svg_menu width={20} height={20} fill="#e7ebf1" style={{padding:6,display:'flex'}} />
        </div>
      </Top>
      <Nav>
        <NavBtn onClick={()=>{setPage("/")}} to={"/"} page={page==="/"}>
          {
            page === '/'
            ? <Svg_video_fill {...IconStyle} />
            : <Svg_video {...IconStyle} />
          }
          <h2>편집각</h2>
        </NavBtn>
        <NavBtn onClick={()=>{setPage("/save")}} to={"/save"} page={page==="/save"}>
          {
            page === '/save'
            ? <Svg_box_fill {...IconStyle} />
            : <Svg_box {...IconStyle} />
          }
          <h2>찜목록</h2>
        </NavBtn>
        <NavBtn onClick={()=>{setPage("/result")}} to={"/result"} page={page==="/result"}>
          {
            page === '/result'
            ? <Svg_medal_fill {...IconStyle} />
            : <Svg_medal {...IconStyle} />
          }
          <h2>내성과</h2>
        </NavBtn>
      </Nav>
    </Container>
  )
}

export default Navbar