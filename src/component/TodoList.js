import React from 'react'

class TodoList extends React.Component {
    constructor() {
        super()
        this.state= {
            name: '',
            lists: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData= {
            name: this.state.name
        }
        this.setState(prevState => {
            return {
                lists: prevState.lists.concat(formData)
            }
        })
        this.setState({
            name: ''
        })
    }


    render() {
        return(
            <div>
                <h1>TodoList</h1>
                <table border= "1">
                    <tbody>
                        {this.state.lists.map(list => {
                            return (
                                <tr>
                                    {list.name}
                                </tr>
                            )
                    } )}
                    </tbody>
                    
                </table>



                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        id="movieName" 
                        name= "name"
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    /> 

                    <input 
                        type="submit" 
                        value="Add" 
                    />
                </form>

            </div>
        )
    }
}

export default TodoList

