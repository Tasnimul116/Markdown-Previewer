const defaultMarkdown = "";

// Line breaks allowed 
marked.setOptions({
  breaks: true,
});

// Line breaks allowed 
marked.setOptions({
  breaks: true,
});


class App extends React.Component {
  state = {
    text: defaultMarkdown
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  
  render() {
    return (
      <div className="App">
        <h1 id="title">Markdown Previewer</h1>
        <textarea 
          id="editor" 
          value={ this.state.text } 
          onChange={ this.onChange } 
          placeholder="Enter Markdown..." />
        <div 
          id="preview"
          dangerouslySetInnerHTML = {{ __html: marked(this.state.text) }}>
        </div> 
      </div>
    );
  };
};


ReactDOM.render(<App />, document.getElementById('root'));
