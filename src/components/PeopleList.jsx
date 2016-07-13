var React = require('react'),
	ReactDOM = require('react-dom'),
    Actions = require('../actions/Actions'),
    Store = require('../stores/Store');

var PeopleList = React.createClass({
  getInitialState: function() {
  	$.ajax({
    	type:"get",
    	url:"/PeopleList",
    	async:true,
    	success:function(a){
    		return {data:a};
    	}
    })
  },
//componentDidMount: function() {
//	var _this = this;
//	$.ajax({
//  	type:"get",
//  	url:"/PeopleList",
//  	async:true,
//  	success:function(a){
//  		_this.setState({
//				data:a
//  		});
//  	}
//  })
//},
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
//		PeopleList.getInitialState();
//		var itemsLi = this.state.PeopleList.map(function(item){
//			return(
//				<li>
//					<img src={item.headPortrait} alt=""/>
//                  <span>{person.nickname}</span>
//				</li>
//			)
//		});
		alert(JSON.stringify(this.state));
	    return (
	    	<ul className = "family-list pad-left-15">
				<li>
					<img src={this.state.data.PeopleList[0].headPortrait} alt=""/>
                    <span>{this.state.data.PeopleList[0].nickname}</span>
				</li>
			</ul>
	  )}
});

module.exports = PeopleList;