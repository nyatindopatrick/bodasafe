// component's config object.
const components = {
  admin: {
    component: "AdminOnly",
    url: "/admin-only",
    title: "Admin Only",
    icon: "menu",
    module: 1
  },
  users: {
    component: "Users",
    url: "/users",
    title: "Users",
    icon: "menu",
    module: 1
  },
  dashboard: {
    component: "Dashboard",
    url: "/",
    title: "Dashboard",
    icon: "menu",
    module: 1
  },
  sacco: {
    component: "Sacco",
    url: "/sacco",
    title: "Sacco",
    icon: "menu",
    module: 1
  },
  riders: {
    component: "Riders",
    url: "/riders",
    title: "Riders",
    icon: "menu",
    module: 1
  },
  multistep: {
    component: "Multistep",
    url: "/multistep",
    title: "Multistep",
    icon: "menu",
    module: 1
  },
  sms: {
    component: "Sms",
    url: "/sms",
    title: "Sms",
    icon: "menu",
    module: 1
  },
  newSacco: {
    component: "NewSacco",
    url: "/newsacco",
    title: "New sacco",
    icon: "menu",
    module: 1
  },
    newRider: {
    component: "NewRider",
    url: "/newrider",
    title: "New Rider",
    icon: "menu",
    module: 1
  }
};

// modules for grouping.
const modules = {
  0: {
    title: "Dashboard",
    icon: "home",
    isExpendable: true
  }
};

// component's access to roles.
const rolesConfig = [...Object.values(components)]
  

export { modules, rolesConfig };
