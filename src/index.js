import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CimGrid from 'cimmyt-grid-lib/umd/cimmyt-grid-lib'
import 'cimmyt-grid-lib/umd/main.142afb96.css'
var _datafields = [
  { name: 'experiment_name', type: 'text', form: true, required: false},
  { name: 'comments', type: 'text', form: true, required: true},
  { name: 'user_id', type: 'number', form: true, required: true },
  { name: 'creation_timestamp', type: 'date', form: true, required: true },
  { name: 'service_id', type: 'number', form: true, required: true },
  { name: 'sample_batch_id', type: 'number', form: true, required: true },
  { name: 'id', type: 'number', form: false, required: true },
  { name: 'crop_id', type: 'number', form: true, required: true },
  { name: 'ticket_number', type: 'text', form: true, required: true },
  { name: 'request_status_id', type: 'number', form: true, required: true },
  { name: 'subservice_id', type: 'number', form: true, required: true }
]
var _columns = [
  { text: 'Experiment Name', datafield: 'experiment_name'},
  { text: 'Comments', datafield: 'comments'},
  { text: 'User Id', datafield: 'user_id'},
  { text: 'Creation Timestamp', datafield: 'creation_timestamp', cellsformat: 'yyyy-MM-dd'},
  { text: 'Service Id', datafield: 'service_id'},
  { text: 'Sample Batch Id', datafield: 'sample_batch_id'},
  { text: 'Id', datafield: 'id', hidden: true},
  { text: 'Crop Id', datafield: 'crop_id'},
  { text: 'Ticket Number', datafield: 'ticket_number'},
  { text: 'Request Status Id', datafield: 'request_status_id'},
  { text: 'Subservice Id', datafield: 'subservice_id'}
]
ReactDOM.render(<CimGrid 
  host = 'http://172.17.46.70:8080/'
  entity='SampleManagerDM/requests'
  datafields = {_datafields}
  columns = {_columns}
  root= 'request'
  id= 'id'
  theme='material-green'
/>, document.getElementById('grid'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
