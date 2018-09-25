import { connect } from 'react-redux';
import React from 'react';
import * as postsActions from "../actions/PostActions";
import { bindActionCreators } from 'redux';

class PostsPage extends React.Component {
    componentWillMount() {
        this.props.actions.loadAllPosts();
    }

    render() {
        if (this.props.isLoading) {
            return (<h1>Loading...</h1>)
        } else {
            return (<React.Fragment>
                {this.props.posts.map(post => {
                    return <p>{post.body}</p>
                })}
            </React.Fragment>)
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.post,
        isLoading: state.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(postsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)