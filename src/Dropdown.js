import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import Tag from 'antd';
const items = [
  {
    key: '1',
    label: 'High',
  },
  {
    key: '2',
    label: 'Low',
  },
  
];
const Dropdown1 = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }}
  >
    <Typography.Link>
      <Space>
       Độ ưu tiên
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default Dropdown1;