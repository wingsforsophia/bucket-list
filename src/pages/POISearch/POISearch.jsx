import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'
import { getPOIfromBackend } from "../../services/api-calls";
import POICard from '../../components/POICard/POICard'



class POISearch extends Component {
    state = { 
        POI: []
    }

     handlePOISearch = async (formData) => {
         const POI = await getPOIfromBackend(formData)
         console.log('right here')
        //  console.log(POI)
         this.setState({POI: POI.results})
    }

    render() { 
        return (
          <>
            <h3>Points of Interest Search</h3>
            <SearchForm handlePOISearch={this.handlePOISearch} />
            {this.state.POI.length ? 
              <>
                {this.state.POI.map((POI) => (
                  <POICard key={POI.id} POI={POI.poi.name} />
                ))}
              </>
             : (
              <h3>Add a city to search for Points of Interest</h3>
            )}
          </>
        );
    }
}
 
export default POISearch;