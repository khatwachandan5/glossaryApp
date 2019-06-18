import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Glossary as GlossaryLayout } from 'layouts';

// Component styles
import styles from './styles';

class SearchGlossary extends Component {

  render() {
    const { classes } = this.props;

    return (
      <GlossaryLayout title="Search Glossary">
        <div className={classes.root}>
         <h5>We we still build the feature...!</h5>
        </div>
      </GlossaryLayout>
    );
  }
}

SearchGlossary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchGlossary);
