import React, { Component } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import CodeIcon from '@material-ui/icons/Code';
import Textlink from '@material-ui/core/Link';
import GetResume from '@material-ui/icons/GetApp';

  class Contact extends Component {
    render () {
      return (
        <div>
          <br /><br />
          <br /><br />
          <br /><br />
          <center>
          <table>
            <tbody>
            <tr>
              <td style={{paddingRight: "30px" }}> <GetResume style = {{ width: 50, height: 50 }}/></td>
              <td><Textlink href={"https://drive.google.com/uc?export=download&id=1ZwIDmLNkNWzzU1KEfYCJEzu1dWXQLoea"} target="_blank" variant="h3">download my resume</Textlink></td>
            </tr>
            <br />
            <tr>
              <td style={{paddingRight: "30px" }}> <EmailIcon style = {{ width: 50, height: 50 }}/></td>
              <td><Textlink href={"mailto:aaron.y.chan64@gmail.com"} variant="h3">hire@aaronchan.dev</Textlink></td>
            </tr>
            <br />
            <tr>
              <td style={{paddingRight: "30px" }}> <CodeIcon style = {{ width: 50, height: 50 }}/></td>
              <td><Textlink href={"https://github.com/aayc/"} target="_blank" variant="h3">aayc@github.com</Textlink></td>
            </tr> 
            <br />
            <tr>
              <td style={{paddingRight: "30px" }}> <img src="fb-icon-small.png" alt="facebook icon" style = {{ width: 40, height: 40, marginTop: "5px" }}/></td>
              <td><Textlink href={"https://www.facebook.com/aaron.chan.92505"} target="_blank" variant="h3">aaron@facebook</Textlink></td>
            </tr> 
            <br />
            <tr>
              <td style={{paddingRight: "30px" }}> <img src="linkedin-icon.png" alt="linkedin icon" style = {{ width: 50, height: 50 }}/></td>
              <td><Textlink href={"https://www.linkedin.com/in/aaron-chan-09366a6a"} target="_blank" variant="h3">aaron@linkedin</Textlink></td>
            </tr> 
            </tbody>
          </table>
          </center>
        </div>
      )
  }
}

export default Contact;
