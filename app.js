const Tags = ReactTags.WithContext;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [{ id: 1, text: "javascript" }, { id: 2, text: "CSS" }],

     
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDelete(i) {
    this.setState({
      tags: this.state.tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    let { tags } = this.state;
    this.setState({ tags: [...tags, { id: tags.length + 1, text: tag }] });
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];

    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags });
  }

  render() {
    const { tags} = this.state;
    return (
      <div>

        <Tags

          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
            tags={tags}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
