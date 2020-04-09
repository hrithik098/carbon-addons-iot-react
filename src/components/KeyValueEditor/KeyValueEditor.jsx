import React, { useState } from 'react';

import { settings } from '../../constants/Settings';
import { TextInput, Button } from 'carbon-components-react';
import { Subtract16 } from '@carbon/icons-react';
import KeyValueRow from './KeyValueRow';

const propTypes = {};
const defaultProps = {};

const KeyValueEditor = ({ page, numPages, onChange, i18n }) => {
  const defaultEmptyRow = <KeyValueRow buttons={buttons} setSelectedKey={setSelectedKey} />;
  const [rows, setRows] = useState([defaultEmptyRow]);
  const addRows = () => {
    const newRows = [...rows, defaultEmptyRow];
    setRows(newRows);
  };
  const setSelectedKey = key => {
    console.log(rows);
    const newArray = rows.filter(row => row.props.key != key);
    setRows(newArray);
  };

  const deleteButton = (
    <Button
      className="delete-button"
      kind="tertiary"
      renderIcon={Subtract16}
      hasIconOnly
      tooltipPosition="bottom"
      iconDescription="Remove"
      onClick={key => {
        console.log(key.target + 'key');
        setKey(key);
      }}
    />
  );

  const buttons = [deleteButton];

  console.log(rows);

  return (
    <div>
      <div className="top">
        <Button kind="secondary" onClick={addRows}>
          Add
        </Button>
      </div>
      <div className="bx--grid editor">
        <div className="bx--row editor-header">
          <div className="bx--col">KeyHeader</div>
          <div className="bx--col">ValueHeader</div>
          <div className="bx--col">EmptyHeader</div>
        </div>
        {rows}
      </div>
    </div>
  );
};

KeyValueEditor.propTypes = propTypes;
KeyValueEditor.defaultProps = defaultProps;

export default KeyValueEditor;
