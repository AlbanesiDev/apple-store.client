import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { adminGuard } from "./core/guards/admin.guard";

export const routes: Routes = [
  { path: "", loadComponent: () => import("./public/pages/home/home.component").then((x) => x.HomeComponent) },
  {
    path: "shop",
    loadComponent: () => import("./public/pages/shop/shop.component").then((x) => x.ShopComponent),
    title: "Apple Store | Shop",
  },
  {
    path: "shop/:category",
    loadComponent: () => import("./public/pages/shop/shop.component").then((x) => x.ShopComponent),
    title: (params: ActivatedRouteSnapshot) => {
      const category = params.params["category"];
      const claneadCategory = category.replace("buy-", "");
      return `Apple Store | ${claneadCategory}`;
    },
  },
  {
    path: "shop/:category/:product-:color",
    loadComponent: () =>
      import("./public/pages/shop/product-details/product-details.component").then((x) => x.ProductDetailsComponent),
    title: "Apple Store | Shop",
  },
  {
    path: "bag-checkout",
    loadChildren: () => import("./public/pages/shop-checkout/shop-checkout.module").then((m) => m.ShopCheckoutModule),
    title: "Apple Store | Checkout",
  },

  {
    path: "login",
    loadChildren: () => import("./public/pages/login/login.module").then((m) => m.LoginModule),
    title: "Apple Store | Login",
  },
  {
    path: "choose-country-region",
    loadComponent: () =>
      import("./public/pages/country-region/country-region.component").then((m) => m.CountryRegionComponent),
    title: "Choose Your Country or Region",
  },
  {
    path: "dashboard",
    canLoad: [adminGuard],
    loadComponent: () => import("./admin/dashboard/dashboard.component").then((m) => m.DashboardComponent),
    title: "Dashboard | Panel",
    children: [
      {
        path: "analytics",
        loadComponent: () =>
          import("./admin/components/analytics/analytics.component").then((m) => m.AnalyticsComponent),
        title: "Dashboard | Analytics",
      },
      {
        path: "orders",
        loadComponent: () => import("./admin/components/orders/orders.component").then((m) => m.OrdersComponent),
        title: "Dashboard | Orders",
      },
      {
        path: "products",
        loadComponent: () =>
          import("./admin/components/crud-products/crud-products.component").then((m) => m.CrudProductsComponent),
        title: "Dashboard | Products",
        children: [
          {
            path: ":collection",
            loadComponent: () =>
              import("./admin/components/crud-products/crud/crud.component").then((m) => m.CrudComponent),
            title: "Dashboard | Products | Collection",
          },
        ],
      },
      {
        path: "users",
        loadComponent: () =>
          import("./admin/components/abm-users/abm-users.component").then((m) => m.AbmUsersComponent),
        title: "Dashboard | Users",
      },
    ],
  },
  {
    path: "choose-country-region",
    loadComponent: () => import("./public/pages/country-region/country-region.component").then((m) => m.CountryRegionComponent),
    title: "Dashboard | Users",
  },
  { path: "**", loadComponent: () => import("./public/pages/home/home.component").then((x) => x.HomeComponent) },
];
