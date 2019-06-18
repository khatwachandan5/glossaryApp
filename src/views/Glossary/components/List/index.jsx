import React from 'react';

// Externals
import { getGlossary } from '../../../../repository';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    padding: theme.spacing(2),
    display: 'inline',
  }
});

class GlossaryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: ''
    }

  }

  componentWillMount() {
    getGlossary().then((glossary) => {
      this.setState({ glossary });
    });
  }

  render() {
    const { glossary } = this.state;
    const { classes } = this.props;
    
    return (
        Object.entries(glossary).map(([key, value]) =>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={key}
                secondary={
                  <React.Fragment>
                    {value.toString()}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
          </List>
        )
    )
  }
}

GlossaryList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GlossaryList);