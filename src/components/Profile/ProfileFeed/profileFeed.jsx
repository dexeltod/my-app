import React from 'react'
import Banner from './Banner/banner'
import ContentBar from './ContentBar/contentBar'
import Posting from './Posting/posting'
import style from './profileFeed.css'

const profileFeed = (props) => {
  let postsElements = props.profileState.getPosts().map(elem => <ContentBar
    name={elem.name}
    message={elem.post}
    likesCount={elem.likesCount} />);


  return (
    <div className="profileFeed">
      <div className="profileFeed__Banner">
        <Banner />
      </div>
      <div className="profileFeed__Posting">
        <Posting defaultValue={props.profileState._newPostText} updateNewPost={props.updateNewPost}  addPost={props.addPost} />
      </div>
      <div className="profileFeed__ContentBar">
        {postsElements}
      </div>
    </div>
  )
}
export default profileFeed
