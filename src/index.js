import React, {Component}from "react";
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from  './components/search_bar';
import VideoList from './components/video_list';


const apiKey = 'AIzaSyCHYfnEB0LID5tVo1FTHUC9up72nUrQ0jo';


// Create a new component. This component should produce some HTML
class App extends Component{
constructor(props){
  super(props);
  this.state ={ videos:[]};

YTSearch ({key : apiKey, term : 'surfboards'},(videos)=>{
  this.setState({videos});
  });

}

  render(){
    return(
      <div>
     <SearchBar/>
     <VideoList videos = {this.state.videos}/>
    </div>

);
}
}
// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDom.render(<App/> , document.querySelector (".container"));
