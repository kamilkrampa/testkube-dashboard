import {useContext} from 'react';

import {Form, Input, Space} from 'antd';

import {Text} from '@custom-antd';

import {ConfigurationCard, notificationCall} from '@molecules';

import {digits} from '@utils/form';
import {displayDefaultErrorNotification, displayDefaultNotificationFlow} from '@utils/notification';

import {useUpdateTestMutation} from '@services/tests';

import {EntityDetailsContext} from '@contexts';

type TimeoutForm = {
  activeDeadlineSeconds?: number;
};

const Timeout: React.FC = () => {
  const {entityDetails} = useContext(EntityDetailsContext);
  const {executionRequest, name} = entityDetails;

  const [form] = Form.useForm<TimeoutForm>();

  const [updateTest] = useUpdateTestMutation();

  const onSave = (values: TimeoutForm) => {
    const {activeDeadlineSeconds} = values;

    updateTest({
      id: name,
      data: {
        ...entityDetails,
        executionRequest: {
          ...executionRequest,
          activeDeadlineSeconds: activeDeadlineSeconds ? Number(activeDeadlineSeconds) : 0,
        },
      },
    })
      .then(res => {
        displayDefaultNotificationFlow(res, () => {
          notificationCall('passed', 'Test Timeout was successfully updated.');
        });
      })
      .catch(err => {
        displayDefaultErrorNotification(err);
      });
  };

  return (
    <Form
      form={form}
      onFinish={onSave}
      name="general-settings-name-description"
      initialValues={{activeDeadlineSeconds: executionRequest?.activeDeadlineSeconds}}
    >
      <ConfigurationCard
        title="Timeout"
        description="Define the timeout in seconds after which this test will fail."
        onConfirm={() => {
          form.submit();
        }}
        onCancel={() => {
          form.resetFields();
        }}
        footerText={
          <Text className="regular middle">
            Learn more about{' '}
            <a
              href="https://kubeshop.github.io/testkube/using-testkube/test-suites/testsuites-creating/"
              target="_blank"
            >
              Timeouts
            </a>
          </Text>
        }
      >
        <Space size={32} direction="vertical" style={{width: '100%'}}>
          <Form.Item name="activeDeadlineSeconds" rules={[digits]} style={{marginBottom: '0px'}}>
            <Input placeholder="Timeout in seconds" />
          </Form.Item>
        </Space>
      </ConfigurationCard>
    </Form>
  );
};

export default Timeout;
