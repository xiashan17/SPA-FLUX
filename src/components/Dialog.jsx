var React = require('react'),
    Actions = require('../actions/Actions'),
    Store = require('../stores/Store'),
    DialogSend = require('./DialogSend.jsx');

var Dialog = React.createClass({
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
	render: function() {
    return (
    	<section className="pull-right col-md-9 big-right">
			<h4 className = "col-md-11 dialog-name">
				文件传输助手
				<span>(97)</span>
				<i className="glyphicon glyphicon-chevron-down"></i>
			</h4>
			<i className="glyphicon glyphicon-remove-sign no-dialog"></i>
			<div className="dialog">
				<article className="dialog-record"></article>
				<p className="dialog-tool">
					<i className="tool-smile"></i>
					<i className="tool-knife"></i>
					<i className="tool-ile"></i>
				</p>
				<DialogSend/>
			</div>
		</section>
  )}
});

module.exports = Dialog;