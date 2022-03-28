import { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Tabs, Tab } from '@mui/material';
import ContactTab from '../ContactTab';
import SocialTab from '../SocialTab';
import GithubTab from '../GithubTab';
import ReputationTab from '../ReputationTab';

enum TabOption {
  contact,
  social,
  github,
  reputation,
  prices,
  charts
}

function CoinDetailTabs() {
  const [tab, setTab] = useState(TabOption.contact);

  return (
    <>
      <Tabs
        value={tab}
        onChange={(_event, newValue) => setTab(newValue)}
        aria-label="Coin details tab"
      >
        <Tab icon={<PhoneIcon />} label="Contact" />
        <Tab icon={<TwitterIcon />} label="Social" />
        <Tab icon={<GitHubIcon />} label="Github" />
        <Tab icon={<StarIcon />} label="Reputation" />
        <Tab icon={<AttachMoneyIcon />} label="Prices" />
        <Tab icon={<BarChartIcon />} label="Charts" />
      </Tabs>

      { tab === TabOption.contact && <ContactTab /> }
      { tab === TabOption.social && <SocialTab /> }
      { tab === TabOption.github && <GithubTab /> }
      { tab === TabOption.reputation && <ReputationTab /> }
    </>
  );
}

export default CoinDetailTabs;
