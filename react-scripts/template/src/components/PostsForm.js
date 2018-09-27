import React from 'react';
import { bindActionCreators } from 'redux';
import * as postsActions from "../actions/PostActions";
import { connect } from 'react-redux';

class PostsForm extends React.Component {

    componentDidMount() {
        if (this.props.idPostParaEdicao)
            this.props.actions.getPost(this.props.idPostParaEdicao);
    }


    render() {
        return (JSON.stringify(this.props.postParaEdicao));
    }

    componentWillUnmount() {
        this.props.actions.limparPostEdicao();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        idPostParaEdicao: ownProps.match.params.id,
        postParaEdicao: state.post.postParaEdicao,
        isLoading: state.ajaxStatusCounter > 0,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(postsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsForm)