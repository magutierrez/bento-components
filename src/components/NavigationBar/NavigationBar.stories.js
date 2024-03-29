import React from 'react';
import NavigationBar from './index';
import List from '../List';
import ListItem from '../List/ListItem';
import * as Icons from '../../icons';
import { IconSettings, IconUpdate, IconUser } from '../../icons';
import TextLink from '../TextLink';
import { Dropdown } from '../../index';

const HeaderLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 99 25"
    style={{ width: '100px' }}
  >
    <path fill="#1778FB" d="M0 15L16.9998 5v20L0 15z" />
    <path fill="#48AAF1" d="M0 4.98927L8.34259 0 17 5 0 15V4.98927z" />
    <path
      fill="#363C4B"
      d="M33.6885 8.73502c.8565 0 1.624.19067 2.3026.57202.6785.38136 1.2068.91416 1.585 1.59836.3894.6842.584 1.4749.584 2.3722 0 .8973-.1946 1.6937-.584 2.3891-.3782.6842-.9065 1.2169-1.585 1.5983-.6786.3813-1.4461.572-2.3026.572-.634 0-1.218-.1234-1.7519-.3701-.5228-.2468-.9678-.6057-1.3348-1.0768V21H29V8.81914h1.535v1.41326c.356-.49353.8065-.86367 1.3515-1.11042.5451-.25798 1.1457-.38696 1.802-.38696zm-.1335 7.68878c.5673 0 1.0734-.129 1.5184-.387.456-.2692.812-.6393 1.0678-1.1104.267-.4823.4005-1.0319.4005-1.6488s-.1335-1.1609-.4005-1.632c-.2558-.4823-.6118-.8524-1.0678-1.1104-.445-.2579-.9511-.3869-1.5184-.3869-.5561 0-1.0623.1346-1.5183.4038-.4449.2579-.8009.6225-1.0679 1.0935-.2558.4711-.3837 1.0151-.3837 1.632s.1279 1.1665.3837 1.6488c.2559.4711.6118.8412 1.0679 1.1104.456.258.9622.387 1.5183.387zM44.1608 17.837c-.8788 0-1.6685-.1963-2.3693-.5888-.7008-.3926-1.2514-.931-1.6518-1.6152-.3894-.6954-.584-1.4805-.584-2.3554s.1946-1.6544.584-2.3386c.4004-.6954.951-1.23378 1.6518-1.61513.7008-.39257 1.4905-.58885 2.3693-.58885.8787 0 1.6629.19628 2.3526.58885.7007.38135 1.2458.91973 1.6351 1.61513.4004.6842.6007 1.4637.6007 2.3386s-.2003 1.66-.6007 2.3554c-.3893.6842-.9344 1.2226-1.6351 1.6152-.6897.3925-1.4739.5888-2.3526.5888zm0-1.4132c.5673 0 1.0734-.129 1.5183-.387.4561-.2692.812-.6393 1.0679-1.1104.2558-.4823.3837-1.0319.3837-1.6488s-.1279-1.1609-.3837-1.632c-.2559-.4823-.6118-.8524-1.0679-1.1104-.4449-.2579-.951-.3869-1.5183-.3869s-1.079.129-1.5351.3869c-.4449.258-.8009.6281-1.0678 1.1104-.2559.4711-.3838 1.0151-.3838 1.632s.1279 1.1665.3838 1.6488c.2669.4711.6229.8412 1.0678 1.1104.4561.258.9678.387 1.5351.387zM52.4994 10.3165c.2781-.51594.6897-.90851 1.2347-1.1777.545-.26919 1.2069-.40378 1.9855-.40378v1.56468c-.089-.0112-.2113-.0168-.367-.0168-.8677 0-1.5518.2635-2.0523.7907-.4894.516-.7342 1.2562-.7342 2.2208v4.4417h-1.6017V8.81914h1.535v1.49736zM63.0244 17.2145c-.2336.2019-.5228.3589-.8676.4711-.3448.1009-.7008.1514-1.0678.1514-.8899 0-1.5796-.2411-2.069-.7234-.4894-.4823-.7341-1.1721-.7341-2.0694v-4.8959h-1.5017V8.81914h1.5017V6.86751h1.6017v1.95163h2.5362v1.32916h-2.5362v4.8286c0 .4823.1168.8524.3504 1.1104.2447.258.5896.3869 1.0345.3869.4894 0 .9066-.1402 1.2514-.4206l.5005 1.1609zM68.1979 6.48055c-.9566 0-1.435.52155-1.435 1.56466v.77393h2.5696v1.32916h-2.5362v7.5878h-1.6018v-7.5878h-1.5016V8.81914h1.5016v-.79075c0-.88608.2559-1.5871.7676-2.10305.5116-.51595 1.2291-.77392 2.1523-.77392.356 0 .6897.04486 1.0011.13459.3115.08973.5785.21872.8009.38697l-.4838 1.22818c-.3671-.28041-.7787-.42061-1.2347-.42061zM74.5003 17.837c-.8788 0-1.6685-.1963-2.3693-.5888-.7008-.3926-1.2514-.931-1.6518-1.6152-.3894-.6954-.584-1.4805-.584-2.3554s.1946-1.6544.584-2.3386c.4004-.6954.951-1.23378 1.6518-1.61513.7008-.39257 1.4905-.58885 2.3693-.58885.8787 0 1.6629.19628 2.3526.58885.7007.38135 1.2458.91973 1.6351 1.61513.4005.6842.6007 1.4637.6007 2.3386s-.2002 1.66-.6007 2.3554c-.3893.6842-.9344 1.2226-1.6351 1.6152-.6897.3925-1.4739.5888-2.3526.5888zm0-1.4132c.5673 0 1.0734-.129 1.5183-.387.4561-.2692.812-.6393 1.0679-1.1104.2558-.4823.3837-1.0319.3837-1.6488s-.1279-1.1609-.3837-1.632c-.2559-.4823-.6118-.8524-1.0679-1.1104-.4449-.2579-.951-.3869-1.5183-.3869s-1.079.129-1.5351.3869c-.4449.258-.8008.6281-1.0678 1.1104-.2558.4711-.3838 1.0151-.3838 1.632s.128 1.1665.3838 1.6488c.267.4711.6229.8412 1.0678 1.1104.4561.258.9678.387 1.5351.387zM81.3039 5.25237h1.6018V17.7361h-1.6018V5.25237zM85.964 8.81914h1.6017v8.91696H85.964V8.81914zm.8009-1.71609c-.3115 0-.5729-.10095-.7842-.30284-.2003-.20189-.3004-.44865-.3004-.74027 0-.29163.1001-.53838.3004-.74028C86.192 5.10655 86.4534 5 86.7649 5c.3114 0 .5673.10095.7675.30284.2113.19068.317.43182.317.72345 0 .30284-.1057.56081-.317.77392-.2002.20189-.4561.30284-.7675.30284zM94.4116 17.837c-.8788 0-1.6685-.1963-2.3693-.5888-.7008-.3926-1.2514-.931-1.6518-1.6152-.3893-.6954-.584-1.4805-.584-2.3554s.1947-1.6544.584-2.3386c.4004-.6954.951-1.23378 1.6518-1.61513.7008-.39257 1.4905-.58885 2.3693-.58885.8787 0 1.6629.19628 2.3526.58885.7008.38135 1.2458.91973 1.6351 1.61513.4005.6842.6007 1.4637.6007 2.3386s-.2002 1.66-.6007 2.3554c-.3893.6842-.9343 1.2226-1.6351 1.6152-.6897.3925-1.4739.5888-2.3526.5888zm0-1.4132c.5673 0 1.0734-.129 1.5183-.387.4561-.2692.812-.6393 1.0679-1.1104.2558-.4823.3837-1.0319.3837-1.6488s-.1279-1.1609-.3837-1.632c-.2559-.4823-.6118-.8524-1.0679-1.1104-.4449-.2579-.951-.3869-1.5183-.3869s-1.079.129-1.535.3869c-.445.258-.8009.6281-1.0679 1.1104-.2558.4711-.3837 1.0151-.3837 1.632s.1279 1.1665.3837 1.6488c.267.4711.6229.8412 1.0679 1.1104.456.258.9677.387 1.535.387z"
    />
  </svg>
);

export default {
  title: 'NavigationBar',
  component: NavigationBar,
  subcomponents: { TextLink, List, ListItem, Dropdown },
  argTypes: {
    children: {
      description:
        'Content of the NavigationBar. Elements aligned right corner before rightContent if informed',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    header: {
      description: 'Content for the header of the NavigationBar. It will align left.',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    dropdownMenu: {
      description:
        'Elements to be included in the main menu on the left. Usually used with `<List>`',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    iconMenu: {
      description: 'Icon to be used for the main menu of the left',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    sticked: {
      description:
        "Applies 'sticky' property to the navbar and stays on top of screen when scrolling",
      table: {
        category: 'format'
      }
    },
    loading: {
      description: ' Shows a loading skeleton',
      table: {
        category: 'format'
      }
    },
    rightContent: {
      description:
        'Places node on the right corner of the Navbar. For example, it can be used with `<Dropdown>`',
      control: 'none',
      table: {
        category: 'content'
      }
    }
  },
  args: {
    header: HeaderLogo
  }
};

export const Playground = ({ isSticky, iconMenu, ...args }) => {
  const CustomIcon = Icons[iconMenu];

  return (
    <div style={{ height: isSticky ? '5000px' : 'auto' }}>
      <NavigationBar {...args} iconMenu={<CustomIcon size={'large'} />}>
        <a className={'active'} href="https://pulse.urbandataanalytics.com/">
          Normal Link
        </a>
        <a href="https://pulse.urbandataanalytics.com/">Active Link</a>
        <TextLink href="https://pulse.urbandataanalytics.com/" size={'large'} variant={'primary'}>
          Product 1
        </TextLink>
        <TextLink href="https://pulse.urbandataanalytics.com/" size={'large'} variant={'secondary'}>
          Product 2
        </TextLink>
        <IconSettings color={'secondary'} />
      </NavigationBar>
    </div>
  );
};

Playground.args = {
  rightContent: (
    <Dropdown align="right" label={<IconUser style={{ marginRight: '30px' }} />}>
      <ListItem leftContent={<IconUser />}>Text</ListItem>
      <ListItem leftContent={<IconUpdate />}>Text</ListItem>
    </Dropdown>
  ),
  dropdownMenu: (
    <List>
      <ListItem leftContent={<IconUser />}>Text</ListItem>
      <ListItem leftContent={<IconUpdate />}>Text</ListItem>
    </List>
  ),
  iconMenu: 'IconMove'
};
export const WithoutMenu = args => <NavigationBar {...args}></NavigationBar>;

export const Loading = args => <NavigationBar {...args} />;

Loading.args = {
  loading: true
};
