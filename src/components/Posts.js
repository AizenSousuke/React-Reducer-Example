import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
	componentWillMount() {
		this.props.fetchPosts();
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            // Add new post to the beginning
            this.props.posts.unshift(nextProps.newPost);
        }
    }

	render() {
		const postItems = this.props.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object,
};

// called every time the store state changes. It receives the entire store state, and should return an object of data this component needs.
const mapStateToProps = (state) => ({
	posts: state.posts.items,
	newPost: state.posts.item,
});

// React Redux provides a connect function for you to connect your component to the store.
export default connect(mapStateToProps, { fetchPosts })(Posts);
