import React from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';


const SideNavs = (props) => {
  const { auth, profile } = props;

  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <SideNav trigger={<Button className='purple accent-4'><i className='material-icons'>cloud</i></Button>} options={{closeOnClick: true}}>
      <SideNavItem userView user={{
          background: 'http://placeimg.com/640/480/any',
          image: 'https://previews.123rf.com/images/topvectors/topvectors1812/topvectors181200882/126852388-man-wearing-cat-animal-costume-person-in-jumpsuit-or-kigurumi-having-fun-vector-illustration-isolate.jpg',
        
        }} />
      <SideNavItem href='/'>
        Kigurumi
      </SideNavItem>
      <SideNavItem divider />
      <SideNavItem subheader>
      Subheader
      </SideNavItem>
      {links}
</SideNav>
  )
}
const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(SideNavs)