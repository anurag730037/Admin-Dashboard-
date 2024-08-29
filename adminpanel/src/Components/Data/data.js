import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  DonutLarge,
  MailOutline,
  ThumbUpOffAlt,
  WorkOutline,
  Insights,
  ReportGmailerrorred,
  ArrowDownward,
  ArrowUpward,
} from "@mui/icons-material";

export const sidemenu = [
  {
    title: "Dashboard",
    item: [
      { name: "Home", icon: LineStyle, link: "/" },
      { name: "Analytics", icon: Timeline, link: "/" },
      { name: "Sales", icon: TrendingUp, link: "/" },
    ],
  },
  {
    title: "Quick Menu",
    item: [
      { name: "User", icon: PermIdentity, link: "/users" },
      { name: "Product", icon: Storefront, link: "/products" },
      { name: "Transaction", icon: AttachMoney, link: "/transaction" },
      { name: "Report", icon: DonutLarge, link: "/report" },
    ],
  },
  {
    title: "Notification",
    item: [
      { name: "Mail", icon: MailOutline },
      { name: "Message", icon: MailOutline },
      { name: "Feedback", icon: ThumbUpOffAlt },
    ],
  },
  {
    title: "Staff",
    item: [
      { name: "Manage", icon: WorkOutline },
      { name: "Analytics", icon: Insights },
      { name: "Report", icon: ReportGmailerrorred },
    ],
  },
];

export const features = [
  {
    title: "Revanue",
    money: "2,425",
    rate: "-11.5",
    arrow: ArrowDownward,
  },
  {
    title: "Sales",
    money: "4,269",
    rate: "-1.5",
    arrow: ArrowDownward,
  },
  {
    title: "Cost",
    money: "2,925",
    rate: "+3.5",
    arrow: ArrowUpward,
  },
];
