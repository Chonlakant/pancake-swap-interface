import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'หน้าหลัก',
    icon: 'HomeIcon',
    href: 'http://pancakex-frontend.web.app/',
  },
  {
    label: 'เทรด',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'แลกเปลี่ยน',
        href: '/swap',
      },
      {
        label: 'ลิควิดลิตี้',
        href: '/pool',
      },
    ],
  },
  {
    label: 'ฟามร์',
    icon: 'FarmIcon',
    href: 'http://pancakex-frontend.web.app/farms',
  },
  {
    label: 'พูล',
    icon: 'PoolIcon',
    href: 'http://pancakex-frontend.web.app/pools',
  },
  {
    label: 'ลอตเตอรี่',
    icon: 'TicketIcon',
    href: 'http://pancakex-frontend.web.app/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'http://pancakex-frontend.web.app/nft',
  },
  {
    label: 'ทีม & โปรไฟล์',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://pancakeswap.finance/teams',
      },
      {
        label: 'Your Profile',
        href: 'https://pancakeswap.finance/profile',
      },
    ],
  },
  {
    label: 'เพิ่มเติม',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
    ],
  },
]

export default config