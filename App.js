import React from "react";
 
function Toolbar() {
 return (<div>Toolbar component placeholder</div>);
}
 
class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {editMode: false}
 }
 toggle = () => {
   this.setState({editMode: !this.state.editMode});
 }
 render() {
   return (
     <>
       <button onClick={this.toggle}>{this.state.editMode ? 'To View' : 'To Edit'}</button>
       {this.state.editMode && <Toolbar/>}
     </>
   );
 }
}
 
export default App;