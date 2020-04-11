/**
 * Component to render top bar of app
 */
import React from 'react';

// @ts-ignore
const TopBar = props => {

  const { title } = props;
  // const title = props.title ? props.title : props.hedgeId ? props.hedgeId : '';

  /* we don't currently have a reliable way to get the market based on the data we have, we can only surmise
   that it is BHF_EOD with a date as we see in our data set. This will be correct when we have a proper api and
   can make service calls that will identify market for groups of positions */
  const displayTitle = () => (
    <span>
      <strong>{title}</strong>
    </span>
  );

  return (
    <section>
      <div className="title">
        {
          displayTitle()
        }
      </div>

      <div className="vader-window-icon-group d-flex flex-row">

      </div>
    </section>
  );
};

export default TopBar;
