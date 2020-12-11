import React from 'react';
import { Link } from 'react-router-dom';
import LoadingData from './LoadingData';
import { sweetAlert } from '../sweetAlert';

class DataTable extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         data: [], loading: true, 
         deleted: false, result: ''
      };
   }

   getData = async () => {
      const data = await this.props.data();
      let result = data.length == 0 ? 'No hay resultados...': '';
      this.setState({data, loading: false, result, deleted: false})
   }

   async componentDidMount() {
      await this.getData();
   }

   async componentDidUpdate() {
      if (this.state.deleted) {
         await this.getData();
      }
   }

   async alert(id, name) {
      const data = {
         id, name,
         path: this.props.path,
         ...this.props.sweetAlert
      }
      const response = await sweetAlert(data);
      response && this.setState({deleted: true}); 
   }

   renderList() {
      const { path } = this.props; const { data } = this.state;
      return data.map(data => {
         return(
            <div className="item" key={data.id}>
               <div className="right floated content">
                  <Link to={`/${path}/${data.id}`} className="ui icon button teal">
                     <i className="info icon"></i>
                  </Link>
                  <Link to={`/${path}/edit/${data.id}`} className="ui icon button primary">
                     <i className="edit icon"></i>
                  </Link>
                  <button 
                     className="ui icon button negative"
                     onClick={() => this.alert(data.id, data.name)}
                  >
                     <i className="trash alternate icon"></i>
                  </button>
               </div>
               <div className="content" style={{ paddingTop: '10px' }}>{data.name}</div>
            </div>
         );
      })
   }

   render() {
      const { loading, result } = this.state;
      return (
         <div className="my-list-divided ui list divided segment" style={{ padding: '10px'}} >
            {loading ? <LoadingData /> : this.renderList()}
            {result}       
         </div>   
      );
   }
};

export default DataTable;