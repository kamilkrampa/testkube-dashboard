import {useContext} from 'react';

import {Space} from 'antd';

import {EntityDetailsContext} from '@src/contexts';

import Delete from './Delete';
import Labels from './Labels';
import NameNDescription from './NameNDescription';
import Timeout from './Timeout';

const SettingsGeneral: React.FC = () => {
  const {entity} = useContext(EntityDetailsContext);

  return (
    <Space size={30} direction="vertical">
      <NameNDescription />
      <Labels />
      {entity === 'tests' ? <Timeout /> : null}
      <Delete />
    </Space>
  );
};

export default SettingsGeneral;
