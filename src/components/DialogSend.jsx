var React = require('react'),
	ReactDOM = require('react-dom'),
    Actions = require('../actions/Actions'),
    Store = require('../stores/Store');

var DialogSend = React.createClass({
  getInitialState: function() {
    return Store.get();
  },
  componentDidMount: function() {
    Store.addListener('change', this.changeEventHandler);
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
handleClick: function(){
	var tempText = {
		"text":this.refs.textbox.value
	};
	$.ajax({
		type: 'post',
		url: '/send',
		data: tempText,
		success: function(){
			document.getElementById("txt").value='';
			$(".dialog-record").append('<p class="p-record">'+tempText.text+'</p><p class="clear"></p>')
		}
	})
},
	render: function() {
    return (
    	<article className = "dialog-send">
			<textarea id="txt" ref = "textbox"></textarea>
			<button className="button-send" onClick={this.handleClick}>发送</button>
		</article>
  )}
});

module.exports = DialogSend;