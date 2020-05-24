import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		// This '[]' is to dynamically update object property (when the name of the property is unknown upfront but runtime). This way you could have multiple React inputs having a different name property and using the same onChange handler to update part of the state.
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body,
		};
		
		// Call action
		this.props.createPost(post);
	}

	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title:</label>
						<br />
						<input
							name="title"
							type="text"
							onChange={this.onChange}
							value={this.state.title}
						/>
						<br />
					</div>
					<div>
						<label>Body:</label>
						<br />
						<textarea
							name="body"
							onChange={this.onChange}
							value={this.state.body}
						/>
						<br />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

PostForm.propTypes = {
	createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
