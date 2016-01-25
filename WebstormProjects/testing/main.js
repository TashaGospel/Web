var MainBox = React.createClass({
    getInitialState: function() {
        return {name: ''};
    },

    changeName: function(s) {
        this.setState({name: s});
    },


    render: function() {
        return(
            <div>
                Enter your name: <NameText handler={this.changeName} />
                <h1>Hello there {this.state.name}</h1>
            </div>
        );
    }
});

var NameText = React.createClass({
    handleNameChange: function(e) {
        this.props.handler(e.target.value);
    },

    render: function() {
        return (
            <input type="text" onChange={this.handleNameChange} />
        );
    }
});

ReactDOM.render(
    <MainBox />,
    document.getElementById("content")
);