import { connect } from 'react-redux';
import React from 'react';
import * as postsActions from "../actions/PostActions";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import withLoading from 'daniel-common/components/loading/WithLoading';

const innerPostPage = (props) => {
    return (<React.Fragment>
        {props.posts.map(post => {
            return <p key={post.id}>{post.body}
                <Link to={"/gerenciar/" + post.id}>
                    Editar
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </Link>
            </p>
        })}
    </React.Fragment>)
}

class PostsPage extends React.Component {
    componentDidMount() {
        this.props.actions.loadAllPosts();
    }

    render() {
        return withLoading(innerPostPage)(this.props);
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.ajaxStatusCounter);
    return {
        posts: state.post.posts,
        isLoading: state.ajaxStatusCounter > 0
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(postsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)