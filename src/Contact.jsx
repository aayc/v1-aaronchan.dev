import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const contact_info = [{
  img: "logos/github-icon.svg",
  title: "aayc@github.com",
  link: "https://github.com/aayc"
}, {
  img: "logos/linkedin-icon.svg",
  title: "aaron-y-chan@linkedin",
  link: "https://www.linkedin.com/in/aaron-y-chan"
}, {
  img: "logos/fb-icon.svg",
  title: "aaronchan@fb",
  link: "https://www.facebook.com/aaron.chan.92505"
}]

class ContactDialogBox extends Component {

  handleClose = () => {
    const { onClose } = this.props;
    onClose();
  }

  handleListItemClick = (link) => {
    const { onClose } = this.props;
    window.open(link, "_blank");
    onClose();
  }

  render() {
    const { onClose, ...other } = this.props;
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <List>
          {contact_info.map(info => (
            <ListItem button onClick={() => this.handleListItemClick(info.link)} key={info.link}>
              <ListItemAvatar>
                <Avatar src={info.img} />
              </ListItemAvatar>
              <ListItemText primary={info.title} />
            </ListItem>
          ))}

        </List>
      </Dialog>
    );
  }
}

ContactDialogBox.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    const { selectedValue, open } = this.state;
    return (
      <span>
        <Button variant="outlined" style={{ margin: 10, fontWeight: "bold"}} onClick={this.handleClickOpen}>
          Contact
        </Button>
        <ContactDialogBox open={open} onClose={this.handleClose} />
      </span>
    );
  }
}

export default Contact;
