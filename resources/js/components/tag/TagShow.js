import React from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../api/crudActions';
import Spinner from '../Spinner';
import history from '../../history';

class TagShow extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         tag: [], posts: [],
         loading: true, result: ''
      };
   }

   async componentDidMount() {
      const response = await fetchData('tag', this.props.match.params.id);
      if (response.exception) history.push('/page-404');
      let result = response.posts.length == 0 ? 'no hay resultados...': '';
      this.setState({ 
         tag: response, 
         posts:response.posts,
         loading: false,
         result
      });
   }

   renderList() {
      return this.state.posts.map(post => {
         return(
            <div className="item" key={post.id}>
               <div className="content" style={{ paddingTop: '10px' }}>
                  <strong>Título:</strong> {post.title} &nbsp; | &nbsp; 
                  <strong>Subtítulo:</strong> {post.sub_title} &nbsp; | &nbsp; 
                  <p><strong>Contenido:</strong> {post.body}</p>
               </div>
            </div>
         );
      })
   }

   render() {
      const { tag, loading, result } = this.state;
      return (
         <React.Fragment>
            {
               loading ? <Spinner /> :
               <div className="ui card" style={{ width: '100%' }}>
                  <div className="content">
                     <div className="header">{tag.name}</div>
                  </div>
                  <div className="content"> 
                     <div className="my-list-divided ui list divided segment" style={{ padding: '10px'}} >
                        {this.renderList()}
                        {result}
                     </div>
                  </div>
                  <div className="extra content">
                     <Link to={'/tag'} className="ui labeled icon button primary">
                        <i className="left arrow icon"></i>
                        Volver
                     </Link>
                  </div>
               </div>
            }
         </React.Fragment>
      );
   }

   
};

export default TagShow;
