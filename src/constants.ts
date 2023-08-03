const breadcrumbNameMap: { [key: string]: string } = {
  "/": "Dashboard",
  "/data-view": "Data View",
  "/data-view/regional-indicator": "Regional Indicator",
  "/data-view/district-performance": "District Performance",
  "/blog": "Blog",
  "/learn": "Learn",
  "/regional": "Regional",
  "/regional/reports": "Reports",
  "/regional/innovation-docs": "Innovation Document",
  "/profile": "Profile",
  "/notifications": "Notifications",
};

const fileSelect = [
  {
    value: "application/pdf",
    label: "PDF",
  },
  {
    value:
      "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    label: "Word",
  },
  {
    value:
      "application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation",
    label: "PowerPoint",
  },
  {
    value:
      "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    label: "Excel",
  },
];

const regions = [
  "Ashanti Region",
  "Eastern Region",
  "Volta Region",
  "Greater Accra Region",
  "Central Region",
  "Bono Region",
  "Upper East Region",
  "Upper West Region",
  "Western North Region",
  "Savanah Region",
  "Northern Region",
  "Bono East Region",
  "Oti Region",
  "Ahafo Region",
  "Western Region",
  "North East Region",
];

export { breadcrumbNameMap, fileSelect, regions };
