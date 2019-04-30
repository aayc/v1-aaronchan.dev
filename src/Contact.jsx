import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EmailIcon from '@material-ui/icons/Email';
import CodeIcon from '@material-ui/icons/Code';
import Textlink from '@material-ui/core/Link';

  class Contact extends Component {
    render () {
      return (
        <Grid item xs={12} sm={10} spacing={0} justify="center" align="center" style={{margin: 0, height: "100%"}}>
          <br /><br />
          <br /><br />
          <br /><br />
          <br /><br />
          <br /><br />
          <br /><br />
          <center>
          <table>
            <tr>
              <td style={{paddingRight: "30px" }}> <EmailIcon style = {{ width: 50, height: 50 }}/></td>
              <td><Textlink href={"mailto:aaron.y.chan64@gmail.com"} variant="h3">hire@aaronchan.dev</Textlink></td>
            </tr>
            <br />
            <tr>
              <td style={{paddingRight: "30px" }}> <CodeIcon style = {{ width: 50, height: 50 }}/></td>
              <td><Textlink href={"https://github.com/aayc/"} target="_blank" variant="h3">aayc@github.com</Textlink></td>
            </tr> 
          </table>
          </center>
        </Grid>
      )
  }
}

export default Contact;
