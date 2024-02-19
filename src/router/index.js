import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import DashboardVue from "@/views/Admin/Dashboard.vue";
import ResearchProposals from "@/views/Admin/ResearchProposals.vue";
import CreateProposal from "@/views/Admin/CreateProposals.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/404",
    name: "PageNotFound",
    component: PageNotFound,
  },
  //Admin Views
  {
    path: "/admin/dashboard",
    name: "adminDashboard",
    component: DashboardVue,
  },
  {
    path: "/admin/researchProposal",
    name: "researchProposal",
    component: ResearchProposals,
  },
  {
    path: "/admin/createProposal",
    name: "createProposal",
    component: CreateProposal,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
