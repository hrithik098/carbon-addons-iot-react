import React, { useState } from 'react';
import { TextInput, Button } from 'carbon-components-react';
import { Subtract16 } from '@carbon/icons-react';

const KeyValueRow = ({ initialKey, initialValue, buttons, setSelectedKey }) => {
  const [key, setKey] = useState(initialKey);
  const [value, setValue] = useState(initialValue);
  return (
    <div className="bx--row">
      <div className="bx--col">
        <TextInput onChange={evt => setKey(evt.target.value)} value={key} />
      </div>
      <div className="bx--col">
        <TextInput onChange={evt => setValue(evt.target.value)} value={value} />
      </div>
      <div className="bx--col">
        <Button
          className="delete-button"
          kind="tertiary"
          renderIcon={Subtract16}
          hasIconOnly
          tooltipPosition="bottom"
          iconDescription="Remove"
          onClick={() => setSelectedKey(key)}
        />
      </div>
    </div>
  );
};
export default KeyValueRow;
