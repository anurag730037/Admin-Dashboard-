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
      { name: "Home", icon: LineStyle },
      { name: "Analytics", icon: Timeline },
      { name: "Sales", icon: TrendingUp },
    ],
  },
  {
    title: "Quick Menu",
    item: [
      { name: "User", icon: PermIdentity },
      { name: "Product", icon: Storefront },
      { name: "Transaction", icon: AttachMoney },
      { name: "Report", icon: DonutLarge },
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
