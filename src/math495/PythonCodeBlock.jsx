import React, { Component } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import "../css/prism.css";

class Code extends Component {

  componentDidMount () {
    Prism.highlightAll();
  }

  render () {
    return (
      <pre><code class="language-python">
      {this.props.children}
      </code></pre>
    )
  }
}

export default Code;
