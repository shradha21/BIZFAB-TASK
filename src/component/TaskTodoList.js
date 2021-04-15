import React from 'react'
import TableList from '../component/TableList.json'
 
class TaskTodoList extends React.Component {
    constructor() {
        super()
        this.state= {
            date: '',
            description: '',
            status: '',
            lists: TableList.tasks
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
            date: this.state.date,
            description: this.state.description,
            status: this.state.status
        }
        // console.log(formData)
        this.setState(prevState => {
            return {
                lists: prevState.lists.concat(formData)
            }
        })
        this.setState({
            date: '',
            description: '',
            status: ''
        })
    }

    render() {
        console.log(this.state.lists)
        
        return(
            <div> <br />< br />
                <table border= "1">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.lists.map(list => {
                                return (
                                    <tr>
                                        <td>{list.date}</td>
                                        <td>{list.description}</td>
                                        <td>{list.status}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </table> <br /> <br />

                <form onSubmit= {this.handleSubmit}>
                    <label htmlFor= "date">Date</label>
                        <input 
                            type= "date" 
                            id= "date"
                            name= "date"
                            value= {this.state.date}
                            onChange= {this.handleChange}
                        
                        /> { " " } 

                        <label htmlFor= "description">Description</label>
                        <input 
                            type= "text" 
                            id= "desc"
                            name= "description"
                            value= {this.state.description}
                            onChange= {this.handleChange}
                        
                        /> { " " }

                        <label htmlFor= "desc">Status</label>
                        <select value= {this.state.status} name= "status" onChange= {this.handleChange}>
                            <option>--choose--</option>
                            <option value= "created">created</option>
                            <option value= "inprogress">inprogress</option>
                            <option value= "closed">closed</option>
                        </select>

                        <br />
                        <input type= "Submit" value= "Add" />

                </form>
            </div>
        )
    }
}

export default TaskTodoList