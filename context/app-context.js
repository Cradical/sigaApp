import React from 'react'

const initialState = {
    productList: [{
        title: 'Coffee',
        icon: 'av-timer'
      }, {
        title: 'Talapia',
        icon: 'flight-takeoff'
      }]
}

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = initialState
    }

    render(){
        console.log('state in app-context', this.state)
        return(
            <AppContext.Provider value={{
                productList: this.state
            }}>
                {this.props.children}
            </AppContext.Provider>
        )

    }
}