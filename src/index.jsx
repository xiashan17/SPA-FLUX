var React         = require('react'),
    ReactDOM      = require('react-dom'),
    Dialog = require('./components/Dialog.jsx'),
    PeopleList = require('./components/PeopleList.jsx');

ReactDOM.render(
	<div className = "container">
		<div className = "row">
			<section className="pull-left col-md-3 big-left">
				<div className = "row">
					<p className = "me pad-right-15 pad-left-15">
						<i>
							<img src="images/me.jpg" alt="头像"/>
						</i>
						<span className="col-md-9">昵称</span>
						<i className = "pull-right glyphicon glyphicon-align-justify"></i>
					</p>
				</div>
				<div className = "row search pad-right-15 pad-left-15">
					<i className = "glyphicon glyphicon-search"></i>
					<input className = "col-md-12" type="text" placeholder="搜索"/>
				</div>
				<div className = "row">
					<ul className = "catalog col-md-12">
						<li className = "col-md-4 clipline">
							<i className="icon-comment icon-green"></i>
						</li>
						<li className = "col-md-4 clipline">
							<i className="icon-file-alt"></i>
						</li>
						<li className = "col-md-4">
							<i className="icon-user"></i>
						</li>
					</ul>
				</div>
				<div className = "row">
					<PeopleList/>
				</div>
			</section>
			<Dialog/>
		</div>
	</div>,
  document.getElementById("main")
);