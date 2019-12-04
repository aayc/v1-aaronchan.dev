import React, { Component } from 'react';

const wm_styles = {
  input: {
    border: "none",
    background: "transparent",
    fontSize: "100px",
    textAlign: "center",
    fontFamily: "Times New Roman",
    outlineWidth: 0,
    color: "#fcfcfc",
  },
  table: {
    width: "600px",
    marginTop: "100px",
    tableLayout: "fixed",
  },
  th: {
    fontFamily: "Times New Roman",
    fontSize: "35px",
    fontWeight: "400",
  },
  td: {
    fontFamily: "Times New Roman",
    fontSize: "20px",
  }
}

class Wordmath extends Component {
  constructor(props) {
    super(props)
    
    this.WORD_LIMIT = 7

    this.state = {
      equation: "",
      wikipedia: [],
      twitter: [],
      google_news: [],
    }
  }

  compute = (eq_string) => {
    if (eq_string === "") return;

    fetch("/compute?eq=" + encodeURIComponent(eq_string))
      .then(res => res.json())
      .then(results => {
        if ("error" in results) {
          alert(results.error)
        } else {
          this.setState({ 
            wikipedia: results["wikipedia"],
            google_news: results["google_news"],
            twitter: results["twitter"]
          })
        }
      })
  }

  handleEquationChange = (e) => {

    this.setState({ equation: e.target.value.toLowerCase().replace(/\d/g, "") });
  }

  range = (a, b) => {
    let v = []
    for (let i = a; i < b; i++) {
      v.push(i)
    }
    return v;
  }

  render() {
    const { equation, google_news, twitter, wikipedia } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <div style={{ marginTop: "50px" }}>
            <form onSubmit={(e) => { e.preventDefault(); this.compute(equation); }}>
            <input type="text"
              style={wm_styles.input}
              id="input-equation"
              onChange={this.handleEquationChange}
              value={equation}
              placeholder="love + hate" />
            </form>
          </div>
          <div>
          <center>
          <table style={ wm_styles.table } id="results">
            <tbody>
            <tr>
            <th style={Object.assign({textAlign: "left"}, wm_styles.th)}>google news</th>
            <th style={Object.assign({textAlign: "center"}, wm_styles.th)}>twitter</th>
            <th style={Object.assign({textAlign: "right"}, wm_styles.th)}>wikipedia</th>
            </tr>
            { this.range(0, this.WORD_LIMIT).map(i => {
                return (
                  <tr key={i}>
                    <td style={Object.assign({textAlign: "left"}, wm_styles.td)}>{i < google_news.length ? google_news[i] : ""}</td>
                    <td style={Object.assign({textAlign: "center"}, wm_styles.td)}>{i < twitter.length ? twitter[i] : ""}</td>
                    <td style={Object.assign({textAlign: "right"}, wm_styles.td)}>{i < wikipedia.length ? wikipedia[i] : ""}</td>
                  </tr>
                )
            })
            }
            </tbody>
          </table>
          </center>
          </div>
        </header>
      </div>
    );
  }
}

export default Wordmath;
