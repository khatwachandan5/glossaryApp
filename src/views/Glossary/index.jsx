import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { Grid, withStyles } from '@material-ui/core';

// Shared layouts
import { Glossary as GlossaryLayout } from 'layouts';

import GlossaryList from './components/List';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: '100%'
  }
});

class Glossary extends Component {
  render() {
    const { classes } = this.props;

    return (
      <GlossaryLayout title="Glossary List">
        <div className={classes.root}>
          <Grid>
            <GlossaryList className={classes.item} />
          </Grid>
        </div>
      </GlossaryLayout>
    );
  }
}

Glossary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Glossary);
