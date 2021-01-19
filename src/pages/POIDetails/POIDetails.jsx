import { colors } from 'material-ui/styles';
import React, { Component } from 'react';
import {getDetailsFromBackend} from '../../services/api-calls'

class POIDetails extends Component {
  state = {
    poiDetails: {},
  };

  //   handleDetailsSearch = async (POIid) => {
  //     console.log(POIid)
  //     const poiDetails = await getDetailsFromBackend();
  //     this.setState({poiDetails});
  //   };
  async componentDidMount() {
    const poiDetails = await getDetailsFromBackend(this.props.match.params.id)
    console.log(poiDetails,'this is poi details')
    this.setState({ poiDetails: poiDetails.results });
  }

  render() {
    return ( 
    <>
        <h1>Details will render here</h1>
    </>
    );
  }
}
 
export default POIDetails;