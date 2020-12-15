import React from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../api/crudActions';
import Spinner from '../Spinner';

class PostShow extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         post: [], tags: [],
         loading: true
      };
   }

   async componentDidMount() {
      const response = await fetchData('post', this.props.match.params.id);
      this.setState({ 
         post: response, 
         tags:response.tags,
         loading: false,
      });
   }

   renderList() {
      const rowLen = this.state.tags.length;
      return this.state.tags.map((tag, i) => {
         return(
            <li key={tag.id}>
               
                  {tag.name}{rowLen === i + 1 ? '' : '\u00A0 | \u00A0' }
               
            </li>
         );
      })
   }

   render() {
      const { post, loading } = this.state;
      return (
         <React.Fragment>
         {
            loading ? <Spinner /> : 
            <div className="ui card" style={{ width: '100%' }}>
               <div className="content">
                  <div className="header">{post.title}</div>
               </div>
               <div className="content"> 
                  <div className="my-list-divided ui list divided segment" style={{ padding: '10px'}} >
                     <strong>Etiquetas:</strong>
                     <ul style={listStyle}>{this.renderList()}</ul>
                     <div className="item">
                        <div className="content" style={{ paddingTop: '10px' }}>
                           <strong>Subtítulo:</strong> {post.sub_title}
                           <p><strong>Contenido:</strong> {post.body}</p> 
                           
                        </div>
                     </div>
                  </div>
               </div>
               <div className="extra content">
                  <Link to={'/post'} className="ui labeled icon button primary">
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

const listStyle = {
   display: 'inline-flex',
   listStyle: 'none',
   paddingLeft: '8px'
}

export default PostShow;
