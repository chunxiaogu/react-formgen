import { makeStyles } from '@material-ui/styles';
import React, { useCallback } from 'react';

import { ElementData } from '../types';
import { DefaultValueSetting, DisabledSetting, LabelSetting, NameSetting, RequiredSetting } from './options';

export interface TextFieldSettingsProps {
  data: ElementData;
  onUpdateElement?: (payload: Partial<ElementData>) => void;
}

const useStyles = makeStyles({
  field: {
    display: 'block',
    marginBottom: 10,
  },
});

const TextFieldSettings: React.FC<TextFieldSettingsProps> = ({
  data,
  onUpdateElement,
}) => {
  const classes = useStyles();
  const updateElement = useCallback((payload: Partial<ElementData>) => {
    if (onUpdateElement) {
      onUpdateElement(payload);
    }
  }, []);
  return (
    <div>
      <NameSetting className={classes.field} data={data} update={updateElement} />
      <LabelSetting className={classes.field} data={data} update={updateElement} />
      <DefaultValueSetting className={classes.field} data={data} update={updateElement} />
      <RequiredSetting className={classes.field} data={data} update={updateElement} />
      <DisabledSetting className={classes.field} data={data} update={updateElement} />
    </div>
  );
};

export default TextFieldSettings;
