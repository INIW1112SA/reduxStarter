import React, {Component}from "react";
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from  './components/search_bar';



const apiKey = 'AIzaSyCHYfnEB0LID5tVo1FTHUC9up72nUrQ0jo';

YTSearch ({key : apiKey, term : 'surfboards'}, function(data){
  console.log(data);
})
// Create a new component. This component should produce some HTML
class App extends Component{
  render(){  return(
      <div>
     <SearchBar/>
    </div>

);
}
}
// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDom.render(<App/> , document.querySelector (".container"));
