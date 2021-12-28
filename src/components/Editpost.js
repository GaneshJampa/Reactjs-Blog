import React from "react";
import './Postcreate.css';

class Editpost extends React.Component {
    constructor(props) {
        super(props)
        const { _id, title, author, content} = props.location.state.post;
        this.state = {
            _id,
            title,
            author,
            content
        };
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.title === "" || this.state.author === "" || this.state.content === "") {
            alert("All fields are mandatory!")
        }

        this.props.editpostHandler(this.state);
        this.setState({title: "", author: "", content: ""})
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="create-post">
                <form onSubmit={this.update}>
                    <input className="create-title" 
                    placeholder="Title" 
                    value={this.state.title} 
                    onChange={(e) => this.setState({ title: e.target.value })}></input>


                    <input className="create-author" 
                    placeholder="Author" 
                    value={this.state.author} 
                    onChange={(e) => this.setState({ author: e.target.value })}></input>


                    <textarea className="create-content" 
                    placeholder="Content.." 
                    value={this.state.content} 
                    onChange={(e) => this.setState({ content: e.target.value })}></textarea>
                    
                    <button className="create-button">Update</button>
                </form>

            </div>
        )
    }
}


export default Editpost;