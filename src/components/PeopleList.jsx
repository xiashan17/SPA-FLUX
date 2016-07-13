var React = require('react'),
	ReactDOM = require('react-dom'),
    Actions = require('../actions/Actions'),
    Store = require('../stores/Store');

var People = React.createClass({
  render: function() {
    return (
        <li>
          <img src={this.props.headPortrait} alt=""/>
                    <span>{this.props.nickname}</span>
        </li>
    );
  }
});

var PeopleList = React.createClass({
  getInitialState: function() {
  	 return {data: []};
  },
componentDidMount: function() {
    this.loadCommentsFromServer();
    setTimeout(this.loadCommentsFromServer, 1000);
},
 loadCommentsFromServer: function() {
    $.ajax({
      url: "/PeopleList",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("/PeopleList", status, err.toString());
      }.bind(this)
    });
  },
  changeEventHandler: function() {
    this.setState(Store.get());
  },
  handleChange: function(event) {
    Actions.set(event.target.value);
  },
  handleButtonClick: function(event) {
    Actions.add(1);
  },
	render: function() {
    if(this.state.data.PeopleList){
    var commentNodes = this.state.data.PeopleList.map(function(comment) {
      return (
        <People headPortrait={comment.headPortrait} nickname={comment.nickname} key={comment.id}>
        </People>
      );
    });
   }
    return (
      <div className="commentList">
      <ul className = "family-list pad-left-15">
        {commentNodes}
        </ul>
      </div>
    );
  }
});

module.exports = PeopleList;